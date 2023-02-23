import {Router} from "express";
import Carrito from "../ProductManager.js"

const router = Router()
const managerCarrito = new Carrito()


router.get('/',async(req,res)=>{
    const prodCart = await managerCarrito.getProductsCart()
    res.json(prodCart)
})

router.get('/:idCart',async(req,res)=>{
    const {idCart} = req.params
    const prodCart = await managerCarrito.getProductsCart()
    const prodCartId = prodCart.find(u => u.id === Number(idCart))
    res.json(prodCartId)
})

router.post('/',async(req,res)=>{
    const prodCart = await managerCarrito.createCart()
    res.status(200).json(prodCart)
})

router.post('/:cid/product/:pid',async(req,res)=>{
    const {cid,pid} = req.params
    const prodCreate = await managerCarrito.addCart(Number(cid), Number(pid))
    res.json({message:'producto agreado con exito', prodCreate})
})




export default router