const author = require('../models/author');
var Author = require('../models/author');

// Display list of all Authors.
exports.author_list = async function (req, res) {  //DONE
    const data = await Author.find();
    console.log(data)

    res.send(data);

};

// Display detail page for a specific Author.
exports.author_detail = async function (req, res) {    //DONE
    const id = req.params.id;
    const data = await Author.findById(id)

    console.log(data);
    res.send(data);

};

// Display Author create form on GET.
exports.author_create_get = function (req, res) {     //DONE
    res.render('authorcreate');
};

// Handle Author create on POST.
exports.author_create_post = async function (req, res) { //DONE 
    const author = new Author({
        first_name: req.body.first_name,
        family_name: req.body.family_name,

        date_of_birth: req.body.date_of_birth,
        date_of_death: req.body.date_of_death


    })
    const a = await author.save()
    res.json(a)
}

// Display Author delete form on GET.
exports.author_delete_get = function (req, res) {          //DONE
    res.render('authordelete');
};

// Handle Author delete on POST.
exports.author_delete_post = async function (req, res) {   //DONE
    const data = req.body.data._id;

    const d = await Author.findByIdAndRemove(data)


    res.send(d);


};

// Display Author update form on GET.
exports.author_update_get = function (req, res) {
    res.render('authorupdate')
};

// Handle Author update on POST.
exports.author_update_post = async function (req, res) {
    const id = req.body._id;
    const fname = req.body.first_name
    const faname = req.body.family_name

    const dob = req.body.date_of_birth
    const dod = req.body.date_of_death



    console.log(id)
    const d = await Author.findByIdAndUpdate(id, { first_name: fname, family_name: faname, date_of_birth: dob, date_of_death: dod }, { new: true })
    res.json(d);
};