import { SignIn } from "../components/sign-in"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function SignInPage() {
  const session: any = await auth()
  if (session?.user) redirect("/")
  return <SignIn />
}