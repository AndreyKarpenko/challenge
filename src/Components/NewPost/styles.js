import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 20px
    margin: 20px;
    background-color: #e0e2e5;
    padding: 20px
`;

export const Title = styled.h1`
    margin: 0;
    text-align: center;
`;

export const ErrorMessage = styled.p`
    color: #ff0000;
    text-align: center
`;

export const Input = styled.input`
    padding: 5px;
    border-radius: 5px;
    border: 2px solid black
`;

export const TextArea = styled.textarea`
    height: 100px;
    border-radius: 5px;
    padding: 5px;
    border: 2px solid black
`;

export const Label = styled.label`
    padding: 10px
`;

export const Button = styled.button`
    padding: 5px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    background-color: #44874f;
`;