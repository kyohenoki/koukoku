export type Mitame = {
  id?: string,
  width?: string,
  height?: string,
  aspect?: string,
  bgcolor?: string
}

const shoki: Mitame = {
  width: "100px",
  aspect: "3/2",
  bgcolor: "#2559d4"
}

export function mikaiseki(mitame: Mitame): string {
  let m = ""
  m = tuika(m, mitame.id, shoki.id, "id")
  m = tuika(m, mitame.width, shoki.width, "width")
  m = tuika(m, mitame.height, shoki.height, "height")
  m = tuika(m, mitame.aspect, shoki.aspect, "aspect")
  m = tuika(m, mitame.bgcolor, shoki.bgcolor, "bgcolor")
  return m
}

function tuika(m: string, mitame: string | undefined, s: string | undefined, nani: string) {
  let t = m
  if (mitame) {
    t += henkan(mitame, nani) + " "
  } else {
    if (s) {
      t += henkan(s, nani) + " "
    }
  }
  return t
}

function henkan(text: string, nani: string) {
  let m = text
  if (nani === "id") {
    m = text
  } else if (nani === "width") {
    m = "w-[" + text + "]"
  } else if (nani === "height") {
    m = "h-[" + text + "]"
  } else if (nani === "aspect") {
    m = "aspect-[" + text + "]"
  }
  return m
}

// <div style={{ "--w": "150px", "--h": "80px" }} />
