const bcrypt = require("bcryptjs");
const saltRounds = 7;

async function hashPassword(password) {
  return await bcrypt.hash(password, saltRounds);
}

async function comparePassword(unhashed_password, hashed_password) {
  return await bcrypt.compare(unhashed_password, hashed_password);
}
