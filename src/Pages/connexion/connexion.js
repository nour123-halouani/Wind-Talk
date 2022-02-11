import * as React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Media,
  Row,
} from "reactstrap";
import img from "../../mediaTools/inscriptionn.png";
import classes from "./connexion.module.scss";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Connexion() {
  return (
    <>
      <Container>
        <Row>
          <Col xl="6" className="d-none d-xl-block">
            <div
              className="justify-content-center"
              className={classes.coverImage}
            >
              <Media src={img} className={classes.image} />
            </div>
          </Col>
          <Col xl="6" className={classes.form}>
            <Form>
              <div className={classes.title}>
                <Label>
                  Sign <span className={classes.signColor}> In </span>
                </Label>
              </div>


              <FormGroup>
                <Label for="exampleEmail" className={classes.formLabel}>
                  {" "}
                  Email{" "}
                </Label>
                <Input
                  type="email"
                  placeholder=" ...@gmail.com"
                  id="exampleEmail"
                  // size="sm"
                />
                {/* <FormText>champ obligatoire </FormText> */}
              </FormGroup>
              <FormGroup>
                <Label for="password" className={classes.formLabel}>
                  {" "}
                  Password{" "}
                </Label>
                <Input type="password" placeholder="password" id="password" />
                <FormText> <Link to="/forgotPassword" className={classes.forgotPassword}> Forgot password?</Link> </FormText>
              </FormGroup>
              <FormGroup>
                <Button className={classes.firstButton} block>
                  Sign in
                </Button>
                <hr/> 

                <Button className={classes.secondButton} block>
                  <FcGoogle /> Continue with Google
                </Button>
              </FormGroup>
              <div className={classes.toSignUp}>
                You haven't an account?{" "}
                <Link to="/" className={classes.link}>
                  {" "}
                  Sign up here
                </Link>
              </div>

            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
