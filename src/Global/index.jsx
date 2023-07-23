import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: DroidNaskh;
    }
    /* width */
      ::-webkit-scrollbar {
        width: 8px;
        height: 20px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #70707060;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgb(23 159 179);
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
        transition:all .4s
        }
`;
export default GlobalStyle;
