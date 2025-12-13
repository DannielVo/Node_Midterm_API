import User from "./userModel.js";

export const UserRepository = {
  create(data) {
    return User.create(data);
  },

  findById(id) {
    return User.findById(id);
  },

  findByEmail(email) {
    return User.findOne({ email });
  },

  findAll() {
    return User.find();
  },
};
