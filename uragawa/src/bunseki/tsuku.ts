import { tsukuru } from "idtsukuru"
import { Base30Encoder } from "./time.ts"

export function timestamp(now: Date) {
  const mili = now.getTime()
  return mili
}

export function sessionid() {
  // timeを分ごとにランダムに出来るようにする
  const time = new Base30Encoder()
  const nana = time.generateId()
  const rand = tsukuru(2, 17)
  return nana + rand
}
