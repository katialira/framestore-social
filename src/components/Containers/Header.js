import styled from "styled-components";
import FramestoreFull from "../elements/icons/FramestoreFull";

const LogoH1 = styled.h1`
  margin-top: 13px;
  font-size: 26px;
  font-weight: 700;
  margin-left: 25px;
  @media (max-width: 600px) {
    font-size: 18px;
    margin-top: 9px;
  }
`;

const Header = ({ className }) => {
  return (
    <header className={className}>
      <FramestoreFull />
      <LogoH1>SOCIAL FEED</LogoH1>
    </header>
  );
};

export default styled(Header)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  img {
    border: thin solid red;
  }
`;
