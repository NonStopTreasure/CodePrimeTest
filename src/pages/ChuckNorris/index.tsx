import React, { FC } from "react"
import { Col, Row } from "antd"
import Logo from "src/static/logo.svg"
import { IChuckNorrisProps } from "@interfaces/index"

import "./style.scss"

const ChuckNorris: FC<IChuckNorrisProps> = ({}: IChuckNorrisProps): React.ReactElement => {
  return (
    <div className="chuck-norris">
      <div className="header">
        <Row className="logo__div">
          <img className="logo__img" src={Logo} alt="logo" />
          <p className="logo__p">Chuck Norris</p>
        </Row>
      </div>
      <div className="content">
        <Col>
          <Row>
            <p>Categories</p>
          </Row>
          <Row>
            <div />
          </Row>
          <Col>
            <p>1</p>
            <Col>
              <p>2</p>
            </Col>
          </Col>
        </Col>
      </div>
    </div>
  )
}

export { ChuckNorris }