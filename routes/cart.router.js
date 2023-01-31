import { Router } from "express";
const router = Router()

router.get('/', (req,res)=>{
    res.json({
        message:'carrito de compras'
    })
})

export default router