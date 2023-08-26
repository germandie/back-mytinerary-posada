import Itinerary from "../../models/Itinerary.js";

export default async (req,res)=> {
    try {
        let updatedItinerary = await Itinerary.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            {new:true}
        ).select('name price duration photo')
        return res.status(200).json({
            success: true,
            message: 'itinerary updated',
            response: updatedItinerary
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not updated',
            response: null
        })
    }
}

