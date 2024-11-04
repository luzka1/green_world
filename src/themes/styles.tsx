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
  --border-color: #dadada;
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
    font-size: 1rem;
  }
  .landing-page-title{
    font-size: 3rem;
  }
  .title{
    font-size: 2rem;
  }
  .subtitle{
    font-size: 1.5rem;
  }
  .footer-title{
    font-size: 1rem;
    color:white;
  }
  .green{
    color: var(--green);  
  }
  .blue{
    color: var(--blue);  
  }
    .red{
     color: var(--red);  
    }
    .bold{
    font-weight: bold;
    }
    .gray{
    color:var(--gray01);
    }
  .input-enter-data{
    height: 50px;
    width: 100%;
    padding: 0 0 0 50px;
    border-radius: 8px;
    border: 2px solid var(--border);
    box-sizing: border-box;
    font-size: 0.9rem;
    background-color: var(--input-color);
  }

  .second-input-enter-data{
    height: 50px;
    width: 100%;
    padding: 0 20px 0 20px;
    border-radius: 8px;
    border: 2px solid var(--border);
    box-sizing: border-box;
    font-size: 0.9rem;
    background-color: var(--input-color);
  }
  .principalButton{
    border-radius: 8px;
    color:white;
    background-color:var(--blue);
    text-align:center;
    border:none;
    height:50px;
    font-size: 1.1rem;
    cursor:pointer;
    box-shadow: 0 2px 4px 1px rgb(0 0 0 / 0.25);
  }

    .secondButton{
    border-radius: 8px;
    color:white;
    background-color:white;
    text-align:center;
    border:2px solid var(--blue);
    height:50px;
    font-size: 1.1rem;
    cursor:pointer;
    box-shadow: 0 2px 4px 1px rgb(0 0 0 / 0.25);
    color: var(--blue)
  }

  .product-individual{
    background-color: white;
    max-width: fit-content;
    border-radius: 5px;
    border: 1px solid var(--input-text-color);
  }

  .shop-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 90%;
    background-color: var(--green);
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    height: 50px;
    text-transform: uppercase;
    font-size: 1rem;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
    transition: 200ms all;
  }

  .shop-button:hover{
    transform: scale(105%);
    cursor:pointer;
  }
`;
