import { Badge } from "@mui/material";
import { img_300, unavailable } from "../../configuration/configuration";
import ContentModal from "../ContentModal/ContentModal";
import "./SingleContent.css";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className={poster}
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span>{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;

//About the image --> Whenever we display an image from movidb we have to append it to this string (image links from the configuratin file).
