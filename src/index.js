require('dotenv').config();

const app = require('./server');
require('./config/database')

app.listen(app.get('port'), () => {
    console.log('Server On Port:', app.get('port'), 'http://localhost:4000' )
})