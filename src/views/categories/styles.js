import styled from "styled-components";
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
export const Th = styled.th`
  text-align: left;
  padding: 8px;
  border: 1px solid #ddd;
`;
export const Td = styled.td`
  text-align: left;
  padding: 8px;
  border: 1px solid #ddd;
`;

export const Row = styled.div`
  display:flex;
  gap:60px;
  text-align: left;
  padding: 8px;
  color: hsla(0,0%,100%,.7);
  align-items: center;
  >p{
    min-width: 400px;
  }
`;

export const SubTitle = styled.p`
   color: hsla(0,0%,100%,.7);
  font-size: 20px;
  font-wheit:400;
  `


  export const Title = styled.p`
   color: hsla(0,0%,100%,.7);
  font-size: 30px;
  font-wheit:700;
  `

  export const BoxList = styled.div`
  background-color: #27293D;
  border-radius: 15px;
  padding: 1rem;
`;



export const Scroll = styled.div`
overflow-y: scroll;
max-height 400px;
height: 400px;
&::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
}
`;



export const BoxEdit = styled.div`
  background-color: #1A1A29;
  border-radius: 15px;
  padding: 0.5rem;
  width: 60%;
  gap: 10px;
`;

export const RowInputs = styled.div`
  display:flex;
  gap:7px;
  >input{
    border-radius:5px;
    height:25px;
    font-wheit:700;
    font-size: 20px;
  }
`;

export const CustomHr = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid hsla(0,0%,100%,.3);
`;

export const RowActions = styled.div`
  display: flex;
    align-items: center;
    align-content: center;
    gap:10px;
  
`;

export const CustomAction = styled.button`
background-color:transparent;
border: none;
display: flex;
align-items: center;
align-content: center;
background-color:#1A1A29;
border-radius:7px;
color: ${(props) => props.color || 'white'};;
height: 30px;
min-width:100px;
gap:2px;
font-size:20px;
font-wheit:700;
cursor:pointer;
box-shadow: 2px 2px 5px ${(props) => props.color || '#0074E4'};
border: 1px solid ${(props) => props.color || '#0074E4'};
  >svg{
    font-size:19px
}

`;