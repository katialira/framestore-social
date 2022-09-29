import { useContext } from "react";
import styled from "styled-components";
import { FrameStoreContext } from "../../contexts/FrameStoreContext";
import FramestoreFull from "../elements/icons/FramestoreFull";

const LogoH1 = styled.h1`
  margin-top: 13px;
  font-size: 26px;
  font-weight: 700;
  margin-left: 25px;
  color: ${(props) => (props.logged ? "#0075C9" : "#999")};
  @media (max-width: 600px) {
    font-size: 18px;
    margin-top: 9px;
  }
`;

const Header = ({ className }) => {
  const [frameStoreData] = useContext(FrameStoreContext);
  return (
    <header className={className}>
      <FramestoreFull />
      <LogoH1 logged={frameStoreData.isUserLoggedIn}>SOCIAL FEED</LogoH1>
    </header>
  );
};

export default styled(Header)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
