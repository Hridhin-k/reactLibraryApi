var Book = require('../models/book');
var genre = require('../models/genre');
var author = require('../models/author');
exports.index = function (req, res) {
    res.render('instruction_home')
    // res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all books.
exports.book_list = async function (req, res) {     //DONE
    const book = await Book.find();

    res.send({ status: true, book })

};

// Display detail page for a specific book.
exports.book_detail = async function (req, res) {  //DONE
    const id = req.params.id;
    const data = await Book.findById(id)

    console.log(data);
    res.send(data);

};

// Display book create form on GET.
exports.book_create_get = async function (req, res) {
    const gname = await genre.find()
    const aname = await author.find();
    res.render('bookcreate', { gname, aname })
};

// Handle book create on POST.
exports.book_create_post = async function (req, res) {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,

        summary: req.body.summary,
        isbn: req.body.isbn,
        genre: req.body.genre
    })



    const a = await book.save()
    res.json(a)
};

// Display book delete form on GET.
exports.book_delete_get = function (req, res) {  //DONE
    res.render('bookdelete');
};

// Handle book delete on POST.
exports.book_delete_post = async function (req, res) {    //DONE
    const data = req.body.data._id;
    console.log(data);
    const d = await Book.findByIdAndRemove(data)

    res.send(d);
};

// Display book update form on GET.
exports.book_update_get = async function (req, res) {
    const gname = await genre.find()
    const aname = await author.find();
    res.render('bookupdate', { gname, aname })
};

// Handle book update on POST.
exports.book_update_post = async function (req, res) {                    //done
    const id = req.body._id;
    const title = req.body.title
    const author = req.body.author

    const summary = req.body.summary
    const isbn = req.body.isbn
    const genre = req.body.genre
    console.log(genre)


    console.log(id)
    const d = await Book.findByIdAndUpdate(id, { title: title, author: author, summary: summary, isbn: isbn, genre: genre }, { new: true })
    console.log(d);
    res.json(d);
};