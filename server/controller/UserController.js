// import UserModal from "../model/UserModal"; 
const UserModal = require("../model/UserModal");
 class UserController {
     async updateUser(req, res) {       
        try{ 
            const user = await UserModal.findOneAndUpdate({_id:req.params._id},
                {
                    $set:
                     {
                         fullnames:req.body.fullnames,
                         username: req.body.username,
                         phone: req.body.phone,
                         role: req.body.role
                        }
                    });
           console.log(user); 
           return res.status(200).json({
               user: user
           });
        // }  
        }catch(error){
            console.log(error.message)
        } 
         return res.render('profile', {person: req.params.id});
     }
    async getAllUsers(req, res) {       
        try {
            const users = await UserModal.find();
            return res.render('users', {users: users});
        }catch(error){
            console.log(error.message);
        }
        
    }
     signup(req, res) {
        return res.render('signup');
     }
     addUser(req, res) {
         const user = {
             fullnames: req.body.fnames,
             username: req.body.username,
             phone: req.body.phone,
             password: req.body.password,
             role: req.body.role
         } 

         users.push(user);
         return res.render('users',{users:users});
     }
     async register(req, res) {
        const {
            fullnames,
            username,
            phone,
            password,
            role
        } = req.body;
       try {
           let user = await UserModal.findOne({phone:phone});
           if(user) {
              return res.status(400).render('users',{msg: "User already Exist" });         
            } 
                user = new UserModal({
                    fullnames: req.body.fnames,
                    username: req.body.username,
                    phone: req.body.phone,
                    password: req.body.password,
                    role: req.body.role
                });
             await user.save().then(doc => {
                        console.log(doc);                 
             });            
            return res.redirect('/users');      
       }catch(err){
           console.log(err.message);
           return res.status(500).json({ msg:'Error in saving user'});     
         }
     }
    
}
module.exports = new UserController;
// export default new UserController;