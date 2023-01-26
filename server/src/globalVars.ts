export const PORT = 5000
export const isPROD = process.env.NODE_ENV === 'prod'
export const isDEV = process.env.NODE_ENV === 'dev'
export const DB_URL = 'mongodb://127.0.0.1:27017/auth'
export const aTokenSecret = 'aTokenSecret'
export const rTokenSecret = 'rTokenSecret'
export const aTokenExpired = '1h'
export const rTokenExpired = '30d'
