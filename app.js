import express from 'express'

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


import productosRouter from '../routes/products.router.js'
import cartRouter from '../routes/cart.router.js'

app.use('/api/productos',productosRouter)
app.use('/api/cart',cartRouter)

app.listen(8080,()=>{
    console.log('escuchando puerto 8080')
})