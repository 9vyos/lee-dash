import { redirect } from 'next/navigation';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";


export default async function Home() {
  let session = await getServerSession(authOptions)
  let token = false
  session?.login.jwtToken ? token = true: token = false;
  if(!token){
    redirect('/login');
  }else{
    redirect('/home')
  }
  return (
    <div>
      <p>홈페이지입니다</p>
    </div>
  )
}
