const getName = (req, res, next)=>{
    req.name = req.query.name;
    next();
}

module.exports = getName;