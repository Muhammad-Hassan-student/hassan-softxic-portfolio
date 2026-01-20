import { compare, hash } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import User from "@/models/User";
import { connectToDatabase } from "./db";

const JWT_SECRET =
  process.env.JWT_SECRET || "your-secret-key-change-in-production";
const JWT_EXPIRES_IN = "7d";

export async function hashPassword(password: string): Promise<string> {
  return await hash(password, 12);
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return await compare(password, hashedPassword);
}

export function generateToken(userId: string, role: string): string {
  return sign({ userId, role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(
  token: string
): { userId: string; role: string } | null {
  try {
    return verify(token, JWT_SECRET) as { userId: string; role: string };
  } catch {
    return null;
  }
}

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
}

export async function removeAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("auth_token");
}

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) return null;

  const decoded = verifyToken(token);
  if (!decoded) return null;

  await connectToDatabase();
  const user = await User.findById(decoded.userId).select("-password");

  if (!user || !user.isActive) return null;

  return user;
}

export async function requireAdmin() {
  const user = await getCurrentUser();

  if (!user || user.role !== "admin") {
    throw new Error("Unauthorized: Admin access required");
  }

  return user;
}

export async function loginUser(email: string, password: string) {
  await connectToDatabase();

  const user = await User.findOne({ email }).select("+password");

  if (!user || !user.isActive) {
    throw new Error("Invalid credentials");
  }

  const isValid = await verifyPassword(password, user.password);

  if (!isValid) {
    // Track failed login attempts
    user.loginAttempts += 1;
    user.lastFailedLogin = new Date();
    await user.save();

    throw new Error("Invalid credentials");
  }

  // Reset login attempts on successful login
  user.loginAttempts = 0;
  user.lastLogin = new Date();
  await user.save();

  const token = generateToken(user._id.toString(), user.role);
  await setAuthCookie(token);

  return {
    user: user.toJSON(),
    token,
  };
}

export async function logoutUser() {
  await removeAuthCookie();
}
