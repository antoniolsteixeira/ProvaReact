import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;

  background: #fff;
  margin-top: 30px;

  h1 {
    margin-top: 30px;
  }
`;

export const BttVoltar = styled.div`
  a {
    margin-top: 15px;

    font-size: 18px;
    text-decoration: none;

    color: #4983b0;

    border: 2px dashed #4983b0;

    padding: 5px;
  }
`;

export const Title = styled.h1`
  color: #4983b0;

  font-size: 35px;
  margin-left: 55px;
`;

export const Tabela = styled.div`
  margin: 0 auto;
  width: 80px;

  ul li {
    padding: 20px;
    display: flex;
    flex-direction: column;

    border: 2px dashed black;

    background-color: #f8f8ff;

    color: #4983b0;

    margin-top: 10px;

    strong {
      color: #4983b0;
    }
  }

  input {
    width: 320px;
  }

  div {
    display: flex;
    flex-direction: row;

    h1 {
      margin-left: 3px;
    }
  }
`;
