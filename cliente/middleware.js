import { NextResponse } from 'next/server'

export function middleware( request ) {

   const token = request.cookies.get("token")
   console.log(token)
    
   if(request.nextUrl.pathname.includes("/cards"))
      console.log("validate dashboard")
   return NextResponse.next()
  }