import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 80%
    border: 2px solid black;
    border-radius: 20px
    margin: 20px;
    background-color: #e0e2e5;
    padding: 20px
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px
`;

export const RedButton = styled.button`
    padding: 5px;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    background-color: #c62929;
    width: 20%
`;

export const GreenButton = styled.button`
    padding: 5px;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    background-color: #44874f;
    width: 20%
`;
export const BlueButton = styled.button`
    padding: 5px;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    background-color: #0000ff;
    width: 20%
`;

export const Title = styled.h1`
    margin: 0;
    text-align: center;
`;

