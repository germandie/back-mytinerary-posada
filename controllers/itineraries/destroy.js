import Itinerary from '../../models/Itinerary.js';

export default async (req,res,next)=>{
    try {
        let deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'itinerary deleted',
            response: deletedItinerary._id
        })
    } catch (error) {
        next(error)
    }
}