import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: ${(props) => (props.isCollapsed ? '60px' : '200px')};
  height: 100vh;
  background-color: ${(props) => (props.background ||'')};
  color: ${(props) => (props.fontColor ||'')};;
  transition: width 0.3s;
  >a{
    text-decoration: none;
  }
`;

export const Tab = styled.div`
  padding: 10px;
  cursor: pointer;
  color: ${(props) => (props.fontColor ||'')};
  &:hover {
    background-color: #555;
  }
  &:hover {
    background-color: #555;
  }

  &:active {
    background-color: transparent; // Ou a mesma cor de fundo normal
  }
`;

export const SubTab = styled.div`
  padding: 5px 20px;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => (props.fontColor ||'')};
  &:hover {
    background-color: #555;
  }
`;
export const ParentTab = styled.div`
  padding: 10px;
  background-color: #222;
  user-select: none;
  cursor: pointer;
`;