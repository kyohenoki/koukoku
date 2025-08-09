import Koukoku from "./block"
import type { Mitame } from "./mitame"

export default function Index() {
  const mitame: Mitame = {
    id: "s"
  }
  return (
    <main className="antialiased p-5">
      <Koukoku/>
    </main>
  )
}
