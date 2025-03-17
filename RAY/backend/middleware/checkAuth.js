const jwt = require('jsonwebtoken');

module.exports.checkAuth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Token not found' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Token not found' });
    }

    try {
        const decodedJwtToken = jwt.verify(token, process.env.JWT_SECRET);
        
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};