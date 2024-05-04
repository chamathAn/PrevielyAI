const jobsModel = require("../models/jobsModel");
const createError = require("../utils/error");

const adminJobPost = async (req, res, next) => {
  const { userId, title, description, questions } = req.body;
  try {
    const job = await jobsModel.create({
      userId,
      title,
      description,
      questions,
    });

    return res.json({
      job,
      message: "Successfully created a new job post",
    });
  } catch (error) {
    next(createError(500, "Can not make a new job post"));
  }
};

module.exports = {
  adminJobPost,
};
