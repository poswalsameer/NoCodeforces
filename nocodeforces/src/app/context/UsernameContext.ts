import React, { createContext, Dispatch, SetStateAction } from "react"

interface UsernameContextType {
    username: string;
    setUsername: Dispatch<SetStateAction<string>>;
    under1100: number;
    setUnder1100: Dispatch<SetStateAction<number>>;
    under1600: number;
    setUnder1600: Dispatch<SetStateAction<number>>;
    under2100: number;
    setUnder2100: Dispatch<SetStateAction<number>>;
    above2000: number;
    setAbove2000: Dispatch<SetStateAction<number>>;
}

const UsernameContext = createContext<UsernameContextType | undefined>(undefined);

export default UsernameContext;