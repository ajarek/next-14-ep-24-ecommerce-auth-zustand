import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      
      <Skeleton className="w-[300px] h-[300px] rounded-full flex items-center justify-center text-xl text-slate-400 ">  Processing...</Skeleton>
    </div>
  )
}

export default Loading