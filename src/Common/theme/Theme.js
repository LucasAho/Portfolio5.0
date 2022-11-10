import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
    typography: {
        h1: {
            fontSize: '5rem',
            fontWeight: '600'
        },
        h2: {
            fontSize: '3rem',
            fontWeight: '520'
        },
        h3: {
            fontSize: '2.5rem'
        },
        h4: {
            fontSize: '1.77rem'
        },
        h5: {
            fontSize: '1.45rem'
        },
        h6: {
            fontSIze: '1.04rem',
            fontWeight: '550'
        }
    }
});

export default Theme;