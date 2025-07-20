import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import {getUserByEmail} from "./user.service";

dotenv.config();
let JWT_SECRET = process.env.JWT_SECRET as string;
let REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET as string;

const refreshTokens = new Set<string>() ;

export const authenticateUser = async (email: string, password: string) => {

    const user = await getUserByEmail(email);

    let isValidPassword = bcrypt.compareSync(password, user?.password as string);
    if (!user || !isValidPassword) {
        return null;
    }

    const accessToken = jwt.sign({
        id: user.id,
        username: user.username,
        role: user.role
    }, JWT_SECRET, {expiresIn: '1d'})

    const refreshToken = jwt.sign({
        username: user.username
    }, REFRESH_TOKEN_SECRET, {expiresIn: '7d'})

    refreshTokens.add(refreshToken);
    return {
        accessToken,
        refreshToken
    };
}