const ProductsModel = require('../models/products')
async function get(req, res){

  const { id } = req.params
  /* 
  post = req.body
  req.query é na url
  */
  
  const obj = id ? { _id: id} : null

  const products = await ProductsModel.find(obj)
  
    res.send(products)
}

async function post(req, res){

  const { 
    name,
    brand,
    price,
  } = req.body

  //req.body porque é post

  const product = new ProductsModel({
    name,
    brand,
    price,
  })

  product.save()

  //mensagem de resposta da api
  res.send({
    message: 'Sucesso'
  })
}

module.exports = {
    get, 
    post, 
}