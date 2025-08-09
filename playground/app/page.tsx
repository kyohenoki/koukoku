import { Metadata } from "next"
import Koukoku from "koukoku/block"

export const metadata: Metadata = {
  title: "playground",
  description: "koukokuの試すところ"
}

export default function Page() {
  return (
    <main className="p-5">
      <h1 className="text-2xl">koukokuの試すところ</h1>
      <Koukoku/>
    </main>
  )
}
