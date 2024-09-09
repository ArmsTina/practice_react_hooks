import {createContext} from 'react';

// Used to manage global data (user information, theme, language)
// Through Context, there's no need to continuously pass props to each component (prop drilling)
// However, overusing Context can make component reuse difficult, so use it only when necessary

// The initial value is used when no value is passed to the Provider.
export const ThemeContext = createContext(null);
