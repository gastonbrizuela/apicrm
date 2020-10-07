const express = require('express')
const router = express.Router();
const crmcampaignController = require('../controllers/CrmCampaignController')

router.get('/api',crmcampaignController.index)
router.post('/api',crmcampaignController.store)
router.get('/api/:campaing_id',crmcampaignController.search)

module.exports = router;