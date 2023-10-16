import styled from 'styled-components';
const larguraDaTela = window.innerWidth;

export const Container = styled.main`
  width: ${larguraDaTela - 200}px;
  background-color:${(props) => (props.backgroundColor ||'')}; ;
  transition: width 0.3s;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  
`;

export const ContentWrapper = styled.div` 
    width:98%;
    margin: auto;
    height: 96%;
    border-radius:20px;
`;