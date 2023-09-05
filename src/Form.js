import { Button, Form } from "react-bootstrap";
import { axiosWithAuth } from "./api";
import { useHistory, useLocation } from "react-router-dom";
import { Input, Label } from "reactstrap";
import { useState } from "react";
function MyForm() {
  const initalData = { name: "deneme", password: "Yapıyorum" };
  const history = useHistory();
  const location = useLocation();
  const [loginData, setLoginData] = useState(initalData);

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth().post("login", loginData);
    console
      .log("LoginData=>", loginData)

      .then((res) => {
        const token = res.data.token;
        console.log("response", res);
        localStorage.setItem("token", token);
        history.push(location.state.referrer);
      });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          USERNAME <hr />
          <Input></Input>
        </Label>
        <hr />

        <Label>
          PASSWORD <hr />
          <Input></Input>
        </Label>
        <hr />
        <Button class="btn btn-dark btn-lg" type="submit"></Button>
      </Form>
    </>
  );
}
export default MyForm;
