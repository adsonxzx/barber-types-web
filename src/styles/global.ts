import { createGlobalStyle } from 'styled-components';
import 'react-day-picker/lib/style.css';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    &.modal-open {
      overflow: hidden;
    }
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

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .Toastify {
    .Toastify__toast {
      border-radius: 4px;
    }
  }

  @media (max-width: 414px) {
    .Toastify {
      .Toastify__toast-container {
        width: 320px;
        top: 10px;
        transform: translate(-50%, 0);
        left: 50%;
      }
    }
  }
`;
