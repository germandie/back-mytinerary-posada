// controllers/cities/getCityDetails.js

import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    const cityId = req.params.id;
    
    // Realiza una consulta para obtener los detalles de la ciudad por su ID
    const cityDetails = await City.findById(cityId)
      .populate('admin_id', 'photo name mail -_id');

    if (!cityDetails) {
      return res.status(404).json({
        success: false,
        message: 'City not found',
        response: null
      });
    }

    return res.status(200).json({
      success: true,
      message: 'City details found',
      response: cityDetails
    });
  } catch (error) {
    next(error);
  }
};
