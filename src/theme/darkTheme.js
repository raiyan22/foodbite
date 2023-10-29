const { createTheme } = require("@mui/material");

export const darkTheme = createTheme({
    palette:{
        mode: "dark",
        primary: {
            main: "#04647e"
        },
        secondary: {
            main: "#549cac"
        },
        black: {
            main: "#242b2e"
        },
        background: {
            main: "#242b2e",
            default: "#0d0d0d",
            paper: "#0d0d0d"
        },
        textColor: {
            main: "#111111"
        },

    }
})