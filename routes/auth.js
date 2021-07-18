const express = require('express')
const router = express.Router()
const passport = require('passport')


// @desc    Auth With Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope : ['profile'] }) )



// @desc    Google Auth Callback
// @route   GET /auth/google/callback
router.get('/google/callback',
passport.authenticate('google', { failureRedirect: '/' }), 
(req, res) => {
    res.redirect('/dashboard')
    }
 )


// @desc    Logout User
// @route   /auth/logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router


