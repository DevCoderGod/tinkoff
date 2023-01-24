export const PORT = 5000
export const isPROD = process.env.NODE_ENV === 'prod'
export const isDEV = process.env.NODE_ENV === 'dev'
export const authDBpath = 'mongodb://127.0.0.1:27017/auth'