
// export const url = 'https://gurukul-world.herokuapp.com'

export const API_URL = process.env.NODE_ENV === 'production' ? process.env.hostedClientURL : 'http://localhost:8080'
