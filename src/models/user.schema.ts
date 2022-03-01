import * as moongose from 'mongoose';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export const UserSchema = new moongose.Schema({
  name: String,
  password: String,
  seller: {
    type: Boolean,
    default: false,
  },
  address: {
    addr1: String,
    addr2: String,
    city: String,
    state: String,
    country: String,
    zip: Number,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashed = await bcrypt.hash(this['password'], 10);
  } finally {
  }
});
