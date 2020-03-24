import React from "react";
import {connect} from 'react-redux'
import registerAction from "actions/registerAction"

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
  Col
} from "reactstrap";
class Register extends React.Component {
  state={
    name:"",
    email:"",
    password:""
  }
onChange=(stateName,value) => {
  this.setState({
    [stateName]:value
  }) 
}

  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Registro temporal</small>
              </div>
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input placeholder="Name" type="text" onChange={
                      e=>this.onChange("name", e.target.value)
                    } />

                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" onChange={
                      e=>this.onChange(
                        "email", e.target.value
                      )
                    } 
                    autoComplete="new-email"/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" autoComplete="new-password"
                    onChange={
                      e=>this.onChange(
                        "password",e.target.value
                      )
                    } />
                  </InputGroup>
                </FormGroup>
                
                
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button"
                  onClick={
                    ()=>this.props.registerAction(
                      this.state.name, this.state.email,this.state.password
                    )
                  } >
                    Crear cuenta
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}
const mapStateToProps=
state=>({
  ...state
});

const mapDispatchToProps=
dispatch=>({
  registerAction:
  (name,email,password)=>
  dispatch(registerAction(
    name, email, password
  ))

})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
