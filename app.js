import express from 'express'
import cartsRouter from './routes/carts.router.js'
import productRouter from './routes/products.router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/carts',cartsRouter)
app.use('/api/products',productRouter)

app.listen(8080,(req,res)=>{
    console.log('Escuchando al puerto 8080')
})

