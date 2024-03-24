export type CreateUSerDto = {
    _id?:String,
    username: String,
    email: String,
    password: String,
    isVerified?: Boolean,
    isAdmin?: Boolean
    forgotPasswordToken?: String,
    forgotPasswordTokenExpiry?: Date,
    verifyToken?: String,
    verifyTokenExpiry?: Date,
};