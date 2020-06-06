const express = require('express');
const app = express();
const axios = require('axios');

app.get('/api/search', async (req, res) => {
  const response = await axios.get('https://cocktail-f.com/api/v1/cocktails');
  res.send(response.data);
});

// 本番環境では、ビルドしたReactを読み込むようにする
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resoleve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);