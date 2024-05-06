const { adminJobPost } = require("../controllers/adminController");
const { authonticateToken } = require("../middlewares/authonticateToken");
const checkAdmin = require("../middlewares/checkAdmin");

const route = require("express").Router();

route.post("/postjob",authonticateToken, checkAdmin, adminJobPost);

module.exports = route;
