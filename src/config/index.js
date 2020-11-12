
const ENV_BASE_URL = {
  development: 'https://api.7wpp.com',
  production: 'https://api.7wpp.com',
}


const Config = {
  baseURL: ENV_BASE_URL[process.env.NODE_ENV || 'development'],
}

export default Config
