import e from 'express'

const booksRouter = e.Router()
const PORT = 7000
const HOST = 'localhost'
const app = e()

app.get('/', (req, res, next)=>{
    res.status(200).send( new Date() + " Главная страница")
})

app.get('/downloadBooks',(req, res, next)=> {
    res.download('./public/Junior_Frontend_developer(React.js).pdf', "another", (err)=>{
        console.log('File send', err)
    })
})

/*const prod = ['apple', 'pen', 'comp']

app.get('/products', (req, res)=>{
    res.send(prod)
})
app.get('/products/:id', (req, res, next)=>{
    console.log(prod[req.params.id]) // работает с массивом только
    res.send(prod[req.params.id])
})*/
/*booksRouter.get('/', (req, res)=> {
res.send('Books')
})
booksRouter.get('/about', (req, res)=> {
    res.send('About books')
})
app.use('/books', booksRouter)
*/
/*
app.get('/blog', (req, res, next)=>{
    res.redirect('/')
})
*/






app.listen(PORT, () => {
    console.log(`http://${HOST}:${PORT}/`, new Date())
})
