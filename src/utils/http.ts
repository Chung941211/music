export const Apis = async (method: string, url: string, data?: any) => {
const API_LOACATION = process.env.APP_API_ENDPOINT
 const res = await fetch(`${API_LOACATION}/${url}`, {
     method,
     headers: {
        Accept: 'application/json'
     },
     body: JSON.stringify(data)
 })
 return res.json()
}
