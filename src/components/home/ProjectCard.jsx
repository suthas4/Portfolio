<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
=======
import React, { useState, useEffect } from "react";
import { Col, Card, Button } from "react-bootstrap";
>>>>>>> d04f68f (Initial commit)
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
<<<<<<< HEAD
  } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
          {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />}
          <hr />
          {languages_url ? (
            <Language languages_url={languages_url} repo_url={svn_url} />
          ) : (
            <Skeleton count={3} />
          )}
          {value ? (
            <CardFooter star_count={stargazers_count} repo_url={svn_url} pushed_at={pushed_at} />
          ) : (
            <Skeleton />
          )}
=======
    subtitle,
  } = value;

  return (
    <Col md={6} className="d-flex align-items-stretch">
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded w-100">
        <Card.Body className="d-flex flex-column">
          {/* Repo Name */}
          <Card.Title as="h5">{name || <Skeleton />}</Card.Title>

          {/* Optional Subtitle */}
          {subtitle && (
            <Card.Subtitle className="mb-2 text-muted">
              {subtitle}
            </Card.Subtitle>
          )}

          {/* Description */}
          <Card.Text className="flex-grow-1">
            {description ? description : <Skeleton count={3} />}
          </Card.Text>

          {/* Action Buttons */}
          <div className="mt-auto text-center">
            {svn_url && (
              <Button
                variant="outline-dark"
                href={svn_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <i className="fab fa-github"></i> Repo
              </Button>
            )}
            {value.link && (
              <Button
                variant="outline-dark"
                href={value.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                {value.extraDesc ? value.extraDesc : "Learn More"}
              </Button>
            )}
          </div>
>>>>>>> d04f68f (Initial commit)
        </Card.Body>
      </Card>
    </Col>
  );
};

<<<<<<< HEAD
const CardButtons = ({ svn_url }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      <a
        href={`${svn_url}/archive/master.zip`}
        className="btn btn-outline-secondary mx-2"
      >
        <i className="fab fa-github" /> Clone Project
      </a>
      <a href={svn_url} target=" _blank" className="btn btn-outline-secondary mx-2">
        <i className="fab fa-github" /> Repo
      </a>
    </div>
  );
};

const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.length
        ? array.map((language) => (
          <a
            key={language}
            className="card-link"
            href={repo_url + `/search?l=${language}`}
            target=" _blank"
            rel="noopener noreferrer"
          >
            <span className="badge bg-light text-dark">
              {language}:{" "}
              {Math.trunc((data[language] / total_count) * 1000) / 10} %
            </span>
          </a>

        ))
        : "code yet to be deployed."}
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="card-text">
      <a
        href={repo_url + "/stargazers"}
        target=" _blank"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <i className="fab fa-github" /> Stars{" "}
          <span className="badge badge-dark">{star_count}</span>
        </span>
      </a>
      <small className="text-muted">Updated {updated_at}</small>
    </p>
  );
};

=======
>>>>>>> d04f68f (Initial commit)
export default ProjectCard;
