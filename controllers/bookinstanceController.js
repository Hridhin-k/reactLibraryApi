var BookInstance = require('../models/bookinstance');

// Display list of all BookInstances.
exports.bookinstance_list = async function (req, res) {     //DONE
    const data = await BookInstance.find();
    console.log(data)

    res.send(data);
    //res.send('NOT IMPLEMENTED: BookInstance list');
};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = async function (req, res) {   //DONE
    const id = req.params.id;
    const data = await BookInstance.findById(id)

    console.log(data);
    res.send(data);

};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance create POST');
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = function (req, res) {
    res.render('bookinstadelete')
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = async function (req, res) {   //DONE
    const data = req.body.id;
    console.log(data);
    const d = await BookInstance.findByIdAndRemove(data);

    res.send(d);
    res.send('bookinstance deleted')
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};