import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid black;
  background-color: rgb(40, 40, 40);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Adding = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
  h1 {
    font-family: serif;
    color: #ffa500;
  }
  input {
    outline: none;
    width: 300px;
    padding: 8px;
    margin-right: 5px;
    border-radius: 8px;
    border: none;
    background-color: black;
    color: white;
    font-family: serif;
    &:focus {
      border: 1px solid #ffa500;
    }
  }
  button {
    width: 60px;
    padding: 8px;
    border-radius: 8px;
    background-color: #ffa500;
    border: none;
    &:focus {
      background-color: #d69111;
    }
  }
  hr {
    width: 85%;
    border-radius: 10px;
    border: 1px solid #ffa500;
    margin-top: 20px;
  }
`;

export const TodoList = styled.div`
  width: 100%;
  height: 70%;
  li {
    display: flex;
    margin: 20px 0;
    border: 1px solid white;
    padding: 8px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 20px;
  }
  button {
    border: none;
    border-radius: 8px;
    outline: none;
    font-size: 16px;
    background-color: #ffa500;
    cursor: pointer;
  }
  input {
    outline: none;
    border: none;
    background-color: inherit;
    font-size: 15px;
    text-indent: 10px;
    color: white;
  }
`;
