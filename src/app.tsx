import { Koukoku, Nakami } from "@/koukoku/index"

export default function App() {
  const nakami: Nakami = {
    id: "ichiban",
    hitokoto: "私は試しの広告だ！"
  }
  return (
    <main className="antialiased p-5">
      <h1 className="text-[1.35rem]">koukokuの試すところ</h1>
      <div className="pt-3">
        <Koukoku nakami={nakami}/>
      </div>
    </main>
  )
}
