const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const indexRoutes = require('./routes/index')
const apiRoutes = require('./routes/api/index')
const thoughtRoutes = require('./routes/api/thought-routes')
const userRoutes = require('./routes/api/user-routes')
const app = express();
const PORT = process.env.PORT || 3001;

// app.get('/', (req, res) =>{
//   res.send(apiRoutes)
// })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/routes/api/index', apiRoutes);
// app.use('/routes/api/thought-routes', thoughtRoutes);
// app.use('/routes/api/user-routes', userRoutes);

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`)
})