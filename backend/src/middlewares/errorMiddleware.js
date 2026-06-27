// Handle errors in the application
// Convert Sequelize validation errors
const handleValidationError = (err) => {
    const errors = {};
    err.errors.forEach(error => {
        errors[error.path] = error.message;
    });
    return errors;
}

const errorHandler = (err, req, res, next) => {
    // Handle Sequelize unique constraint errors
    if (err.name === 'SequelizeUniqueConstraintError') {
        return res.status(409).json({
            success: false,
            message: "Duplicate Data Error",
            errors: handleValidationError(err)
        })
    }

    // Handle Sequelize validation errors
    if (err.name === 'SequelizeValidationError') {
        return res.status(400).json({
            success: false,
            message: "Validation Error",
            errors: handleValidationError(err)
        });
    }


    // Handle other types of errors
    res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
};

export default errorHandler;