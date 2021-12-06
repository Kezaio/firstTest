const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema={
    name:String,
    age:Number,
    health:String
}
const mydata = mongoose.model('cats', schema);

// const kitty = new mydata({ name: '001' });
// kitty.save().then(() => console.log('meow'));

// const Hellokitty = new mydata({ name: '002',age:1,health:"good" });
// Hellokitty.save().then(() => console.log('aow'));
mydata.find({name:"yingtao"},(err,data)=>{
    console.log(data[0]._doc)
})


