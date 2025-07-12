import { OAuth2Client } from "google-auth-library";
import dotenv from "dotenv";

dotenv.config({ path: "../../config/.env" });

const client = new OAuth2Client(process.env.VITE_GOOGLE_CLIENT_ID);

const authController = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Token required" });
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.VITE_GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    console.log(payload);

    if (!payload) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    const user = {
      id: payload.sub,
      name: payload.name,
      email: payload.email,
      avatarUrl: payload.picture,  // <-- Added avatar URL here
    };

    const { email, name, id, avatarUrl } = user;
    console.log("✅ Token successfully verified for:", { email, name, id, avatarUrl });

    return res.status(200).json({ user });
  } catch (error) {
    console.error("❌ Token verification failed:", error);
    return res.status(401).json({ message: "Token verification failed" });
  }
};

export default authController;
