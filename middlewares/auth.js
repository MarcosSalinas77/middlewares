const auth = (req, res, next)=>{
    const user = req.query.name;
    if(user === "juan"){
        return next();
    }else{
        res.send("La ruta requiere autorización")
    }
}

module.exports = auth;
