import { merge } from 'lodash'
import { DB_URL, JWT_SECRET } from 'babel-dotenv'
const env = process.env.NODE_ENV || 'development'

const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: 3000,
  secrets: {
    jwt: process.env.JWT_SECRET || JWT_SECRET,
    jwtExp: '5d',
  },
  dbUrl: process.env.DB_URL || DB_URL,
}

export default baseConfig
