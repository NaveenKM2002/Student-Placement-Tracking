const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    role:String,
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image:String,
    
  },
  {
    timestamps: true,
  }
);

// Password Encrypt
// userSchema.pre("save", async function(next){
//   if (!this.isModified('password')) {
//     next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });


// //password decrypt
// userSchema.methods.matchPassword = async function (enteredPassword){
//   return await bcrypt.compare(enteredPassword,this.password)
// }

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };
