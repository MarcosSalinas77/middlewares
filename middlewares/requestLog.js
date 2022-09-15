const requestLog = (req, res, next)=>{
    let fecha = new Date();
    console.log(fecha.toLocaleString() +" "+ req.method + req.url); 
    next();
}

module.exports = requestLog;


