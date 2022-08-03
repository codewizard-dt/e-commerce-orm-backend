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