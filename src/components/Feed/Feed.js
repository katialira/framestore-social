import { useEffect, useState } from "react";
import styled from "styled-components";
import frameTweets from "../../mocks/frameTweets";
import frameYouTubeVids from "../../mocks/youtubeVideos";

import Instagram from "../elements/icons/Instagram";
import FeedTweet from "./FeedTweet";
import FeedYoutube from "./FeedYoutube";

const FeedContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    display: block;
  }
`;

const AllElements = styled.div`
  width: 32%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Feed = () => {
  const [tweets, setTweets] = useState([]);
  const [youtubes, setYoutubes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((tweetsReturned) => {
        setTweets(tweetsReturned.data);
      });
    setYoutubes(frameYouTubeVids.items);
  }, []);

  return (
    <FeedContainer>
      <AllElements>
        {youtubes.map((youtube) => {
          return (
            <FeedYoutube key={youtube.id.videoId} video={youtube.snippet} />
          );
        })}
      </AllElements>
      <AllElements>
        {tweets.map((tweet) => {
          return <FeedTweet key={tweet.id} tweet={tweet} />;
        })}
      </AllElements>
      <AllElements>
        <Instagram />
      </AllElements>
    </FeedContainer>
  );
};

export default Feed;
