import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Form, Row, Col} from "react-bootstrap";
import '../css/LoginModal.css';

function LoginModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <div className="logoImg">
                <img src="/logo1.png"
                    className="logo"
                    width="40%"
                    alt="logo"
                />
            </div>

            <Form className="loginForm">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    로그인
                </Button>
            </Form>
            <p className="links">
                <span>비밀번호 찾기</span>
                <span>회원가입</span>
            </p>
        </Modal.Body>
        <Modal.Footer>
            <div className="slContainer" style={{width:"100%"}}>
                <span className="simpleLogin">간편 로그인</span>
            </div>
            <div className="simpleLoginIcons">
                <img src="/icons/5279111_social network_fb_social media_facebook logo_facebook_network_fb_facebook_fcb_social media_network_facebook logo.png"/>
                <img src="/icons/5279112_social media_insta_instagram logo_social network_instagram_camera.png"/>
                <img src="/icons/5279118_slack logo_communication_network_slack_chat.png"/>
                <img src="/icons/5279120_social media_youtuble logo_media_youtube_video_play.png"/>
                <img src="/icons/5279123_social network_tweet_twitter logo_social media_twitter.png"/>
            </div>
        </Modal.Footer>
      </Modal>
    );
  }

  export default LoginModal;