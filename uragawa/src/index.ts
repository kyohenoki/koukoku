import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import { cors } from 'hono/cors'
import { format } from 'date-fns'

const app = new Hono()

export type okuruKomoku = {
  id: string,
  date: {
    f: string,
    m: string
  }
}

function jikan(d: Date) {
  const d1 = format(d, 'yyyy-MM-dd HH:mm:ss')
  const d2 = d.getTime().toString()
  return {
    f: d1,
    m: d2
  }
}

app.use(prettyJSON())

app.use(
  '/api/*',
  cors({
    origin: 'http://localhost:5173',
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type'],
    credentials: true
  })
)

app.get('/', (c) => {
  return c.text('uragawa')
})

app.post('/api/jikan', async (c) => {
  const body = await c.req.json<{ item: string }>()
  const okuru: okuruKomoku = {
    id: body.item,
    date: jikan(new Date())
  }
  return c.json(okuru)
})

export default app
