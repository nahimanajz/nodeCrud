import UserModal from "../model/UserModal"; 
 class UserController {
     getUser(req, res) {       
         return res.render('profile', {person: req.params.id});
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
            const users = await UserModal.find();
            return res.status(200).render('users',{users:users, msg: 'User registered'});      
       }catch(err){
           console.log(err.message);
           return res.status(500).json({ msg:'Error in saving user'});     
         }
     }
    
}

export default new UserController;