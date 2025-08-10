import { Nakami } from "./nakami"

type Komoku = {
  nakami: Nakami,
  className?: string
}

export default function Koukoku({nakami, className}: Komoku) {
  return (
    <div className={`${className} cursor-pointer`}>
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-neutral-400 select-none">{nakami.id}</h1>
        <h2 className="text-neutral-400 select-none">{nakami.hitokoto}</h2>
        <div className="absolute top-0 right-0 m-3 w-4 h-4 bg-neutral-500/30 rounded-full"></div>
      </div>
    </div>
  )
}
