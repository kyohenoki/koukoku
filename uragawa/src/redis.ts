import Redis from 'ioredis'

const redis = new Redis()

async function main() {
  await redis.set('aki', 'suzushii')

  const val = await redis.get('aki')
  console.log('aki:', val)

  await redis.incr('counter')
  const count = await redis.get('counter')
  console.log('counter:', count)

  redis.quit()
}

// main().catch(console.error)
console.log(await hikidashi('aki'))

async function hikidashi(naniwo: string): Promise<string> {
  try {
    const val = await redis.get(naniwo)
    redis.quit()
    if (val) {
      return val
    } else {
      return "null"
    }
  } catch (err) {
    return (err as Error).message
  }
}
