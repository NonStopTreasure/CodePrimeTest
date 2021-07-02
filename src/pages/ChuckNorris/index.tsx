
import React, { FC, useEffect, useState } from "react"
import { Col, Row, Spin } from "antd"
import Logo from "src/static/logo.svg"
import Chuck from "src/static/Chuck.svg"
import { IChuckNorrisProps, IChuckNorrisRandom } from "src/common/interfaces"
import { AxiosResponse } from "axios"
import {
  allCategoriesRequest,
  categoryPhraseRequest,
  randomPhraseRequest
} from "src/common/api/Chuck"
import { LoadingOutlined } from "@ant-design/icons"

import "./style.scss"

const ChuckNorris: FC<IChuckNorrisProps> = (): React.ReactElement => {

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [categories, setCategories] = useState<string[]>([])
  const [currentJoke, setCurrentJoke] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("random")

  useEffect(() => {
    randomPhraseRequest().then(
      (response: AxiosResponse<IChuckNorrisRandom>) => {
        setCurrentJoke(response.data.value)
      }
    )
    allCategoriesRequest().then(
      (response: AxiosResponse<string[]>) => {

        setCategories(response.data)
      }
    ).finally(() => setIsLoading(false))
  }, [])

  const setNewRandomJoke = (): void => {
    randomPhraseRequest().then(
      (response: AxiosResponse<IChuckNorrisRandom>) => {
        setCurrentJoke(response.data.value)
      }
    )
  }

  const setNewCategoryJoke = (selectedCategory: string): void => {

    categoryPhraseRequest(selectedCategory).then(
      (response: AxiosResponse<IChuckNorrisRandom>) => {
        setCurrentJoke(response.data.value)
      }
    )
  }



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

      <Col className="content">
        {isLoading ?
          <Spin
            spinning={true}
            className="content-loader"
            size={"large"}
            indicator={<LoadingOutlined style={{ fontSize: 96 }} spin />}
          />
          :
          <>
            <Row className="content-header">
              <p>Categories</p>
            </Row>
            <Row className="category-list">
              {categories.map(
                (category: string): React.ReactElement => {
                  return (
                    <div onClick={() => {
                      setSelectedCategory(category)
                      setNewCategoryJoke(category)
                    }}
                         key={category}
                         className={selectedCategory === category ? "category-item_selected" : "category-item"}>
                      <p className="item-text">{category}</p>
                    </div>
                  )
                }
              )}
              <div onClick={() => {
                setNewRandomJoke()
                setSelectedCategory("random")
              }}
                   className={selectedCategory === "random" ? "category-item_selected" : "category-item"}>
                <p className="item-text">random</p>
              </div>
            </Row>
            <Col className="selected-category__div">
              <img className="chuck__img" src={Chuck} alt="chuck" />
              <div className="description__div">
                <p className="text">{currentJoke}</p>
              </div>
            </Col>
          </>
        }
      </Col>


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