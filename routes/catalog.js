var express = require('express');
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');
var book_instance_controller = require('../controllers/bookinstanceController');
var cors = require('cors');
router.use(cors({ origin: '*' }))
/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', book_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/book/create', book_controller.book_create_get);

// POST request for creating Book.
router.post('/book', book_controller.book_create_post);

// GET request to delete Book.
router.get('/book/delete', book_controller.book_delete_get);

// DELETE request to delete Book.
router.delete('/book', book_controller.book_delete_post);

// GET request to update Book.
router.get('/book/update', book_controller.book_update_get);

// PUT request to update Book.
router.put('/book', book_controller.book_update_post);

// GET request for one Book.
router.get('/book/:id', book_controller.book_detail);

// GET request for list of all Book items.
router.get('/books', book_controller.book_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/author/create', author_controller.author_create_get);

// POST request for creating Author.
router.post('/author', author_controller.author_create_post);

// GET request to delete Author.
router.get('/author/delete', author_controller.author_delete_get);

// POST request to delete Author.
router.delete('/author', author_controller.author_delete_post);

// GET request to update Author.
router.get('/author/update', author_controller.author_update_get);

// POST request to update Author.
router.put('/author', author_controller.author_update_post);

// GET request for one Author.
router.get('/author/:id', author_controller.author_detail);

// GET request for list of all Authors.
router.get('/authors', author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', genre_controller.genre_create_get);

//POST request for creating Genre.
router.post('/genre', genre_controller.genre_create_post);

// GET request to delete Genre.
router.get('/genre/delete', genre_controller.genre_delete_get);

// POST request to delete Genre.
router.delete('/genre', genre_controller.genre_delete_post);

// GET request to update Genre.
router.get('/genre/update', genre_controller.genre_update_get);

// POST request to update Genre.
router.put('/genre', genre_controller.genre_update_post);

// GET request for one Genre.
router.get('/genre/:id', genre_controller.genre_detail);

// GET request for list of all Genre.
router.get('/genres', genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/bookinstance/create', book_instance_controller.bookinstance_create_get);

// POST request for creating BookInstance.
router.post('/bookinstance', book_instance_controller.bookinstance_create_post);

// GET request to delete BookInstance.
router.get('/bookinstance', book_instance_controller.bookinstance_delete_get);

// POST request to delete BookInstance.
router.delete('/bookinstance', book_instance_controller.bookinstance_delete_post);

// GET request to update BookInstance.
router.get('/bookinstance/update', book_instance_controller.bookinstance_update_get);

// POST request to update BookInstance.
router.put('/bookinstance', book_instance_controller.bookinstance_update_post);

// GET request for one BookInstance.
router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

// GET request for list of all BookInstance.
router.get('/bookinstances', book_instance_controller.bookinstance_list);

module.exports = router;