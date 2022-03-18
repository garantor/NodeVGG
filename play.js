// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require("express-validator");

app.post("/user", body("username").isEmail(),body("password").isLength({ min: 5 }),
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      username: req.body.username,
      password: req.body.password,
    }).then((user) => res.json(user));
  }
);
