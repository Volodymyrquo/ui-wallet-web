import axios from "axios"
import { GetUserAccessTokenType } from "../store/authSumra/actions";

type AccessTokenApiType = {
  access_token: string
  expires_in: number
  refresh_token: string
  token_type: string

}

const instance = axios.create({
  baseURL: `https://api.sumra.net`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization:
      "Basic XzFvVjN1SlZVMHJ6TEVzMTVQdEdLT2RtcmxJYTpqQjIzbXVVN2FJa1JhN0tPRkNNMEh1VXA1U1Fh",
  },
})
export const fetchAuth = ({ username, password }:GetUserAccessTokenType):any => {
  const newData = new URLSearchParams({
    username,
    password,
    grant_type: "password",
  })

  return instance.post<AccessTokenApiType>(`/token`, newData).then(response => response.data)
  
}

