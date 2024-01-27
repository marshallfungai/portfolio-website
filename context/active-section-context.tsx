'use client';

import React, { createContext, useState } from 'react'
import { links } from '@/lib/data'
import type { SectionName } from '@/lib/types';


type ActiveSectionContextProps = {
    children: React.ReactNode
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClicked: number;
    setTimeOfLastClicked: React.Dispatch<React.SetStateAction<number>>;
}

export const  ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProps) {
   
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClicked, setTimeOfLastClicked] = useState<number>(0);

    return (
        <ActiveSectionContext.Provider value={{
            activeSection,
            setActiveSection,
            timeOfLastClicked,
            setTimeOfLastClicked
        }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext(){
    const context = React.useContext(ActiveSectionContext);
    if(context === null){
        throw new Error('useActiveSection must be used within a ActiveSectionContextProvider')
    }
    return context;
}
