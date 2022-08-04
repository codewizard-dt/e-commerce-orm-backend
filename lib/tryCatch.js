/**
 * Wraps async route handlers to automatically catch errors
 * @param {function} handler async route handler
 * @returns async route handler with caught errors
 */
const tryCatch = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

}

module.exports = tryCatch