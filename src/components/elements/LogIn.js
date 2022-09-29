import { useContext } from "react";
import styled from "styled-components";
import { FrameStoreContext } from "../../contexts/FrameStoreContext";

const Input = styled.input`
  padding: 10px;
  text-align: center;
  border: 2px solid rgb(49, 118, 200);
`;

const LogIn = ({ className }) => {
  const [frameStoreData, setFrameStoreData] = useContext(FrameStoreContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.secretWord.value === "frameStore") {
      setFrameStoreData({
        ...frameStoreData,
        isUserLoggedIn: true,
        borderColor: "#FA8072",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" name="secretWord" placeholder="secretWord" />
    </form>
  );
};

export default styled(LogIn)`
  background-color: rgb(85, 86, 90);
`;
