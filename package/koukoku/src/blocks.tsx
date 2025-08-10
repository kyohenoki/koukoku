import { Nakami } from "./nakami"

type BlockKomoku = {
  nakami: Nakami,
  className?: string
}

export default function Block({nakami, className}: BlockKomoku) {
  return (
    <div className={`${className} cursor-pointer`}>
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-neutral-400 select-none">{nakami.id}</h1>
      </div>
    </div>
  )
}

// <img src="example.jpg" class="select-none pointer-events-auto" draggable="false" />
// ドラッグ禁止（コピーしないほしいわけではなく、動作のため）

/*

        <div className="absolute top-0 right-0 w-8 h-8 rounded-full">
          <div className="flex w-full h-full items-center justify-center">
            <div className="w-4 h-4 bg-neutral-500/30 rounded-full"></div>
          </div>
        </div>

*/
