import ky from 'ky'
import type { okuruKomoku } from '@uragawa/index'

async function request(item: string) {
  try {
    const api = ky.create({
      prefixUrl: 'http://localhost:8787'
    })
    const res = await api.post('api/jikan', {
      json: { item }
    }).json<okuruKomoku>()
    console.log(res.id, res.date)
  } catch (err) {
    console.error('error', err)
  }
}

request("ichiban")
