import * as React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Media,
  Row,
} from "reactstrap";
import img from "../../mediaTools/inscriptionn.png";
import classes from "./inscription.module.scss";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Inscription() {
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
                {" "}
                <Label>
                  Sign <span className={classes.signColor}> Up </span>
                </Label>
              </div>
              <FormGroup>
                <Label for="name" className={classes.formLabel}>
                  {" "}
                  Full name{" "}
                </Label>
                <Input
                  type="text"
                  placeholder=" Full name"
                  id="name"
                  // size="sm"
                />
                {/* <FormText>champ obligatoire </FormText> */}
              </FormGroup>

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
                {/* <FormText>champ obligatoire </FormText> */}
              </FormGroup>

              <FormGroup>
                <Label for="repeat password" className={classes.formLabel}>
                  {" "}
                  Repeat password{" "}
                </Label>
                <Input
                  type="password"
                  placeholder=" Repeat password"
                  id="repeat password"
                />
                {/* <FormText>champ obligatoire </FormText> */}
              </FormGroup>
              <FormGroup>
                <Button className={classes.firstButton} block>
                  Sign up
                </Button>
                <Button className={classes.secondButton} block>
                  <FcGoogle /> Continue with Google
                </Button>
              </FormGroup>
              <div className={classes.toSignIn}>
                Already have an account?{" "}
                <Link to="/Connexion" className={classes.link}>
                  {" "}
                  Sign in here
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
