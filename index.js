const express = require('express')
const app = express()
const axios = require('axios')
require('dotenv').config()

// key のチェック
const searchKey = process.env.GOOGLE_CUSTOMSEARCH_KEY
const engineID = process.env.SEARCHENGINE_ID

// カクテル一覧取得API
app.get('/api/search', async (req, res) => {
  var word = req.query.word
  var base = req.query.base
  var technique = req.query.technique
  var taste = req.query.taste
  var style = req.query.style
  var alcohol_from = req.query.alcohol_from
  var alcohol_to = req.query.alcohol_to
  var top = req.query.top
  var glass = req.query.glass
  const response = await axios.get('https://cocktail-f.com/api/v1/cocktails', {
    params: {
      limit: 50,
      word: word,
      base: base,
      technique: technique,
      taste: taste,
      style: style,
      alcohol_from: alcohol_from,
      alcohol_to: alcohol_to,
      top: top,
      glass: glass,
    },
  })
  res.send(response.data)
})

// カクテル詳細API
app.get('/api/search/:id', async (req, res) => {
  const cocktailId = req.params.id
  const response = await axios.get(
    `https://cocktail-f.com/api/v1/cocktails/${cocktailId}`,
  )
  res.send(response.data)
})

// google Custom Search API
app.get('/api/imagesearch', async (req, res) => {
  // カクテル名を取得
  const cocktail_name = req.query.cocktailName
  const response = await axios.get(
    'https://www.googleapis.com/customsearch/v1?',
    {
      params: {
        searchType: 'image',
        key: searchKey,
        cx: engineID,
        q: 'カクテル　' + cocktail_name,
        num: 1,
        lr: 'lang_ja',
        safe: 'off',
        start: 1,
      },
    },
  )
  res.send(response.data.items)
})

// 本番環境では、ビルドしたReactを読み込むようにする
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resoleve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
