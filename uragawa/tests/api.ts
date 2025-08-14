import ky from "ky"
import type { LogKomoku } from "../src/bunseki/log.ts"

async function apitest() {
  const api = ky.create({
    prefixUrl: 'http://localhost:8787'
  })
  try {
    const getlog = await api.get("api/log").json<LogKomoku>()
    return getlog
  } catch (err) {
    return (err as Error).message
  }
}

console.log(await apitest())
