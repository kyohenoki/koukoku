"use client"

import { useEffect, useState } from "react"
import type { Nakami } from "./nakami"
import koncha from "./okuru"

export default function Koukoku({nakami, className}: {nakami: Nakami, className?: string}) {
  const [okuru, setOkuru] = useState(null)

  useEffect(() => {
    async function morau() {
      const o = await koncha("iine")
      setOkuru(o)
    }
    morau()
  }, [])
  
  return (
    <div className={`cursor-pointer max-w-[430px] w-full aspect-[3/2] bg-neutral-100 ${className}`}>
      <div className="w-full h-full relative flex flex-col items-center justify-center text-neutral-400 select-none">
        <h1>{nakami.id}</h1>
        <Hitokoto bun={nakami.hitokoto}/>
        <Hitokoto bun={okuru}/>
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
