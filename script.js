const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('views'))

const emailDb = "ahmadfuadoorakam@gmail.com";
const passwordDb = "1234";


app.post('/login', (req, res) => {

    const { email, password } = req.body;
    if (emailDb === email && passwordDb === password) {
        res.send('Login Successful')
    } else {
        res.send('Login Failed')
    }
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("Surver Running...."))
