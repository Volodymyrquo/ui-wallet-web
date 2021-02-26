import axios from "axios"
import { TypesType } from "../store/cardsTypes/reducer";

const baseUrl = `https://bfccd8d41208.ngrok.io/v1/infinity`

const instance = {
  headers: { "Content-Type": "application/json", "user-id": 1 },
}




export const fetchListAllCards = () => {
  return axios.get(`${baseUrl}`, instance).then(response => response)
}



export const fetchListCardTypes = () => {
  return axios.get(`${baseUrl}/cardtypes`, instance).then(response => response.data)
}
