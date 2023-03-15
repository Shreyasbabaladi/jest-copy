import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Form,
  Button,
} from "reactstrap";
import InputputControler from "../components/InputputControler";
import { JestCopy } from "../Context";

const FormPage = () => {
  //using context data and setData
  const { data, setData } = useContext(JestCopy);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    linkedin: "",
    github: "",
    portfolio: "",
    designation: "",
    coverLetter: "",
  });

  useEffect(() => {
    console.log("from useEffect is call");
    if (Object.keys(data).length !== 0) {
      setFormData(data);
    }
  }, []);

  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    linkedin,
    portfolio,
    github,
    designation,
    coverLetter,
  } = formData;

  const handelOnChange = (name) => (event) => {
    setFormData(() => ({ ...formData, [name]: event.target.value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  const pagechange = () => {
    setData(formData);
    navigate("/data");
  };
  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Row xs="1" md="2">
          <Col>
            <InputputControler
              type={"text"}
              value={firstName}
              textLable={"First Name"}
              placeholder={"Enter your first name"}
              handelOnChange={handelOnChange("firstName")}
            />
          </Col>
          <Col>
            <InputputControler
              type={"text"}
              value={lastName}
              textLable={"Last Name"}
              placeholder={"Enter your last name"}
              handelOnChange={handelOnChange("lastName")}
            />
          </Col>
          <Col>
            <InputputControler
              type={"email"}
              value={email}
              textLable={"Email"}
              placeholder={"Enter your email"}
              handelOnChange={handelOnChange("email")}
            />
          </Col>
          <Col>
            <InputputControler
              type={"number"}
              value={phoneNumber}
              textLable={"Phone Number"}
              placeholder={"Enter your Phone Number"}
              handelOnChange={handelOnChange("phoneNumber")}
            />
          </Col>
        </Row>
        <InputputControler
          type={"text"}
          value={designation}
          textLable={"Designation"}
          placeholder={""}
          handelOnChange={handelOnChange("designation")}
        />
        <InputputControler
          type={"url"}
          value={github}
          textLable={"GitHub"}
          placeholder={"URL"}
          handelOnChange={handelOnChange("github")}
        />
        <InputputControler
          type={"url"}
          value={linkedin}
          textLable={"Linkedin"}
          placeholder={"URL"}
          handelOnChange={handelOnChange("linkedin")}
        />
        <InputputControler
          type={"url"}
          value={portfolio}
          textLable={"Portfolio "}
          placeholder={"URL"}
          handelOnChange={handelOnChange("portfolio")}
        />

        <FormGroup row>
          <Label for="coverLetter">Cover letter</Label>
          <Col sm={10}>
            <Input
              value={coverLetter}
              name="coverLetter"
              type="textarea"
              onChange={handelOnChange("coverLetter")}
            />
          </Col>
        </FormGroup>

        <Button color="primary" onClick={pagechange}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default FormPage;
