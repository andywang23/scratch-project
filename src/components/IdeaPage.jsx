import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/ideapage.scss';
import { Container, Col, Row, Button } from 'react-bootstrap';

const IdeaPage = (props) => {
  let { ideaID } = props;
  const [ideaData, setIdeaData] = useState({});
  const [interested, setInterested] = useState(false);
  ideaID = 32;

  useEffect(() => {
    getIdea();
  }, []);

  const getIdea = async () => {
    const res = await fetch(`/api/explore/${ideaID}`);
    const parsed = await res.json();
    setIdeaData(parsed);
  };

  const handleInterestClick = async () => {
    setInterested(true);
    //TODO: actually build out functionality to email/notify creator
  };

  if (!Object.keys(ideaData).length)
    return <Container id="idea-wrapper">Loading...</Container>;
  else if (ideaData.err)
    return <Container id="idea-wrapper">Could not load idea</Container>;

  let {
    name,
    description,
    why,
    when_start,
    when_end = null,
    who,
    creator_username,
    image,
    participants,
    techStacks,
    profilepic,
  } = ideaData;

  return (
    <Container id="idea-wrapper">
      <Row>
        <Col lg={7}>
          <h4>WHY</h4>
          <Container>{why}</Container>

          <h4>HOW</h4>
          <Container>
            <h6>Tech Stack</h6>
          </Container>
          <Container>
            <ul>
              {techStacks.map((stack, idx) => (
                <li key={idx}>{stack.name}</li>
              ))}
            </ul>
          </Container>

          <h4>WHEN</h4>
          <Container>
            <h6>Start Date: {when_start.substring(0, 10)}</h6>
            {when_end ? (
              <h6>End Date: {when_end.substring(0, 10)}</h6>
            ) : undefined}
          </Container>

          <h4>WHO</h4>
          <Container>
            <h6>Current Teammates - {who} Desired </h6>
            {/* TODO: MAKE EACH LI A LINK TO USER PROFILE */}
            <ul>
              <li className="unstyled-li">
                {/* TODO:CONVERT THE PROFILE PIC IN SCHEMA TO STRING */}
                <img className="prof-pic" src={profilepic} />
                {creator_username} (creator)
              </li>
              {participants.map((user, idx) => (
                <li key={idx} className="unstyled-li">
                  <img className="prof-pic" src={user.profilepic} />
                  {user.username}
                </li>
              ))}
            </ul>
          </Container>
        </Col>

        <Col lg={5}>
          <Row>
            <Col>
              <h4>{name}</h4>
              <Container>
                <h6>{description}</h6>
              </Container>
            </Col>
          </Row>
          <Row>
            <img className="mx-auto" id="idea-pic" src={image} />
          </Row>

          <Container>
            <Row className="mx-auto">
              {!interested ? (
                <Button
                  onClick={handleInterestClick}
                  variant="info"
                  className="m-2"
                >
                  I'm Interested!
                </Button>
              ) : (
                <Button disabled variant="info" className="m-2">
                  Idea Creator Notified!
                </Button>
              )}
            </Row>
            <Row className="mx-auto">
              <NavLink to="/explore">
                <Button variant="primary" className="m-2">
                  Back to Explore
                </Button>
              </NavLink>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default IdeaPage;
