const registerUser = (req, res) => {
  console.log(req.body);
  res.json({ message: req.body.username });
};

const loginUser = (req, res) => {
  res.json({ message: "login user" });
};

const viewUser = (req, res) => {
  res.json({ message: "view user" });
};


module.exports = { registerUser, loginUser, viewUser };
