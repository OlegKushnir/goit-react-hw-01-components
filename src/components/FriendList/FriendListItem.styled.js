import styled from 'styled-components';
export const List = styled.ul`
  width: 400px;
  list-style-type: none;
  -webkit-padding-start: 0;
  padding-inline-start: 0;
  margin: 0 auto;
`;
export const Item = styled.li`
  display: flex;
  background-color: white;
  box-shadow: 1px 2px 5px 0px rgba(85, 85, 85, 0.75);
  text-align: center;
  border-radius: 6px;
  margin-bottom: 5px;
  padding: 10px;
  padding-left: 20px;
`;

export const Status = styled.span`
background-color: ${({isOnline}) => {return isOnline ? "green" : "red";} };
display: block;
width: 20px;
height: 20px;
align-self: center;
border-radius: 50%;
margin-right: 20px;
`;

export const Title = styled.p`
font-size: 20px;
    color: black;
    font-weight: 700;
    margin-left: 25px;
`;
