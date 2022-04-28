const router = require('express').Router();
const {
  getAllUsers,
  updateUser,
  deleteUser,
  createUser,
  getUserById,
  saveBook,
  deleteBook,
  login
} = require('../../controllers/user-controller');

// import middleware, put authMiddleware anywhere we need to send a token for verification of user
const { authMiddleware } = require('../../utils/auth');

// api/users/
router.route('/')
  .get(getAllUsers)
  .post(createUser)
  .put(authMiddleware, saveBook);

// api/users/:id
router
  .route('/:id')
  .get(authMiddleware, getMyUser)
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// api/users/:id/login
router
  .route('/:id/login')
  .post(login);

// api/users/books/bookId  
router
  .route('/books/bookId')
  .delete(authMiddleware, deleteBook);

module.exports = router;