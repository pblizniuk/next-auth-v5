import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { SupabaseAdapter } from "@auth/supabase-adapter"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Github],  // Add your providers here  https://next-auth.js.org/providers
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL || '',
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  })
});