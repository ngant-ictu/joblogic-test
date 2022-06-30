import Head from "next/head";
import { ReactNode } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import HeroBanner from "../HeroBanner";
import {
  ListEmployeeStateProvider,
} from "../ListEmployeeState";
import SideLeft from "../sidebar";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <ListEmployeeStateProvider>
      <div>
        <Head>
          <title>The Godfather</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
        </Head>
        <WrapperContainer>
          <SideLeft></SideLeft>
          <MainContent>
            <HeroBanner />
            <Main>{children}</Main>
          </MainContent>
        </WrapperContainer>
      </div>
    </ListEmployeeStateProvider>
  );
};

export default Layout;

const WrapperContainer = styled.div`
  position: relative;
`;

const MainContent = styled.div`
  min-height: 100vh;
`;

const Main = styled.div`
  padding-left: 500px;
  min-height: calc(100vh - 200px);
  background: ${({theme}) => theme.colors.secondary}
`;
