import React, { useState } from 'react';
import { SidebarContainer, Tab, SubTab } from './styles';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { urls } from '../../configs/urls';
import { useAppContext } from '../../global/contextGlobal';

const Sidebar = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const { colors, screenSize } = useAppContext();
  return (
      <SidebarContainer isCollapsed={isCollapsed} background={colors.sideBarBackground} fontColor={colors.sideBarFontColor}>
        {urls.map((item, intex) => (
        <>
        
        <Link to="/cadastros" >
        <Tab background={colors.sideBarBackground} fontColor={colors.sideBarFontColor}>
             {item.name} 
        </Tab>     
        </Link>
        
        {item.subComponents?.map((subItem, index)=>(
            <>
            <Link to={subItem.to}>
              <SubTab background={colors.sideBarBackground} fontColor={colors.sideBarFontColor}> {subItem.name} </SubTab>
            </Link>
            </>

        ))}
        </>
        ))}
      </SidebarContainer>
  );
};

export default Sidebar;
