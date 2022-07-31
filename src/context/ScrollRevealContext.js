import { createContext, useState } from "react";

const ScrollRevealContext = createContext();

const ScrollRevealProvider = ({children}) => {

    const [reveal, setReveal] = useState({
        description: false,
        techs: false,
        about: false,
        contact: false
    });

    const data = {reveal, setReveal};
    return (<ScrollRevealContext.Provider value={data}>{children}</ScrollRevealContext.Provider>);
}

export {ScrollRevealProvider};

export default ScrollRevealContext;