const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set('views', './src/views');
app.set('view engine', 'ejs');

productRouter.route('/').get((req,res) => {
    res.render('products', {
        products:[
            {productTitle: 'Cyanide', productDescription: 'Acid toxic', productPrice: 199},
            {productTitle: 'Cyanide', productDescription: 'Acid toxic', productPrice: 199},
            {productTitle: 'Cyanide', productDescription: 'Acid toxic', productPrice: 199},
            {productTitle: 'Cyanide', productDescription: 'Acid toxic', productPrice: 199}
        ]
    })
});

app.use('/products', productRouter)

app.get('/', (req, res) => {
    res.render('index', {username: '0736b', customer: ['customer1', 'customer2', 'customer3']});
})

app.listen(PORT, () => {
    debug('Listening on port ' + chalk.green(PORT));
})