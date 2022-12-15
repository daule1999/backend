const express = require('express')

const app = express()

app.get("/", (req, res) => {
  res.json({
    msg: "backend"
  })
})

app.listen(3000, () => {
  console.log('server started')
})
