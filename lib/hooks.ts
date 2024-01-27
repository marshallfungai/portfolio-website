import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";


export function useSectionInView(sectionName: SectionName, threshold = 0.5){
    const {setTimeOfLastClicked, setActiveSection, timeOfLastClicked} = useActiveSectionContext();
    const {ref, inView} = useInView({
        threshold: threshold
    });

    useEffect(() => {
      if(inView && Date.now() - timeOfLastClicked > 1000){
        setActiveSection(sectionName);
      }
    }, [inView, timeOfLastClicked, sectionName]);

    return  {
        ref,
        setActiveSection,
        setTimeOfLastClicked,
    };
}