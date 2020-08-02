const indexCtrl = {}

const fetch = require('node-fetch');
const url = require('../config/api')

indexCtrl.renderIndex = async (req, res) => {

    dataApi = null

    await fetch(url.host)
    .then(res => {

        return res.json();

    }).then(function(data) {
        //console.log('data = ', data);
        this.dataApi = data
    })
    .catch(function(err) {
        console.error(err);
        res.send('internal error cod. 3421')
    });
    let dptoArray = Object.keys(dataApi)
    var MunciArray =Object.entries(dataApi)
    res.render('index', {dptoArray,MunciArray})
}

module.exports = indexCtrl