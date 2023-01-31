import { Router } from "express";
const router = Router();
import productManager from '../src/ProductManager.js'

const prodmanager = new productManager('../files/productos.json')

router.get('/',(req,res)=>{
    const file = prodmanager.getProducts()
    res.json(file)
})
router.get('/:idProd',(req,res)=>{
    const {idProd} = req.params
    const product = prodmanager.getProductById(parseInt(idProd))
    res.json({message: "producto encontrado", product})
})
router.post('/',(req,res)=>{
    const prod = req.body
    prodmanager.addProduct(prod)
    res.json({
        message:"se ha generado tu producto con exito", prod
    })
})
router.put('/:idProd',(req,res)=>{
    const {idProd} = req.params
    const newValue = req.body
    const date = Object.keys(newValue).toString()
    const value =Object.values(newValue).toString()

    const editProduct = prodmanager.updateProduct(parseInt(idProd), date, value)

    res.json({
        message: ' se ha editado tu producto', editProduct
    })
})
router.delete('/:idProd',(req,res)=>{
    const {idProd} = req.params
    const eliminar = prodmanager.deleteProductBy(parseInt(idProd))
    res.json({
        message:'se ha eliminado el producto', eliminar
    })
})

export default router