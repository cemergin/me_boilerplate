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

const modifyConfig = (config) => {
  switch (config.env) {
    case 'test':
    case 'testing':
      // Testing stuff
      config = {
        ...config,
        dbUrl: 'mongodb://127.0.0.1:27017/test',
        secrets: { ...config.secrets, jwt: 'testing' },
      }
      break
    case 'dev':
    case 'development':
    default:
      config = {
        ...config,
        dbUrl: 'mongodb://127.0.0.1:27017/dev',
        secrets: { ...config.secrets, jwt: 'development' },
      }
  }
  return config
}

export default modifyConfig(baseConfig)
