import { model, Schema } from "mongoose";
import validator from "validator";
import { IUser } from "../interfaces/user.interface";


const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: [true, "firstName keno dao nai?"],
        trim: true,
        minlength: [3, "First Name must be atleast 3 characters, got {VALUE}"],
        // minlength: 3,
        maxlength: 10

    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Name must be 3 characters"],
        // minlength: 3,
        maxlength: 10
    },
    age: {
        type: Number,
        required: true,
        min: [18, 'Age Must be at least 18, got {VALUE}'],
        // min: 18,
        max: 60,
    },
    email: {
        type: String,
        unique: [true, "Email common hoye geche!!"],
        required: true,
        lowercase: true,
        trim: true,
        // validate: {
        //     validator: function (value) {
        //         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        //     },
        //     message: function (props) {
        //         return `Email ${props.value} is not valid email`
        //     }
        // }
        validate: [validator.isEmail, "Invalid Email sent {VALUE}"]
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        uppercase: true,
        enum: {
            values: ['USER', 'ADMIN', 'SUPERADMIN'],
            message: "Role is not valid. got {VALUE} role"
        },
        default: 'USER'
    }
})

export const User = model("User", userSchema)

