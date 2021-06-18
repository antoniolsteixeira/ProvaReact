import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  img {
    width: 400px;
  }
`;

export const Form = styled.form`
  width: 500px;
  margin: 30px auto 0;

  display: flex;
  flex-direction: column;

  input {
    border: 2px solid;
    margin-top: 2px;

    ::placeholder {
      color: #4983b0;
    }

    padding: 5px;
  }

  button {
    margin: 0 auto;
    margin-top: 10px;
    background-color: #4983b0;

    border-radius: 5px;

    border: 2px solid;

    width: 100px;
  }
`;

export const Cadastro = styled.div`
  margin: 0 auto;
  width: 500px;

  ul li {
    padding: 20px;
    display: flex;
    flex-direction: column;

    border: 2px dashed black;

    background-color: #f8f8ff;

    color: #4983b0;

    margin-top: 10px;

    strong {
      color: black;
    }
  }

  input {
    width: 320px;
  }

  a {
    background: #4983b0;
    text-decoration: none;
    margin-top: 7px;

    width: 60px;
    padding: 5px;

    a:hover {
      background-color: #4983b0;
    }
  }

  div {
    display: flex;
    flex-direction: row;

    h1 {
      margin-left: 3px;
    }

    button {
      margin-top: 4px;
      font-size: 13px;

      padding: 5px;

      background-color: #4983b0;
      border-radius: 5px;
      border: 2px dashed;
      width: 50px;

      & + button {
        margin-left: 10px;
      }
    }

    a {
      margin-top: 4px;
      font-size: 13px;
      margin-left: 3px;

      padding: 5px;

      background-color: #4983b0;
      border-radius: 5px;
      border: 2px dashed black;

      text-decoration: none;

      color: black;
    }
  }
`;
