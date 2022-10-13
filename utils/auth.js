const withAuth = (req, res, next) => {
// withAuth requires next() because the outside function needs to continue after this has been exeuted
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;