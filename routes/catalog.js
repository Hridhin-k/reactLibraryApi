const express = require('express');
const router = express.Router();


// Require controller modules.
const book_controller = require('../controllers/bookController');
const author_controller = require('../controllers/authorController');
const genre_controller = require('../controllers/genreController');
const book_instance_controller = require('../controllers/bookinstanceController');
const user_controller = require('../controllers/usercontroller')
const cors = require('cors');
const { Router } = require('express');
const { authenticate } = require('../public/middleware/authentication');
router.use(cors({ origin: '*' }))
/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', book_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
//router.get('/book/create',authenticate, book_controller.book_create_get);

// POST request for creating Book.
router.post('/book', authenticate, book_controller.book_create_post);

// GET request to delete Book.
//router.get('/book/delete',authenticate, book_controller.book_delete_get);

// DELETE request to delete Book.
router.delete('/book/:_id', authenticate, book_controller.book_delete_post);

// GET request to update Book.
//router.get('/book/update', book_controller.book_update_get);

// PUT request to update Book.
router.put('/book', authenticate, book_controller.book_update_post);

// GET request for one Book.
//router.get('/book/:id', book_controller.book_detail);

// GET request for list of all Book items.
router.get('/books', authenticate, book_controller.book_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
//router.get('/author/create', author_controller.author_create_get);

// POST request for creating Author.
router.post('/author', authenticate, author_controller.author_create_post);

// GET request to delete Author.
//router.get('/author/delete', author_controller.author_delete_get);

// POST request to delete Author.
router.delete('/author/:_id', authenticate, author_controller.author_delete_post);

// GET request to update Author.
//router.get('/author/update', author_controller.author_update_get);

// POST request to update Author.
router.put('/author', authenticate, author_controller.author_update_post);

// GET request for one Author.
//router.get('/author/:id', authenticate,author_controller.author_detail);

// GET request for list of all Authors.
router.get('/authors', authenticate, author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
//router.get('/genre/create', authenticate, genre_controller.genre_create_get);

//POST request for creating Genre.
router.post('/genre', authenticate, genre_controller.genre_create_post);

// GET request to delete Genre.
//router.get('/genre/delete', authenticate, genre_controller.genre_delete_get);

// DELETE request to delete Genre.
router.delete('/genre/:_id', authenticate, genre_controller.genre_delete_post);

// GET request to update Genre.
//router.get('/genre/update', authenticate,genre_controller.genre_update_get);

// PUT request to update Genre.
router.put('/genre', authenticate, genre_controller.genre_update_post);

// GET request for one Genre.
//router.get('/genre/:id', authenticate,genre_controller.genre_detail);

// GET request for list of all Genre.
router.get('/genres', authenticate, genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
//router.get('/bookinstance/create', authenticate,book_instance_controller.bookinstance_create_get);

// POST request for creating BookInstance.
router.post('/bookinstance', authenticate, book_instance_controller.bookinstance_create_post);

// GET request to delete BookInstance.
//router.get('/bookinstance', authenticate,book_instance_controller.bookinstance_delete_get);

// POST request to delete BookInstance.
router.delete('/bookinstance/:_id', authenticate, book_instance_controller.bookinstance_delete_post);

// GET request to update BookInstance.
//router.get('/bookinstance/update', authenticate,book_instance_controller.bookinstance_update_get);

// POST request to update BookInstance.
router.put('/bookinstance', authenticate, book_instance_controller.bookinstance_update_post);

// GET request for one BookInstance.
router.get('/bookinstance/:id', authenticate, book_instance_controller.bookinstance_detail);

// GET request for list of all BookInstance.
router.get('/bookinstances', authenticate, book_instance_controller.bookinstance_list);


/// USER AUTHENTICATION ///

router.post('/register', user_controller.user_create)
router.post('/login', user_controller.user_login)
module.exports = router;