const path = require('path');

function getMessages (req,res) {
    // res.send('<ul><li>Hi from Web!</li></ul>')
    //res.sendFile(path.join(__dirname, '..' , 'public', 'images', 'stadium.jpg'));
    res.render('messages', {
        title: "Scientist Message",
        scientist: "Alber Einstein"
    })
}

module.exports ={
    getMessages
}