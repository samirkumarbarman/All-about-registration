import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true,
    },

    password: {
        type: String,
        required: function() {
            return !this.googleId;
        },
    },

    googleId: {
        type: String,
        unique: true,
        sparse: true,
    },

    avatar: {
        type: String,
        default:  "https://www.gravatar.com/avatar/?d=identicon",
    },

    role: {
        type: String,
        enum: ['user', 'admin', 'super-admin'],
        default: 'user',
    },

},{ timestamps: true });

userSchema.pre('findOneAndUpdate', async function(next) {
    const updates = this.getUpdate();
    const userId = this.getQuery()['_id'];

    await UpdateHistory.create({
        userId: userId,
        updatedFields: updates,
        updatedAt: new Date()
    });

    next();
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    };

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model('User', userSchema);