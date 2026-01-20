import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import { connectToDatabase } from "@/lib/db";
import User from "@/models/User";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      return NextResponse.json({ success: false, user: null });
    }

    // Verify token
    const decoded = verify(token, JWT_SECRET) as {
      userId: string;
      role: string;
    };

    if (!decoded) {
      return NextResponse.json({ success: false, user: null });
    }

    await connectToDatabase();
    const user = await User.findById(decoded.userId).select("-password");

    if (!user || !user.isActive) {
      return NextResponse.json({ success: false, user: null });
    }

    return NextResponse.json({
      success: true,
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, user: null });
  }
}
