import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { NextAuthConfig } from "next-auth";

type AuthorizationInput = {
  username?: string;
  password?: string;
};

const authOptions: NextAuthConfig = {
  secret: process.env.NEXTAUTH_SECRET || Azion.env.get("NEXTAUTH_SECRET"),
  providers: [
    GoogleProvider({
      clientId:
        process.env.GOOGLE_CLIENT_ID || Azion.env.get("GOOGLE_CLIENT_ID"),
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET ||
        Azion.env.get("GOOGLE_CLIENT_SECRET"),
    }),
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ username, password }, req) {
        // get user from database e.g
        // const user = await getUser(username, password);

        return { name: "John Doe", email: username as string };
      },
    }),
  ],
  callbacks: {
    signIn: ({ user }) => {
      return true;
    },
    session: ({ session }) => {
      return session;
    },
  },
};

export default authOptions;
