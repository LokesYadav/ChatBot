const express=require('express');
const app=express();
app.listen(4000);
app.get('/about',(req,res)=>{
    res.send('<p><h1>hello we are at about page</p>');
});
app.get('/home',(req,res)=>{
    res.send('<p><h1>hello  you are at home page</p>');
    // const blogs=[
    //     {title: 'Yosghi',snippet:'lorem ipsum'},
    //     {title: 'Yoi',snippet:'lorem ipsum'},

        
    // ];
    // res.render('index',{title:'Home',blogs});
}); 
// it allows u to make all the files static and can be used directly in server(like css files).
// app.use(express.static('..apractice'));
// monoose is an odm library(open document mapping)
// it has two models 
// 1.user model user.get(),user.FindById();
// 2.blog model Blog.deleteOne();
