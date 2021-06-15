/** handle response errors */
exports.responseError = (res, message, error, code) => {
  res.status(code).json({
    success: false,
    message: `${message}`,
    error: error,
  })
}

/** handle successful response */
exports.responseSuccess = (res, message, data, code) => {
  res.status(code).json({
    success: true,
    message: `${message}`,
    data,
  })
}

