module.exports = {
    requireComment: (req,res,next) => {
        const id  = parseInt(req.params.ID)
        const content = req.body.content;
        if( content === "") {
            res.redirect(`/blog/${id}`)
        } else {
            next();
        }
    }
}