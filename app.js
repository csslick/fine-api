// server
const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const API_KEY = 'c86e9abaca15a436047d9b3c71f0041e';

app.get('/api', async (req, res) => {

  const data = await fetch(`http://finlife.fss.or.kr/finlifeapi/depositProductsSearch.json?auth=${API_KEY}&topFinGrpNo=020000&pageNo=1`)
  const json = await data.json();
  if(json.result.err_msg === '정상') {
    console.log(json.result.err_msg);
    // console.log(json.result);
    const products = json.result;
    // res.json(products);
    res.render('index', { data: json.result })
  } else {
    console.log('자료 읽기 실패');
  }
  

  
})

app.listen(8000, () => {
  console.log('server 8080')
})

