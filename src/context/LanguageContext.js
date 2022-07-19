import { createContext, useState } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({children}) => {

    const [language, setLanguage] = useState({
        english: true,
        spanish: false,
    });

    const data = {language, setLanguage};
    return (<LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>);
}

export {LanguageProvider};

export default LanguageContext;