import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import freelance from "./pic/freelance.png";
import enter from "./pic/enter.png";
import chat from "./pic/chat.png";
import workpro from "./pic/workpro.png";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function OptionsFreelance({ className }) {
  return (

    <div className={className}>
      <Container style={{ marginTop: 100 }}>


        <h1>Type For Freelance</h1>
        <p>สำหรับผู้ที่ต้องการหางานจากผู้ประกอบการ</p>
        <div className="optioncontainer">
          <Row>
            <Col md={3}>
              <Link to="/findjob" state={{ type: "develop" }}>
                <div className="options">
                  <h3>Develop</h3>
                </div>
              </Link>
            </Col>
            <Col md={3}>
              <Link to="/findjob" state={{ type: "graphic" }}>
                <div className="options">
                  <h3>Graphic</h3>
                </div>
              </Link></Col>
            <Col md={3}>
              <Link to="/findjob" state={{ type: "music" }}>
                <div className="options">
                  <h3>Music</h3>
                </div>
              </Link>
            </Col>
            <Col md={3}>
              <Link to="/FreelanceForm" state={{ type: "postf" }}>
                <div className="options">
                  <h3>Post for Enterprises</h3>
                </div>
              </Link>
            </Col>
          </Row>
        </div>


      </Container>
    </div>
  );
}

OptionsFreelance.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(OptionsFreelance)`
  text-align: center;
  h1{
    font-size: 45px;
    font-weight: bold;
  }
  h3{
    font-size: 25px;
    font-weight: bold;
    color:#FFF;
    margin: 20px;
    text-decoration: none;
  }
  p{
    font-size: 20px;
    color:#959595;
  }
  .optioncontainer{
    width: 80%;
    height: 40%;
    background: #FFF;
    position: absolute;
    display: flex;
    
  justify-content: left;
  flex-wrap:wrap;
   }
   .options{
    width: 270px;
    height: 190px;
    background: #0196FC;
    display: flex;
    margin: 20px;
    transition: all 0.2s;
    text-align: left;
   }
   .options:hover{
    cursor: pointer;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.5);
   }
.logo{
  max-width: 50px;
  max-height: 50px;
  margin: 20px;
  margin-top: 120px;
}
.logo2{
  max-width: 50px;
  max-height: 50px;
  margin-top: 120px;
  margin-right: 20px;
}
.logo3{
  max-width: 50px;
  max-height: 50px;
  margin-top: 120px;
  margin-left: 100px;
}
`;