const express = require('express')


const app = express()
const port = 3000

 app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*'); 
     res.header('Access-Control-Allow-Headers','Orgin, X-requested-with,Content-Type, Accept');
   next();
 });

//app.use(Cors());
app.get('/', (req, res) => {
 res.send("Hello World");
});


app.listen(port, () => console.log(`listening on ${port}`));