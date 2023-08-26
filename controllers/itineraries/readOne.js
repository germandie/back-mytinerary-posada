import Itinerary from "../../models/Itinerary.js";

export default async (req,res)=> {
    try {
        let ReadoneItinerary = await Itinerary.findOne({_id:req.params._id}).select("name price duration photo -_id")
        //let oneUserId = await User.findById(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'itineraries found',
            response: ReadoneItinerary
        })

    
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not found',
            response: null
        })
    }
}