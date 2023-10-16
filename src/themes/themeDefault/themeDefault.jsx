
import { Children } from 'react';
import Sidebar from '../../views/sidebar/sidebar';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Container, ContentWrapper} from './styles'
import { useAppContext } from '../../global/contextGlobal';

function ThemeDefault({children}) {

  const { colors, screenSize } = useAppContext();
  return (
    <Container backgroundColor={colors.colorBackgroundTheme}>
        <ContentWrapper>
        {children}
        </ContentWrapper>
    </Container>
  );
}

export default ThemeDefault;
