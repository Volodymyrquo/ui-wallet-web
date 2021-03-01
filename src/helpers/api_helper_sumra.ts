import axios from "axios"

const baseUrl = `https://bfccd8d41208.ngrok.io/v1/infinity`

const instance = {
  headers: { "Content-Type": "application/json", "user-id": 1 },
}




export const fetchListAllCards = () => {
  return axios.get(`${baseUrl}/cards`, instance).then(response => response.data)
}



export const fetchListCardTypes = () => {
  return axios.get(`${baseUrl}/cardtypes`, instance).then(response => response.data)
}
