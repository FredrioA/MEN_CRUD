const axios = require('axios');

exports.homeRoutes=(req,res)=>{
    axios.get('http://localhost:3000/api/data')
    .then(function(response){
        res.render('index', { users : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.add_data=(req,res)=>{
    res.render('add_data');
}

exports.update_data=(req,res)=>{
    axios.get('http://localhost:3000/api/data', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_data", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}