const express = require('express')

const app = express()


app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('./public/index.html')
})

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`)
})