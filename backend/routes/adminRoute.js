const { adminJobPost } = require("../controllers/adminController");
const checkAdmin = require("../middlewares/checkAdmin");

const route = require("express").Router();

route.post("/postjob", checkAdmin, adminJobPost);

module.exports = route;
