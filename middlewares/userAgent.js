const userAgent = (req, res, next)=>{
    const ua = req.get('User-Agent');
    console.log(ua);
    if(ua.includes("Iphone")){
        res.render('promo')
    }else{
        next();
    }
}

module.exports = userAgent;

