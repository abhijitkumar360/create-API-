import{User} from '../models/user.js'
let users=[]
export const getUserByID=(req,res)=>{
    console.log("got id")
    res.send(users)
}
export const getUsers= (req ,res)=>{
    console.log("in function call getUser().... i think this '/users' endpoint")
    res.send(users)
}

export const createUser =(req,res)=>{
    console.log("in function call createUser()..I think this '/users' endpoint got hit with post request")
    const user=new User({
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        city: req.body.city,
    })
    user.save()
        .then(
            (result)=>{
                res.send(result)
            }
        )
        .catch(
            (err)=>{
                console.log(err)
            }
        )
    
}