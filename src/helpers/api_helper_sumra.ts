import axios from "axios"

const baseUrl = `https://bfccd8d41208.ngrok.io/v1/infinity`

const instance = {
  headers: { "Content-Type": "application/json", "user-id": 1 },
}




export const fetchListAllCards = async () => {
  const response = await axios.get(`${baseUrl}/cards`, instance)
  return response.data
}



export const fetchListCardTypes = async () => {
  const response = await axios.get(`${baseUrl}/cardtypes`, instance)
  return response.data
}
