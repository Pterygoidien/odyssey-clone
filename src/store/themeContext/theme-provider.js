
import { ThemeContext } from './theme-context';

const ThemeProvider = ({ children }) => {

    const initialState = {
        theme: 'light',
        toggleTheme: () => { }

    }

    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (<ThemeContext.Provider value={state}>
        {children}
    </ThemeContext.Provider>)
}