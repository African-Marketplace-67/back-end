const router = require('express').Router();
const bcrypt = require("bcryptjs");
const Users = require("./auth-model");
const jwt = require("jsonwebtoken");
require('dotenv').config();

router.post('/register', async(req, res, next) => {
 
  try{

    const {username, password, email, role} = req.body

    const user = await Users.findBy({username}).first()

      if(user){
        return res.status(409).json({message: 'username taken'})
      }
      if(!username || !password){
        return res.status(409).json({ message: 'username and password required'})
      }

      const newUser = await Users.add({
        username, 
        password: await bcrypt.hash(password, 13),
        email,
        role
      })

      res.status(201).json(newUser)
    
  }catch(err){
    next(err)
  }
})
router.post('/login', async (req, res, next) => {
    //res.end('implement login, please!');
    try{
      const {username, password} = req.body
  
      if(!username || !password){
        return res.status(401).json({message: 'username and password required'})
      }
      const user = await Users.findBy({username}).first()
  
      const passwordValid = await bcrypt.compare(password, user.password)
  
      if(!user || !passwordValid){
        return res.status(401).json({message: 'invalid credentials'})
      }
      const token = jwt.sign({id: user.id}, process.env.JWT_SECRET)
  
      res.json({
        message: `welcome, ${user.username}`,
        token:token
      })
    } catch(err){
      next(err)
    }
})
router.get('/status', (req, res) => {
  //checking knex status too
  res.status(200).json({
    api: true,
   // db: await getDbStatus(),
    //any other db's to check?
  });
});
module.exports = router;
