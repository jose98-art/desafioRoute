import { Router } from "express";
import Productos from '../productManager.js';

const router = Router()
const manager = new Productos()

router.get('/',async(req,res)=>{
    const {limit} = req.query
    let prod = await manager.getProducts()
    const prodLitmit = prod.slice(0,limit)
    return res.json({Productos:prodLitmit})
})

router.get('/:idProduct',async(req,res)=>{
    const {idProduct} = req.params
    let prod = await manager.getProductById(Number(idProduct))
    res.json({message:'tu productos es ',prod})
})

router.post('/',async(req,res)=>{
    const prod = req.body
    const prodCreate = await manager.addProduct(prod)
    res.json(prodCreate)
})

router.put('/:idProduct',async(req,res)=>{
    const {idProduct} = req.params
    const prodNew = req.body
    const prodUpdate = await manager.updateProduct(Number(idProduct), prodNew)
    res.json(prodUpdate)
})

router.delete('/:idProduct',async(req,res)=>{
    const {idProduct} = req.params
    const prodDelete = await manager.deleteProductById(Number(idProduct))
    res.json(prodDelete)
})

export default router