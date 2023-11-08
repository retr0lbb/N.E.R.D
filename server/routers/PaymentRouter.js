const express = require("express");
const router = express.Router()
const paymentController = require("../controllers/paymentController")

router.post("/", paymentController.createPayment);
router.post('/webhook', paymentController.createWebHook)

module.exports = router;