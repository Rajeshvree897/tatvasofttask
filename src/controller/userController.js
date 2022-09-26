const bcrypt = require('bcryptjs')
const User = require('../model/userSchemas')
const jwt = require('jsonwebtoken')
const userController = {
    register : async function (req ,res) {
        try{
           const {Firstname, Lastname, Email, Possword, DOB, Role} = req.body
           if(!(Firstname && Lastname && Email && Possword && DOB )){
               res.status(400).send("All Inputs is required")
           }
           const oldUser = await User.findOne({Email});
           if(oldUser){
               return res.status(409).json({message : "already exist"})
           }
           const encryptPass = await bcrypt.hashSync(Possword, 10)
           console.log();
           const user = await User.create({
               Firstname,
               Lastname,
               Email,
               Possword : encryptPass,
               DOB,
               Role
           })      
           const token = jwt.sign({user_id : user._id},
            process.env.SCREATEKEY,
            {
                expiresIn : "2h"
            })
           res.status(200).json({user: user, token :token})
        }catch(err){
            res.status(500).send(err)
        }
    },
    login :  async function (req, res) {
      const {Email, Possword}  = req.body
      const user = await User.findOne({Email : Email})
      if(user && (await bcrypt.compare(Possword, user.Possword))){
        const token = jwt.sign({user_id : user._id},
            process.env.SCREATEKEY,
            {
                expiresIn : "2h"
            })
           res.status(200).json({user: user, token :token})
      }else{
          res.status(410).json({message : "wrong Creditials."})
      }

    }
}
module.exports = userController