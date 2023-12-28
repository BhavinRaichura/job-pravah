import slugify from "slugify";

const { Schema, models, model } = require("mongoose");


const postSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    image:{
        type:String,
        required:false
    },
    content:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:false,
        unique:true,
       
    },
    tags:{
        type:[{type:String}],
        default:[]
    },
    authorId:{
        type: Schema.Types.ObjectId,
        ref:'User',
        required:false
    },
    state:{
        type:String,
        required:false
    },
    createdAt:{
        type:String,
        default: new Date().toLocaleDateString().replaceAll("/","-")
    },
    updatedAt:{
        type:Date,
        default: Date.now()
    },
})

postSchema.pre("save",{document:true, query:false},function(){
    console.log("###################\n\nitem added: ")
    this.slug =  slugify(this.title.replace(/[^\w\s]/gi, '').trim())
    
})


postSchema.post('findOneAndUpdate',true, function () {
    console.log("/n/n######## updte")
    this.set({ updatedAt: new Date() });
 });
const Post = models.Post || model("Post", postSchema)


export default Post;