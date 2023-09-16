import { createTheme } from "@mui/material";

export const authTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#176B87',
            light: '#64CCC5',
            dark: '#DAFFFB'
        }, 

        secondary: {
            main: '#fff',
            light: '#fff',
            dark: '#fff'
        }
    }
})