// import Koukoku from "./block"
// import { Mitame } from "./mitame"

import Block from "./blocks"
import { Nakami } from "./nakami"

export default function Index() {
  const nakami: Nakami = {
    id: "ichiban"
  }
  return (
    <main className="antialiased p-5 w-full flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full flex flex-col justify-center items-center">
        <Block nakami={nakami} className="w-full max-w-[450px] aspect-[3/2] bg-neutral-100"/>
      </div>
    </main>
  )
}

// ただただ彷徨い心ときめる偶然の発見


/*

  const mitame: Mitame = {
    id: "ichiban",
    width: "fit"
  }

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
*/
