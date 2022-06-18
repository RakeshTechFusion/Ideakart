const {Schema,model}= require('mongoose')

const productsSchema = new Schema({
    id:String ,
    name:String,
    price:String,
    view:String,
    view_url:String,
    more:String,
    more_url:String,
    discription:String,
    discription:[{Type:String},{Type:String}]
    
})

module.exports= model("products",productsSchema);