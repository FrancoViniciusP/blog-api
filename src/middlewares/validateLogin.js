module.exports = (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (email.length < 1 || password.length < 1) {
            next({ status: 400, message: 'Some required fields are missing' });
        }
        next();
    } catch (e) {
        next({ status: 400, message: 'Some required fields are missing' });
    }
};