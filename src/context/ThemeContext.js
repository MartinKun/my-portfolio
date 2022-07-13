import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [isLightOn, setIsLightOn] = useState(false);

    const data = {isLightOn, setIsLightOn};
    return (<ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>);
}

export {ThemeProvider};

export default ThemeContext;