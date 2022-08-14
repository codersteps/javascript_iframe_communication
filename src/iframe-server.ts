import express from 'express'

const PORT = 4000

const server = express()

server.use(express.static('public'))

server.listen(PORT, () => {
  console.log(`iframe server is listening on http://localhost:${PORT}/`)
})
