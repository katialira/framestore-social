import moment from "moment";
import { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../../contexts/ThemeContext";
import Twitter from "../elements/icons/Twitter";

const TweetFooter = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 0 10px;
`;

const TweetContainer = styled.div`
  border: thin solid ${(props) => props.borderTheme};
  margin-bottom: 20px;
`;

const TweetText = styled.div`
  padding: 10px;
`;

const FeedTweet = ({ tweet }) => {
  const [themeColor] = useContext(ThemeContext);
  var humanDate = moment(new Date(tweet.created_at), moment.ISO_8601);
  return (
    <TweetContainer borderTheme={themeColor}>
      <TweetText>
        <p>{humanDate.format("MMM Do, YYYY")}</p>
        <p>{tweet.text}</p>
      </TweetText>
      <TweetFooter>
        <p>{tweet.source}</p>
        <Twitter />
      </TweetFooter>
    </TweetContainer>
  );
};

export default FeedTweet;
