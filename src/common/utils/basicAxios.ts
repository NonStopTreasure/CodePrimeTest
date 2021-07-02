import axios, { AxiosResponse, AxiosError } from "axios"
import { Modal } from "antd"
import { differenceInSeconds } from "date-fns"


const basicAxios = axios.create({
  baseURL: "https://api.chucknorris.io/jokes",
  timeout: 20000,
  withCredentials: false,
})

let timeout: Date

basicAxios.interceptors.response.use(
  (response: AxiosResponse): Promise<AxiosResponse<void>> =>
    Promise.resolve(response),
  (error: AxiosError): Promise<void> => {
    if (!timeout || differenceInSeconds(timeout, new Date()) > 5000) {
      Modal.info({
        title: "Server Error",
        content: error.message,
      })
      timeout = new Date()
    }

    return Promise.reject(error)
  }
)

export { basicAxios }
