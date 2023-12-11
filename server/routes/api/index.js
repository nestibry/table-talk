const router = require('express').Router();

const sampleRoutes = require('./sample.routes');
const userRoutes = require('./user.routes');
const socialRoutes = require('./social.routes');
const reviewRoutes = require('./review.routes');

router.use('/sample', sampleRoutes);
router.use('/user', userRoutes);
router.use('/social', socialRoutes);
router.use('/review', reviewRoutes);

module.exports = router;
