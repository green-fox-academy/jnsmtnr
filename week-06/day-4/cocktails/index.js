'use strict'

const express = require ('express');
const path = require ('path');
const app = express();
const PORT = 666;

const cocktails = [
  { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
  { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
  { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
  { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
  { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
  { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
  { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
  { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
];

const beer = { name: 'BEER', price: 500, contains: ['served cold', 'in a clean glass'], isAlcoholic: true };

cocktails.push(beer);

const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

app.use('/static', express.static('static'))

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  if (req.query.alcohol) {
    let newCocktails = cocktails.filter(coctail => coctail.contains.indexOf(req.query.alcohol) != -1);
    newCocktails.push(beer);
    res.render('home', {
      alcoholList: alcoholList,
      cocktails: newCocktails,
    });  
  } else {
  res.render('home', {
    alcoholList: alcoholList,
    cocktails: cocktails,
  });
  }
});


app.listen(PORT, () => {
  console.log(`server is running, port ${PORT}`);
});