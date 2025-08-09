import { Mitame, mikaiseki } from "./mitame"
import gazou from "./assets/koukoku.png"

export default function Koukoku({mitame}: {mitame: Mitame}) {
//  const m = mikaiseki(mitame)
  return (
    /* className={m}*/
    <div className="w-full aspect-[3/2] relative overflow-hidden">
      <img src={gazou} alt="gazou" className="absolute"/>
    </div>
  )
}
