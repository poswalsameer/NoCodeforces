'use client'

import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react'
import UsernameContext from '../context/UsernameContext'

export default function Form() {
    
    const [loading, setLoading] = useState<boolean>(false);

    const context = useContext(UsernameContext);
    if( context === undefined ){
        throw new Error("Context not defined properly");
    }
    const { username, setUsername, under1100, setUnder1100, under1600, setUnder1600, under2100, setUnder2100, above2000, setAbove2000 } = context;

    const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true);

    const apiUrl = `https://codeforces.com/api/user.status?handle=${username}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    const allQuestionSolved  = data.result;

    allQuestionSolved.map( (question: any) => {
        if( question.verdict === "OK" ){
            if( question.problem.rating < 1100 ){
                setUnder1100( prev => prev+1 );
            }
            else if( question.problem.rating < 1600 ){
                setUnder1600( prev => prev+1 );
            }
            else if( question.problem.rating < 2100 ){
                setUnder2100( prev => prev+1 );
            }
            else if( question.problem.rating > 2000 ){
                setUnder2100( prev => prev+1 );
            }
        }
    })

    router.push("/stats");
    setLoading(false);

  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Codeforces username"
          className="w-72 sm:w-96 px-4 py-2 rounded-md bg-[#2533a0] text-white font-bold placeholder-blue-300 border-2 border-blue-500 focus:outline-none focus:border-blue-300 transition duration-300"
        />
      </div>
      <div>
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-[#2533a0] text-white font-semibold hover:bg-[#2a3ab8] focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-300"
        >
            { loading ? "Finding..." : "Check Stats" }
        </button>
      </div>
    </form>
  )
}
