import React, { FC } from "react"
import { ChuckNorris } from "src/pages/ChuckNorris"
import "../common/styles/global.scss"


const PageBuilder: FC = (): React.ReactElement => {

  return (
    <div className="App">
      <ChuckNorris/>
    </div>
  )
}

export { PageBuilder }
