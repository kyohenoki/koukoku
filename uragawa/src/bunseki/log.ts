// 作ったとき load
// 画面に表示されたとき mita
// クリックされたとき click
// ページが閉じたとき close

import * as tsuku from "./tsuku.ts"

export function make() {
  // timestamp
  // sessionid
  const log: LogKomoku = {
    ts: tsuku.timestamp(new Date()),
    sid: tsuku.sessionid()
  }
  return log
}

export type LogKomoku = {
  ts: number,
  sid: string
}
