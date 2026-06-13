import { DefaultSession, DefaultUser } from "next-auth"

// Define the role type (or just use string)
export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: string // Add your custom property here
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    role?: string // Add your custom property here
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role?: string
  }
}
