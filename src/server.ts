import express from 'express'

const PORT = 3000

const server = express()

server.use(express.static('public'))

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}/`)
})
