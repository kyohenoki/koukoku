// import { Koukoku } from "koukoku"
// import type { Nakami } from "koukoku"

import { Koukoku } from "@koukoku/index"
import type { Nakami } from "@koukoku/index"

export default function App() {
  const nakami: Nakami = {
    id: "ichiban",
    hitokoto: "きっとここにはいい広告が載る"
  }
  return (
    <main className="antialiased p-5">
      <h1 className="text-[1.35rem]">koukokuの試すところ</h1>
      <div className="py-3">
        <Koukoku nakami={nakami} className="bg-neutral-50"/>
      </div>
    </main>
  )
}
