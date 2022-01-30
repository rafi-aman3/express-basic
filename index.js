const express = require('express');
const path = require('path')
const scientistRouter = require('./routes/scientists.router');
const messagesRouter = require('./routes/messages.router');

const PORT = 3000;

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use((req,res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);

})

app.use(express.json());
app.use('/site',express.static(path.join(__dirname, 'public')))

app.get('/', (req,res) => {
    res.render('index', {
        title: "Express Basic",
        welcome: "Hello Rafi Aman",
    })
});

app.use('/scientists',scientistRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`);
})