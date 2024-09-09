import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle<{}>`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  :root {
  --background-color: #F0F0F0;
  --second-background: #1C0027;
  --footer-background: #2D2D2D;
  --gray-background: #F3F3F3;
  --green: #0FA958;
  --gray01: #5B5B5B;
  --gray02: #626161;
  --blue: #3483FA;
  --red: #FA3434;
  --orange: #FF9C41;
  --border: #e3e3e3;
  --input-color: #FAFAFA;
  --input-text-color: #c0c0c0;
}
  *{
    margin:0;
    padding:0;
    border:0,
    box-sizing: border-box;
    list-style:none;
    font-family: 'Poppins', sans-serif;
  }
  body{
    background-color: var(--background-color);  
  }
  p{
    font-size:18px;
  }
  .landing-page-title{
    font-size: 48px;
  }
  .title{
    font-size: 36px;
  }
  .subtitle{
    font-size: 32px;
  }
  .footer-title{
    font-size: 18px;
    color:white;
  }
  .input-enter-data{
    height: 50px;
    width: 100%;
    padding: 0 0 0 50px;
    border-radius: 8px;
    border: 2px solid var(--border);
    box-sizing: border-box;
    font-size:14px;
    background-color: var(--input-color);
  }

  .second-input-enter-data{
    height: 50px;
    width: 100%;
    padding: 0 20px 0 20px;
    border-radius: 8px;
    border: 2px solid var(--border);
    box-sizing: border-box;
    font-size:14px;
    background-color: var(--input-color);
  }
  .principalButton{
    border-radius: 8px;
    color:white;
    background-color:var(--blue);
    text-align:center;
    border:none;
    height:50px;
    font-size: 18px;
    cursor:pointer;
  }
`;
