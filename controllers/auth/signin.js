export default (req, res, next)=>{
    try {
        return res.status(200).json({
            succes: true,
            message: 'user logged in ',
            response: {
                token: req.token,
                user: req.user //token + datos del usuario
            }
        })
    } catch (error) {
        next(error)
    }
}