const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  getMyUser,
  updateUser,
  deleteUser,
  saveBook,
  deleteBook,
  login
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser).put(authMiddleware, saveBook);

// api/users/:id
router
  .route('/:id')
  .get(authMiddleware, getMyUser)
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/:id/login')
  .post(login);

router
  .route('/books/bookId')
  .delete(authMiddleware, deleteBook);


// put authMiddleware anywhere we need to send a token for verification of user
// router.route('/').post(createUser).put(authMiddleware, saveBook);
// router.route('/login').post(login);
// router.route('/me').get(authMiddleware, getMyUser);
// router.route('/books/:bookId').delete(authMiddleware, deleteBook);

module.exports = router;