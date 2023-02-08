import e from 'express'

const booksRouter = e.Router()
const PORT = 7000
const HOST = 'localhost'
const app = e()


/*
const prod = ['apple', 'pen', 'comp']
app.get('/', (req, res, next)=>{
    res.status(200).send(new Date())
})
app.get('/products', (req, res)=>{
    res.json(prod)
})
app.get('/products/:id', (req, res, next)=>{
    console.log('page products:', req.query.t)
    if(prod[req.params.id]){
        res.json(prod[req.params.id])
    } else {
        res.status(403).send("product not found")
    }
})
*/
booksRouter.get('/', (req, res)=> {
res.send('Books')
})
booksRouter.get('/about', (req, res)=> {
    res.send('About books')
})


app.use('/books', booksRouter)






app.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}/`, new Date())
})
