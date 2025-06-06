import React from "react";

import axios from "axios";
import { Jumbotron } from "./migration";
<<<<<<< HEAD
=======
import { about } from "../../editable-stuff/config";
>>>>>>> d04f68f (Initial commit)

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
  // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);



  return (
    <Jumbotron id="aboutme" className="m-0">
<<<<<<< HEAD
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <img
              className="border border-secondary rounded-circle"
=======
      <div className="container row aboutme-swap">
        <div className="col-5 align-self-center d-flex justify-content-center aboutme-dropwhitespace">
          {showPic && (
            <img
              className="border border-secondary rounded-circle aboutme-icon"
>>>>>>> d04f68f (Initial commit)
              src={profilePicUrl}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-center">{message}</p>
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>
<<<<<<< HEAD
=======
      {/* <br/>
      <br/>
      <br/> */}
      <div className="container row mt-5 aboutme-dropwhitespace">
        <p className="lead text-center" style={{ whiteSpace: 'pre-line' }}>{about.extraMessage}</p>
      </div>
>>>>>>> d04f68f (Initial commit)
    </Jumbotron>
  );
};

<<<<<<< HEAD
export default AboutMe;
=======
export default AboutMe;
>>>>>>> d04f68f (Initial commit)
