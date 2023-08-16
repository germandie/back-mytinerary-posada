import User from "../../models/User.js";

export default async (req,res)=> {
    try {
        let ReadoneUser = await User.findOne({_id:req.params.user_id}).select("mail photo -_id")
        //let oneUserId = await User.findById(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'users found',
            response: ReadoneUser
        })

    
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not found',
            response: null
        })
    }
}