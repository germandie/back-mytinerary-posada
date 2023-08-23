import City from "../../models/City.js";

export default async (req,res)=> {
    try {
        let ReadoneCity = await City.findOne({_id:req.params._id}).select("city description photo -_id")
        //let oneUserId = await User.findById(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'cities found',
            response: ReadoneCity
        })

    
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not found',
            response: null
        })
    }
}