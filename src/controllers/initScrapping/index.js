const ErrorHandler = require('../../logs/errorHandler')
const Restaurant = require('../../models/restaurant')
const { sendToCurrentPlatform } = require('../../services')

async function initScrapping(req, res) {
  try {
    const restaurantsToRegister = await Restaurant.find({ scrappingUrl: { $ne: null }, scrapped: false })

    sendToCurrentPlatform[restaurantsToRegister.scrappingPlatform || 'uairango'](restaurantsToRegister)

    return res.status(200).json()
  } catch (error) {
    ErrorHandler(error)
    return res.status(400).json()
  }
}

module.exports = initScrapping
