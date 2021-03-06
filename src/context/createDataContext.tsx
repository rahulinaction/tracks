import React, {useReducer} from 'react';

interface Props {
    children: any
}

export default (reducer: any, actions: {}, defaultValue: any) => {
    const Context = React.createContext({state:"", signout:"", signup:"", signin:"",clearErrorMessage:"", tryLocalSignin: ""});

    const Provider : React.FC<Props>= ({children}) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);

        let boundActions = {};
        for(let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }
        
        return(
            <Context.Provider value={{state, ...boundActions}}>
                {children}
            </Context.Provider>
        )
    }

    return {Context, Provider};
} 