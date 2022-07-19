import { createContext, useState } from "react";

const AnimationContext = createContext();

const AnimationProvider = ({children}) => {

    const [isAnimatedFinished, setIsAnimatedFinished] = useState(false);

    const data = {isAnimatedFinished, setIsAnimatedFinished};
    return (<AnimationContext.Provider value={data}>{children}</AnimationContext.Provider>);
}

export {AnimationProvider};

export default AnimationContext;