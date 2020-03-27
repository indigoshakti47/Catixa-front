
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

class Profile extends React.Component {
  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--9" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Registro de administradores</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Datos personales
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Restaurante
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Catixa I"
                              id="input-username"
                              placeholder="Nombre del restaurante"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Correo electrónico
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="Correo electrónico"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Nombres
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-first-name"
                              placeholder="Nombres"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Apellidos
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-last-name"
                              placeholder="Apellidos"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row> 
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Información de contacto
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Dirección
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-address"
                              placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Ciudad
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-city"
                              placeholder="Ciudad"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              País
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-country"
                              placeholder="País"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Telefono
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-postal-code"
                              placeholder="Telefono"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">Notas adicionales</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <Input
                          className="form-control-alternative"
                          placeholder="Información extra que deseas agregar"
                          rows="3"
                          type="textarea"
                        />
                      </FormGroup>
                    </div>
                  </Form>
                  <div className="text-center">
                  <Button className="my-4" color="primary" type="button"
                    onClick={
                      e=> e.preventDefault()
                      }>
                    Crear Usuario
                  </Button>
                </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile; 
