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

async function put(req, res){
  //id do produto do db
  const { id } = req.params
//                                atualiza assim que edit  
  const product = await ProductsModel.findOneAndUpdate({_id: id}, req.body, {new: true})
  res.send({
    //resposta, assim que alterado manda essa mensagem e o produto editado
    message: 'Sucesso',
    product,
  })

 /* 
 Ele não atualiza após a edicação
  const product = await ProductsModel.findOne({_id: id})
  //updateone

  await product.updateOne(req.body)
  res.send({
    message: 'Sucesso',
    product,
  }) */

}

module.exports = {
    get, 
    post, 
    put,
}