import styled from "styled-components";
import LogIn from "../components/elements/LogIn";
import Feed from "../components/Feed/Feed";

const HomeView = ({ className }) => {
  return (
    <div>
      <LogIn />
      <Feed />
    </div>
  );
};

export default styled(HomeView)`
  height: 80vh;
  align-items: center;
`;
