import User from "./userModel.js";

export const UserRepository = {
  create(data) {
    return User.create(data);
  },
  findByName(name) {
    return User.findOne({ name: name });
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
