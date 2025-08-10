import Koukoku from "../block"
import { Nakami } from "../nakami"

export default function Index() {
  const nakami: Nakami = {
    id: "ichiban",
    hitokoto: "彷徨い出会う心ときめく偶然の発見"
  }
  return (
    <main className="antialiased p-5 w-full flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full flex flex-col justify-center items-center">
        <Koukoku nakami={nakami} className="w-full max-w-[450px] aspect-[3/2] bg-neutral-100"/>
      </div>
    </main>
  )
}
