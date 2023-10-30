const logger = (req, res, next) => {
    next();
}

module.exports = { logger };