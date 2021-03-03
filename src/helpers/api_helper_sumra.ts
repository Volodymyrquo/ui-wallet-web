import axios from "axios"

const baseUrl = `https://bfccd8d41208.ngrok.io/v1/infinity`

const instance = {
  headers: { "Content-Type": "application/json", "user-id": 1 },

}





export const fetchListAllCards = async () => {
  const response = await axios.get(`${baseUrl}/cards`, instance)
  return response.data
}
export const fetchListAllCardsFake = async () => {
  const response = await axios.get(`http://my-json-server.typicode.com/Volodymyrquo/mockjson/db`)
  return response.data
}



export const addNewCards = async () => {

      const response = await fetch(`https://bfccd8d41208.ngrok.io/v1/infinity/cards`, {
        method: "POST",
        body: String(
          new URLSearchParams({
            type_id: '1'
          })
        ),
        headers: {
          "user-id": '1' ,
          "Content-Type": "application/x-www-form-urlencoded",
        }}
        )

        const data = await response.json()

        return data
    }




export const fetchListCardTypes = async () => {
  const response = await axios.get(`${baseUrl}/cardtypes`, instance)
  return response.data
}

