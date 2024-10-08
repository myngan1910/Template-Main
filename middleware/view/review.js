module.exports = {
    requireReview: (req,res,next) => {
        const id  = parseInt(req.params.ID)
        const content = req.body.content;
        if( content === "") {
            res.redirect(`/product/${id}`)
        } else {
            next();
        }
    }
}