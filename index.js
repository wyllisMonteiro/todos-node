const express = require('express')
const app = express()
const port = 3000

const v1 = "/api/v1"

const todos = require('./src/api/v1/routes/todos.route');
app.use(v1 + "/todos", todos)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})