import type { Nakami } from "./nakami"

export default function Koukoku({nakami, className}: {nakami: Nakami, className?: string}) {
  return (
    <div className={`cursor-pointer max-w-[430px] w-full aspect-[3/2] bg-neutral-100 ${className}`}>
      <div className="w-full h-full relative flex flex-col items-center justify-center text-neutral-400 select-none">
        <h1>{nakami.id}</h1>
        <Hitokoto bun={nakami.hitokoto}/>
      </div>
    </div>
  )
}

function Hitokoto({bun}: {bun?: string}) {
  if (bun) {
    return (
      <h2>{bun}</h2>
    )
  }
}
