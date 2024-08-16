
const admins=require("../../watercan-main/models/admin");


exports.signup = async (req, res) => {
    try {
      const { email, password } = req.body;
      const admin = new admins({
        email: email.toLowerCase(),
        password: password,
        //   language: language,
      });
      await admin.save();
      res
        .status(201)
        .json({success:true, message: 'Signup Successful', user });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: 'Error' })
    }
  };