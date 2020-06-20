import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import Search from './components/Search'
import List from './components/List'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCocktail } from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
  state = {
    cocktails: [],
    cocktail: [],
    recipes: [],
    show: false,
    // 絞り込み
    word: '',
    base: '',
    technique: '',
    taste: '',
    style: '',
    alcohol_from: '',
    alcohol_to: '',
    top: '',
    glass: '',
    imageLink: '',
  }

  // 検索絞り込み処理
  onChange = (e) => {
    var inputId = e.target.id
    var Value = e.target.value
    switch (inputId) {
      case 'word':
        this.setState({ word: Value })
        break
      case 'base':
        this.setState({ base: Value })
        break
      case 'technique':
        this.setState({ technique: Value })
        break
      case 'taste':
        this.setState({ taste: Value })
        break
      case 'style':
        this.setState({ style: Value })
        break
      case 'alcohol':
        if (Value === '0,1') {
          this.setState({ alcohol_from: '0' })
          this.setState({ alcohol_to: '1' })
        } else if (Value === '1,10') {
          this.setState({ alcohol_from: '1' })
          this.setState({ alcohol_to: '10' })
        } else if (Value === '11,20') {
          this.setState({ alcohol_from: '11' })
          this.setState({ alcohol_to: '20' })
        } else if (Value === '21,30') {
          this.setState({ alcohol_from: '21' })
          this.setState({ alcohol_to: '30' })
        } else if (Value === '31,40') {
          this.setState({ alcohol_from: '30' })
          this.setState({ alcohol_to: '40' })
        } else if (Value === '41,100') {
          this.setState({ alcohol_from: '41' })
          this.setState({ alcohol_to: '100' })
        }
        break
      case 'top':
        this.setState({ top: Value })
        break
      case 'glass':
        this.setState({ glass: Value })
        break
    }
  }

  // 検索ボタンが押された場合
  onClickSearch = async () => {
    const response = await axios.get('/api/search', {
      params: {
        word: this.state.word,
        base: this.state.base,
        technique: this.state.technique,
        taste: this.state.taste,
        style: this.state.style,
        alcohol_from: this.state.alcohol_from,
        alcohol_to: this.state.alcohol_to,
        top: this.state.top,
        glass: this.state.glass,
      },
    })
    this.setState({
      cocktails: response.data.cocktails,
    })
  }

  // //画像取得したい
  imageLoad = async () => {
    var cocktailName = this.state.cocktail.cocktail_name
    const response = await axios.get('/api/imagesearch', {
      params: { cocktailName: cocktailName },
    })
    this.setState({
      imageLink: response.data.shift().link,
    })
  }

  // 詳細が押された時
  onClickDetail = async (id) => {
    const cocktail_id = id
    const response = await axios.get(`/api/search/${cocktail_id}`)
    this.setState({
      cocktail: response.data.cocktail,
      show: true,
    })
    const cocktail = this.state.cocktail

    var recipes = cocktail.recipes
    if (recipes) {
      const recipe = recipes.map((recipe, key) => {
        if (recipe.amount === null) {
          recipe.amount = '適量'
          recipe.unit = null
        }
        return (
          <Row className="mt-3">
            <Col xs={9} className="ml-1">
              {recipe.ingredient_name}
            </Col>
            <Col xs={2}>
              --{recipe.amount}
              {recipe.unit}
            </Col>
          </Row>
        )
      })
      this.setState({
        recipes: recipe,
      })
    }
  }

  //モーダル閉じるボタン
  handleClose = () => {
    this.setState({
      show: false,
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={3}>
            <Search
              onClickSearch={this.onClickSearch}
              onChange={this.onChange}
            />
          </Col>
          <Col xs={9}>
            <h5 className="display-4 text-center text-light">
              Choice Cocktail
              <FontAwesomeIcon icon={faCocktail} className="icon" />
            </h5>
            <Row>
              <List
                cocktails={this.state.cocktails}
                onClickDetail={this.onClickDetail}
                cocktailDetail={this.state.detail}
              />
            </Row>
          </Col>
        </Row>

        <Modal
          show={this.state.show}
          onHide={() => {
            this.handleClose()
          }}
          onShow={() => {
            this.imageLoad()
          }}
        >
          <Modal.Body className="modal-body-cocktail text-light">
            <div className="text-right">
              <Button
                className="mr-3"
                variant="primary"
                onClick={() => {
                  this.handleClose()
                }}
              >
                Close
              </Button>
            </div>
            <div className="text-center mb-4 text-light">
              <span className="modal-title">
                {this.state.cocktail.cocktail_name}
              </span>
              <span className="ml-1">
                {this.state.cocktail.cocktail_name_english}
              </span>
            </div>
            <p>
              <span className="tag-detail-base mr-1">
                <span className="tag">Base</span>
                {this.state.cocktail.base_name}
              </span>
              <span className="tag-detail-ALC mr-1">
                <span className="tag">Alc.</span>
                {this.state.cocktail.alcohol}%
              </span>
              <span className="tag-detail-taste mr-1">
                <span className="tag">Taste</span>
                {this.state.cocktail.taste_name}
              </span>
              <span className="tag-detail-tec mr-1">
                <span className="tag">Tec</span>
                {this.state.cocktail.technique_name}
              </span>
              <span className="tag-detail-style mr-1">
                <span className="tag">Style</span>
                {this.state.cocktail.style_name}
              </span>
              <span className="tag-detail-glass mr-1">
                <span className="tag">Glass</span>
                {this.state.cocktail.glass_name}
              </span>
              <span className="tag-detail-top mr-1">
                <span className="tag">Top</span>
                {this.state.cocktail.top_name}
              </span>
            </p>
            <Row>
              <Col xs="12" lg={6}>
                <div className="text-center">
                  <img src={this.state.imageLink}></img>
                </div>
              </Col>
              <Col xs="12" lg={6}>
                <h5 className="mb-3">recipes</h5>
                {this.state.recipes}
                <p className="ml-1 mr-3 mt-4">
                  {this.state.cocktail.recipe_desc}
                </p>
              </Col>
              <Col xs={12}>
                <p className="border">{this.state.cocktail.cocktail_desc}</p>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
    )
  }
}

export default App
