import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

import { connect } from './utils/db'

export const app = express()

app.disable('x-powered-by')
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const port = process.env.PORT || 3000

export const start = async () => {
  try {
    await connect()
    app.listen(port, () => {
      console.log(`REST API listening son http://localhost:${port}/`)
    })
  } catch (e) {
    console.error(e)
  }
}
