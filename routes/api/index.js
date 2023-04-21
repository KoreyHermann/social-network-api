const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);
router.get('/', (req, res) =>{
    res.send('sending api/index')
  })
module.exports = router;