const detailModel = require("../models/detail.models")


const createDetails = async (req,res) => {
    try{
        const{name,number,email,age} = req.body
        if(!name || !number || !email || !age){
            return res
            .status(400)
            .json({ error: "please fill all details", success: false });
        }
        const newDetails = await detailModel.create({
           name:name,
           number:number,
           email:email,
           age:age
        });

        return res.status(201).json({
            success: true,
            newDetails,
            msg: "Account created successfully",
          });

    }catch(err){
        console.log(err.message);
        return res.json({ success: false, error: "Internal Server Error" })
    }
}

const deleteDetails = async (req, res) => {
    try {
      const post = await detailModel.findById(req.params.id);
      if (!post) {
        return res.status(400).json({ error: "Post not found" });
      }
      await detailModel.findByIdAndDelete(req.params.id);
      return res.status(200).json({ msg: "Post deleted successfully" });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  const updateDetails = async (req, res) => {
    try {
      let { name,number,email,age } =
        req.body;
      let user = await detailModel.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      user.name = name || user.name;
      user.number = number || user.number;
      user.email = email || user.email;
      user.age = age || user.age;
  
      user = await user.save();
      return res.status(200).json({ user });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

module.exports={ createDetails , deleteDetails, updateDetails}