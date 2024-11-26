'use client'

import React, { useContext, useEffect } from 'react'
import UsernameContext from '../context/UsernameContext';
import { Card } from "@/components/ui/card"
import { Code2, ClockAlert } from 'lucide-react'

export default function StatsDashboard() {

    const context = useContext(UsernameContext);
    if( context === undefined ){
        throw new Error("Context not defined properly");
    }
    const { username, setUsername, under1100, setUnder1100, under1600, setUnder1600, under2100, setUnder2100, above2000, setAbove2000 } = context;

    const totalTimeTaken = (under1100 * 15) + (under1600 * 25) + (under2100 * 40) + (above2000 * 60)

    // useEffect( () => {
    //     console.log("Number of questions solved under 1100 are: ", under1100);
    //     console.log("Number of questions solved under 1600 are: ", under1600);
    //     console.log("Number of questions solved under 2100 are: ", under2100);
    //     console.log("Number of questions solved above 2000 are: ", above2000);
    // }, [] )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <div className="flex flex-col items-center space-y-6">
          <div className="w-24 h-24 rounded-full bg-[#3949AB] border-2 border-[#00BCD4] flex items-center justify-center">
            <Code2 className="w-12 h-12" />
          </div>
          <h1 className="text-3xl font-bold">{username}</h1>
          
          
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center gap-2 text-xl">
              <Code2 className="text-[#00BCD4]" />
              <span className="font-bold text-[#B3E5FC]">Total Solved:</span>
              <span className="text-[#FFC107]">{ under1100 + under1600 + under2100 + above2000 } questions</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xl">
              <ClockAlert className="text-[#00BCD4]" />
              <span className="font-bold text-[#B3E5FC]">Time wasted:</span>
              <span className="text-[#FFC107]">{totalTimeTaken} minutes</span>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 800-1000 CATEGORY */}
          <Card className="bg-[#2533a0] border-transparent p-6 space-y-4 transition-all delay-75 ease-linear hover:cursor-pointer hover:border hover:border-white shadow-md">
            <div className="flex items-center gap-2">
              <Code2 className="text-[#00BCD4]" />
              <h2 className="text-xl font-semibold">800-1000 Rated</h2>
            </div>
            <div className="text-4xl font-bold text-[#FFC107]">
                {under1100}
                <span className='ml-2 font-bold text-white text-sm'>questions solved</span>
            </div>
            <div className="text-sm font-bold text-[#B3E5FC]">{under1100 * 15} minutes spent</div>
          </Card>

          {/* 1100-1500 CATEGORY */}
          <Card className="bg-[#2533a0] border-transparent p-6 space-y-4 transition-all delay-75 ease-linear hover:cursor-pointer hover:border hover:border-white shadow-md">
            <div className="flex items-center gap-2">
              <Code2 className="text-[#00BCD4]" />
              <h2 className="text-xl font-semibold">1100-1500 Rated</h2>
            </div>
            <div className="text-4xl font-bold text-[#FFC107]">
                {under1600}
                <span className='ml-2 font-bold text-white text-sm'>questions solved</span>
            </div>
            <div className="text-sm font-extrabold text-[#B3E5FC]">{under1600 * 25} minutes spent</div>
          </Card>

          {/* 1600-2000 CATEGORY */}
          <Card className="bg-[#2533a0] border-transparent p-6 space-y-4 transition-all delay-75 ease-linear hover:cursor-pointer hover:border hover:border-white shadow-md">
            <div className="flex items-center gap-2">
              <Code2 className="text-[#00BCD4]" />
              <h2 className="text-xl font-semibold">1600-2000 Rated</h2>
            </div>
            <div className="text-4xl font-bold text-[#FFC107]">
                {under2100}
                <span className='ml-2 font-bold text-white text-sm'>questions solved</span>
            </div>
            <div className="text-sm font-bold text-[#B3E5FC]">{under2100 * 40} minutes spent</div>
          </Card>

          {/* Above 2000 CATEGORY */}
          <Card className="bg-[#2533a0] border-transparent p-6 space-y-3 transition-all delay-75 ease-linear hover:cursor-pointer hover:border hover:border-white shadow-md">
            <div className="flex items-center gap-2">
              <Code2 className="text-[#00BCD4]" />
              <h2 className="text-xl font-semibold">Above 2000 Rated</h2>
            </div>
            <div className="text-4xl font-bold text-[#FFC107]">
                {above2000}
                <span className='ml-2 font-bold text-white text-sm'>questions solved</span>
            </div>
            <div className="text-sm font-bold text-[#B3E5FC]">{above2000 * 60} minutes spent</div>
          </Card>
        </div>
      </div>
    </div>
  )
}


