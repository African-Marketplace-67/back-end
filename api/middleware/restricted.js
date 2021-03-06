const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = async (req, res, next) => {
  try{
    const token = req.headers.authorization
    if(!token){
      return res.status(401).json({message: 'token required'})
    }else{
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
      if(err){
        return res.status(401).json({message: 'token invalid'})
      }else{
      req.decodedToken = decoded
      next()
      }
    })
  }
  }catch(err){
    next(err)
  }
}