import e from 'express'

const booksRouter = e.Router()
const PORT = 7000
const HOST = 'localhost'
const app = e()

app.get('/', (req, res, next)=>{
    res.status(200).send(new Date())
})

const prod = ['apple', 'pen', 'comp']

app.get('/products', (req, res)=>{
    res.send(prod)
})
app.get('/products/:id', (req, res, next)=>{
    console.log(prod[req.params.id]) // работает с массивом только
    res.send(prod[req.params.id])
})

/*booksRouter.get('/', (req, res)=> {
res.send('Books')
})
booksRouter.get('/about', (req, res)=> {
    res.send('About books')
})*/

app.use('/books', booksRouter)






app.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}/`, new Date())
})
