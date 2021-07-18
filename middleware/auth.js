// middleware is just a fnction that has acces

module.exports = {
    ensureAuth : function (req, res, next ) {
        if (req.isAuthenticated()) {
            return next()
        } else {
            res.redirect('/')
        }
    },

    ensureGuest : function (req, res, next ) {
        if (req.isAuthenticated()) {
            res.redirect('/dashboard')
        } else {
            return next()
        }
    }
}