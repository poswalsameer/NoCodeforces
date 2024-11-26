'use client'
import React, { useState } from 'react'
import UsernameContext from './UsernameContext';

function UsernameContextProvider({children}: {children: any}) {
    
    const [username, setUsername] = useState<string>('');
    const [under1100, setUnder1100] = useState<number>(0);
    const [under1600, setUnder1600] = useState<number>(0);
    const [under2100, setUnder2100] = useState<number>(0);
    const [above2000, setAbove2000] = useState<number>(0);

    return (
        <UsernameContext.Provider value={{username, setUsername, under1100, setUnder1100, under1600, setUnder1600, under2100, setUnder2100, above2000, setAbove2000}}>
        {children}
        </UsernameContext.Provider>
    )
}

export default UsernameContextProvider
