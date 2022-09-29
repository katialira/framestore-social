import moment from "moment";
import styled from "styled-components";
import Youtube from "../elements/icons/Youtube";

const YoutubeContainer = styled.div`
  border: thin solid #eee;
  margin-bottom: 20px;
`;

const YoutubeText = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 0 10px;
`;

const YoutubeFooter = styled.div`
  padding: 10px;
  @media (max-width: 600px) {
    text-align: center;
  }
  img {
    max-width: 100%;
  }
`;

const FeedYoutube = ({ video }) => {
  var humanDate = moment(new Date(video.publishedAt), moment.ISO_8601);
  return (
    <YoutubeContainer>
      <YoutubeText>
        <Youtube />
        <p>{humanDate.format("MMM Do, YYYY")}</p>
      </YoutubeText>
      <YoutubeFooter>
        <p>{video.title}</p>
        <img src={video.thumbnails.medium.url} alt={video.title} />
      </YoutubeFooter>
    </YoutubeContainer>
  );
};

export default FeedYoutube;
