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
import classes from "./forgotPassword.module.scss";

export default function Forgot_password() {
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
                  Forgot <span className={classes.signColor}> Password </span>
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
                />
              </FormGroup>
              <FormGroup>
                <Button className={classes.button} block>
                  Find my account
                </Button>

              </FormGroup>  

            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
