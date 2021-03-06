import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    overflow-x: hidden;
    @media (max-width: 1080px) {
    font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
};

  * {
   scroll-behavior: smooth;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  }

    @font-face {
    font-family: "Montserrat-Thin";
    src: url("/fonts/Montserrat-Thin.ttf")
  }

    @font-face {
    font-family: "Montserrat-Bold";
    src: url("/fonts/Montserrat-Bold.ttf")
    }
    
    @font-face {
    font-family: "Mulish";
    src: url("/fonts/Mulish.ttf")
  }
  `;
