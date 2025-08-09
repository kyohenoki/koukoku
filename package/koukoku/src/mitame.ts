import * as z from "zod"

const Mitame = z.object({ 
  id: z.string(),
  width: z.string(),
  height: z.string()
})

// zod を使って見た目の設定
// まずは縦横・IDを設定する

export type Mitame = {
  width?: number | string,
  height?: number | string,
  id: string 
}
