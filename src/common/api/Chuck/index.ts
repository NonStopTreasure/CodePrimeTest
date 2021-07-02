import { basicAxios } from "src/common/utils/basicAxios"
import { AxiosResponse } from "axios"
import { IChuckNorrisRandom } from "src/common/interfaces"


const randomPhraseRequest = (): Promise<AxiosResponse<IChuckNorrisRandom>> =>
  basicAxios.get("/random")

const allCategoriesRequest = (): Promise<AxiosResponse<string[]>> =>
  basicAxios.get("/categories")

const categoryPhraseRequest = (category: string): Promise<AxiosResponse<IChuckNorrisRandom>> =>
  basicAxios.get(`/random?category=${category}`)

export { randomPhraseRequest, allCategoriesRequest, categoryPhraseRequest }