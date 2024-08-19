import jwt, { JwtPayload } from "jsonwebtoken";
interface JwtProps extends JwtPayload{
  id: string
}

export function createToken(id: string) {
  return jwt.sign({id}, process.env.JWT_SECRET as string);
}

export function verifyToken(token: string) {
  return jwt.verify(String(token), process.env.JWT_SECRET as string) as JwtProps;
}