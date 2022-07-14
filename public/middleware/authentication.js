const jwt = require('jsonwebtoken')
const userSchema = require('../../models/user')
exports.authenticate = async function (req, res, next) {
  try {
    const auth_token = req.headers.authorization;
    const token = auth_token.split('"')[1];
    console.log(token)
    const decryptToken = jwt.verify(token, 'hridhin#567#')
    const name = decryptToken.name;
    console.log("decrypt name: ", name);
    const Name = userSchema.findOne({ name })
    console.log('User: ======>', Name);
    if (!Name) {
      throw 'Invalid user';
    } else {
      next();
    }
  }
  catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }

} 