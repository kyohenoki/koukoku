import { Metadata } from "next"

import { Koukoku, Nakami } from "koukoku"

export const metadata: Metadata = {
  title: "playground",
  description: "koukokuの試すところ"
}

export default function Page() {
  const nakami: Nakami = {
    id: "tsugi",
    hitokoto: "なんかいい広告"
  }
  return (
    <main className="antialiased p-5 w-full flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl">koukokuの試すところ</h1>
        <Koukoku nakami={nakami} className="w-full max-w-[450px] aspect-[3/2] bg-neutral-100"/>
      </div>
    </main>
  )
}
