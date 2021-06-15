/** handle response errors */
exports.responseError = (res, res_code, res_des, error, code) => {
  res.status(code).json({
    success: false,
    response_code: `${res_code}`,
    response_description: `${res_des}`,
    error: error,
  })
}

/** handle successful response */
exports.responseSuccess = (res, res_code, res_des, data, code) => {
  res.status(code).json({
    success: true,
    response_code: `${res_code}`,
    response_description: `${res_des}`,
    data,
  })
}

