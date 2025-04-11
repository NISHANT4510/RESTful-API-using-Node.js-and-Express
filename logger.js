// Logs the HTTP method, URL, and response status code after the response is sent
export const logger = (req, res, next) => {
  res.on('finish', () => {
    console.log(`${req.method} ${req.originalUrl} - ${res.statusCode}`);
  });
  next(); // Move to the next middleware or route handler
};

// Validates that the 'name' field is present and not empty in the request body
export const validateUser = (req, res, next) => {
  const { name } = req.body;

  // If 'name' is missing or is only whitespace, return a 400 Bad Request
  if (!name || name.trim() === '') {
    return res.status(400).json({ error: 'Name is required' });
  }

  next(); // Proceed to the next middleware or route handler if validation passes
};