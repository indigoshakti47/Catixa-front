
import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data3" 
    });
  };
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Estadísticas
                      </h6>
                      <h2 className="text-white mb-0">Satisfacción del cliente</h2>
                    </div>
                    <div className="col">
                      <Nav className="justify-content-end" pills>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 1
                            })}
                            href="#"
                            onClick={e => this.toggleNavs(e, 1)}
                          >
                            <span className="d-none d-md-block">Mes</span>
                            <span className="d-md-none">M</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 2
                            })}
                            data-toggle="tab"
                            href="#"
                            onClick={e => this.toggleNavs(e, 2)}
                          >
                            <span className="d-none d-md-block">Semana</span>
                            <span className="d-md-none">S</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 3
                            })}
                            data-toggle="tab"
                            href="#"
                            onClick={e => this.toggleNavs(e, 3)}
                          >
                            <span className="d-none d-md-block">Hour</span>
                            <span className="d-md-none">H</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Line
                      data={chartExample1[this.state.chartExample1Data]}
                      options={chartExample1.options}
                      getDatasetAtEvent={e => console.log(e)}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>







          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="7">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Estadísticas empleados</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                       Resetear
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Nombres</th>
                      <th scope="col">Apellidos</th>
                      <th scope="col"># Calificaciones</th>
                      <th scope="col">% Satisfacción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Nathalia</th>
                      <td>Avila</td>
                      <td>47</td>
                      <td>
                      <div className="d-flex align-items-center">
                          <span className="mr-2">75%</span>
                          <div>
                            <Progress
                              max="100"
                              value="75"
                              barClassName="bg-gradient-info"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Nathalia</th>
                      <td>Avila</td>
                      <td>47</td>
                      <td>
                      <div className="d-flex align-items-center">
                          <span className="mr-2">70%</span>
                          <div>
                            <Progress
                              max="100"
                              value="70"
                              barClassName="bg-gradient-success"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Nathalia</th>
                      <td>Avila</td>
                      <td>47</td>
                      <td>
                      <div className="d-flex align-items-center">
                          <span className="mr-2">70%</span>
                          <div>
                            <Progress
                              max="100"
                              value="70"
                              barClassName="bg-gradient-success"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Nathalia</th>
                      <td>Avila</td>
                      <td>47</td>
                      <td>
                      <div className="d-flex align-items-center">
                          <span className="mr-2">80%</span>
                          <div>
                            <Progress max="100" value="80" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Nathalia</th>
                      <td>Avila</td>
                      <td>47</td>
                      <td>
                      <div className="d-flex align-items-center">
                          <span className="mr-2">30%</span>
                          <div>
                            <Progress
                              max="100"
                              value="30"
                              barClassName="bg-gradient-warning"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>


            
            <Col xl="5">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Estadísticas en tiempo real</h3>
                    </div>
                    
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Apellido</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Nathalia</th>
                      <td>Avila</td>
                      <td>
                        <i className="fas fa-arrow-up text-success mr-3" />{" "}
                       Excelente
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Nathalia</th>
                      <td>Avila</td>
                      <td>
                      
                        <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                        Regular
                      
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Nathalia</th>
                      <td>Avila</td>
                      <td>
                      
                        <i className="fas fa-arrow-up text-success mr-3" />{" "}
                        Excelente
                      
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Nathalia</th>
                      <td>Avila</td>
                      <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                        Malo
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Nathalia</th>
                      <td>Avila</td>
                      <td>
                      
                        <i className="fas fa-arrow-up text-success mr-3" />{" "}
                        Excelente
                      
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
