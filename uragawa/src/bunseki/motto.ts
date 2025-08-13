// 24 (7 / 17)
// const timestamp = motto(24)

import { tsukuru } from "idtsukuru"
import { differenceInMinutes, parse } from "date-fns"

console.log(motto(24))

function motto(len: number) {
  const jikan = jid()
  const mozi = tsukuru(2, len - 7)
  return mozi + " " + jikan
}

function jisa() {
  const now = new Date()
  const sa = parse("2025/01/01 00:00", "yyyy/MM/dd HH:mm", now)
  return differenceInMinutes(now, sa)
}

function jid() {
  const ji = jisa()
  const ango = henkan(ji, true)
  return ango
}

// true : nを線形変換ってやつをする
// 1234567890abcdefhiklmnortuvwxz

export function henkan(n: number, mo: boolean) {
  const a = 13
  const m = 21870000000
  // return m / a
  const d = new Date().getTime()
  return d
}
