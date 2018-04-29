import { injectGlobal } from 'emotion'

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700');

    * {
        box-sizing: border-box;
    }
    
    html, body {
        padding: 0;
        margin: 0;
    }

    /* --- CSS Variables --- */
    html {
        --border-width: 2;
        --scale: 0.4;
        --translateY: -500;
    }
`
