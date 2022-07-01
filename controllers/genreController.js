const genre = require('../models/genre');
var Genre = require('../models/genre');

// Display list of all Genre.
exports.genre_list = async function (req, res) {     //DONE
    const data = await Genre.find();
    console.log(data)
    //res.json(data)
    res.send(data);
};

// Display detail page for a specific Genre.
exports.genre_detail = async function (req, res) {  //DONE
    const id = req.params.id;
    const data = await Genre.findById(id)

    console.log(data);
    res.send(data);
};

// Display Genre create form on GET.
exports.genre_create_get = function (req, res) {      //DONE
    res.render('creategenre');
    //res.send('NOT IMPLEMENTED: Genre create GET');
};

// Handle Genre create on POST.
exports.genre_create_post = async function (req, res) {  //DONE
    const genre = new Genre({
        name: req.body.name
    })
    const n = await genre.save()
    res.json(n)

};

// Display Genre delete form on GET.
exports.genre_delete_get = function (req, res) {    //DONE
    res.render('deletegenre');
    //res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POSt.
exports.genre_delete_post = async function (req, res) {   //DONE
    const data = req.body._id;
    const d = await genre.findByIdAndRemove(data)
    res.send(d);
    console.log(d);
    console.log('genre deleted');
    //res.send('NOT IMPLEMENTED: Genre delete POST');   
};

// Display Genre update form on GET.
exports.genre_update_get = function (req, res) {    //DONE
    res.render('updategenre')
};

// Handle Genre update on POST.
exports.genre_update_post = async function (req, res) {   //DONE
    const id = req.body._id;
    console.log(id)
    const data = req.body.name;
    console.log(data)
    const d = await genre.findByIdAndUpdate(id, { name: data }, { new: true })
    res.json(d);
};  