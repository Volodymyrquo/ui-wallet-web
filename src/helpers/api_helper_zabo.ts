import axios from "axios"

const instance = axios.create({
  baseURL: `https://api.zabo.com/sandbox-v0`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization:
      "Basic XzFvVjN1SlZVMHJ6TEVzMTVQdEdLT2RtcmxJYTpqQjIzbXVVN2FJa1JhN0tPRkNNMEh1VXA1U1Fh",
  },
})