const router = require('express').Router()

const ProductController = require('../controllers/products')

/* VERBOS HTTP
|GET - obter dados
|POST - enviar dados/receber
|PUT - atualizar dados
|DELETE - deletar dados


V

router.get('/products', ProductController.get)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.delete)
*/

///products/:id pega um unico produto
// /products pega todos os produtos

////:id? parametro opcional

router.get('/products/:id?', ProductController.get)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
router.get('/clientes', (req, res) =>{

    res.send({
        ok: 123,
    })
})

module.exports = router