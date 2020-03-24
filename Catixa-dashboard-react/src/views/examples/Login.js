
import React from "react";
import {connect} from "react-redux"
import loginAction from "actions/loginAction";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Login extends React.Component {
  state={
    email:"",
    password:""
  }
  onChange= (stateName, value)=>{
    this.setState({[stateName]:value})
  }
  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-5">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Para ingresar digite sus credenciales</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Correo" type="email" autoComplete="new-email" onChange={
                      e=>this.onChange(
                        "email",
                        e.target.value
                      )
                    }    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Contraseña" type="password" autoComplete="new-password"
                    onChange={
                      e=>this.onChange(
                        "password",
                        e.target.value
                      )
                    } />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Recordar</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button"
                    onClick={
                      ()=> {
                        this.props.loginAction(
                          this.state.email,
                          this.state.password
                        )
                    }}>
                    Ingresar
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#"
                onClick={e => e.preventDefault()}
              >
                <small>Olvidé contraseña</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}
const mapStateToProps= state => ({
    ...state
  });

const mapDispatchToProps= dispatch => ({
      loginAction:(email, password)=> 
      dispatch(
        loginAction(
          email, password
        )
      )
    });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
