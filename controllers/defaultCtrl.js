const health = (req,res)=>{
    res.json({status:'up'})
}

const home =(req,res)=>{
    res.send("nodeapi")
}

const defaultCtrl = {
    health : health,
    home : home
}


module.exports = defaultCtrl
