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
    border-bottom: 2px solid black;
    margin: 0;
    text-align: center;
`;

export const Body = styled.p`
    margin-top: 10;
    text-align: center;
    border-bottom: 2px solid black;
`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px;
    border-bottom: 2px solid black;
`;

export const TextArea = styled.textarea`
    height: 100px;
    border-radius: 5px;
    padding: 5px;
    border: 2px solid black
`;

export const Comment = styled.p`
    border: 2px solid black;
    border-radius: 20px
    margin: 20px;
    padding: 20px;
`;

export const Button = styled.button`
    padding: 5px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    background-color: #44874f;
`;

