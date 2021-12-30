const jwt = require('jsonwebtoken')

const TOKEN_SECRET = 'FirmaDelToken';

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        return res.status(401).json({ error: 'Acceso denegado' })
    }

    try {
        const userVerified = jwt.verify(token, 'FirmaDelToken')
        req.user = userVerified
        next();
    } catch (error) {
        res.status(400).json({ error: 'El Token es inválido' })
    }
}

module.exports = {
    verifyToken,
    TOKEN_SECRET
};