import Koukoku from "./block"
import { Mitame } from "./mitame"

export default function Index() {
  const mitame: Mitame = {
    id: "ichiban",
    width: "fit"
  }
  return (
    <main className="antialiased p-5">
      <div className="w-[350px] flex flex-col items-center justify-center bg-neutral-800">
        <div className="p-5 w-full flex flex-col items-center">
          <div className="text-white mb-5 text-2xl">
            <h1 className="mb-2">広告は出会い</h1>
            <h2 className="mb-2">インターネットの中をただただ自由に彷徨い、ふと目に入る静止画。</h2>
            <h2 className="mb-2">心を引く、短いキャッチフレーズ。自分の心がときめく偶然の発見。</h2>
          </div>
          <Koukoku mitame={mitame}/>
        </div>
      </div>
    </main>
  )
}
