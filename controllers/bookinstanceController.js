var BookInstance = require('../models/bookinstance');
const book = require('../models/book')
// Display list of all BookInstances.
exports.bookinstance_list = async function (req, res) {     //DONE
    const data = await BookInstance.find();
    console.log(data)

    res.send(data);

};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = async function (req, res) {   //DONE
    const id = req.params.id;
    const data = await BookInstance.findById(id)

    console.log(data);
    res.send(data);

};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = async function (req, res) {
    const tname = await book.find()
    res.render('bookinstancecreate', { tname })
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = async function (req, res) {
    const bookinstance = new BookInstance({
        book: req.body.book,
        imprint: req.body.imprint,

        status: req.body.status,
        due_back: req.body.due_back

    })



    const a = await bookinstance.save()
    res.json(a)
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = function (req, res) {
    res.render('bookinstadelete')
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = async function (req, res) {   //DONE
    const data = req.body._id;
    console.log(data);
    const d = await BookInstance.findByIdAndRemove(data);

    //res.send(d);
    res.send('bookinstance deleted')
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = async function (req, res) {
    const tname = await book.find()
    res.render('bookinstanceupdate', { tname })
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = async function (req, res) {
    const id = req.body._id;
    const book = req.body.book
    const imprint = req.body.imprint
    const status = req.body.status
    const due_back = req.body.due_back




    console.log(id)
    const d = await BookInstance.findByIdAndUpdate(id, { book: book, imprint: imprint, status: status, due_back: due_back }, { new: true })
    res.json(d);
};