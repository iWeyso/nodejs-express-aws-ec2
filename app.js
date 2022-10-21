const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) =>{

    res.send('<h1> Express demo app bravo paul !!!</h1> <h4> Success again ! </h4> <p> Version 2.0</p>');
})

app.get('/products', (req, res) => {

    res.send([
        {
            productId: '101',
            price: 100
        },
        {
            productId: '102',
            price: 150
        }

    ]);

}
)

app.listen(port, () => {
    console.log('Demo app listening to port ');
})