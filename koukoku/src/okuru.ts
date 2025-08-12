import ky from 'ky'
import type { okuruKomoku } from '@uragawa/index'

type Result<Komoku> = { success: true; res: Komoku } | { success: false; error: string }

async function request(item: string): Promise<Result<okuruKomoku>> {
  try {
    const api = ky.create({
      prefixUrl: 'http://localhost:8787'
    })
    const res = await api.post('api/jikan', {
      json: { item }
    }).json<okuruKomoku>()
    return {
      success: true,
      res
    }
  } catch (err) {
    return {
      success: false,
      error: (err as Error).message
    }
  }
}

export default async function koncha(item: string): Promise<string> {
  try {
    const okuru = await request(item)
    if (okuru.success) {
      const gattai = okuru.res.id + " : " + okuru.res.date.f
      return gattai
    } else {
      return "error"
    }
  } catch (err) {
    return "error"
  }
}
