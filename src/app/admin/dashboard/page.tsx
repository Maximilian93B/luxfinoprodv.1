import { getServerSession } from "next-auth"
import { authOptions } from "@/app/lib/auth"

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  return <div>Dashboard</div>
}