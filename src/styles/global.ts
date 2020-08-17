import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font-family: 'Roboto Slab';
  }

  button {
    cursor: pointer;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px #fff inset !important;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: #666360 !important;
  }

  ul {
    list-style: none;
  }
`;
