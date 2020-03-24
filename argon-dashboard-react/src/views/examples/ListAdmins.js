import React from "react"
import {
    Card,
    CardHeader,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Table,
    Container,
    Row,
  } from "reactstrap";


class ListAdmins extends React.Component {
    render(){
        return(
            <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        {/* Page content */}
            <Container className="mt--7" fluid>

            <Row className="mt-5">
            <div className="col">
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <h3 className="text-white mb-0">Mis usuarios</h3>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Restaurante</th>
                      <th scope="col">Nombres</th>
                      <th scope="col">Apellidos</th>
                      <th scope="col">Telefono</th>
                      <th scope="col">Correo</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <Media>
                            <span className="mb-0 text-sm">
                              Catixa 1
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>Nathalia</td>
                      <td>
                      <span className="mb-0 text-sm">
                            Avila Niño
                        </span>
                      </td>
                      <td>
                      <span className="mb-0 text-sm">
                            +3192993819
                        </span>
                      </td>
                      <td>
                      <span className="mb-0 text-sm">
                            mariaavni@unisabana.edu.co
                        </span>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#"
                              onClick={e => e.preventDefault()}
                            >
                              Editar
                            </DropdownItem>
                            <DropdownItem
                              href="#"
                              onClick={e => e.preventDefault()}
                            >
                              Eliminar
                            </DropdownItem>
                            
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          <Media>
                            <span className="mb-0 text-sm">
                              Catixa II
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>Nathalia</td>
                      <td>
                      <span className="mb-0 text-sm">
                            Avila Niño
                        </span>
                      </td>
                      <td>
                      <span className="mb-0 text-sm">
                            +3192993819
                        </span>
                      </td>
                      <td>
                      <span className="mb-0 text-sm">
                            mariaavni@unisabana.edu.co
                        </span>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#"
                              onClick={e => e.preventDefault()}
                            >
                              Editar
                            </DropdownItem>
                            <DropdownItem
                              href="#"
                              onClick={e => e.preventDefault()}
                            >
                              Eliminar
                            </DropdownItem>
                            
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          
                          <Media>
                            <span className="mb-0 text-sm">
                              Catixa III
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>Nathalia</td>
                      <td>
                      <span className="mb-0 text-sm">
                            Avila Niño
                        </span>
                      </td>
                      <td>
                      <span className="mb-0 text-sm">
                            +3192993819
                        </span>
                      </td>
                      <td>
                      <span className="mb-0 text-sm">
                            mariaavni@unisabana.edu.co
                        </span>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#"
                              onClick={e => e.preventDefault()}
                            >
                              Editar
                            </DropdownItem>
                            <DropdownItem
                              href="#"
                              onClick={e => e.preventDefault()}
                            >
                              Eliminar
                            </DropdownItem>
                            
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          
                          <Media>
                            <span className="mb-0 text-sm">
                              Catixa IV
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>Nathalia</td>
                      <td>
                      <span className="mb-0 text-sm">
                            Avila Niño
                        </span>
                      </td>
                      <td>
                      <span className="mb-0 text-sm">
                            +3192993819
                        </span>
                      </td>
                      <td>
                      
                      <span className="mb-0 text-sm">
                            mariaavni@unisabana.edu.co
                        </span>
                      </td>
                      
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#"
                              onClick={e => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#"
                              onClick={e => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#"
                              onClick={e => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <Media className="align-items-center">
                          
                          <Media>
                            <span className="mb-0 text-sm">
                              Catixa V
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>Nathalia</td>
                      <td>
                      <span className="mb-0 text-sm">
                            Avila Niño
                        </span>
                      </td>
                      <td>
                        <span className="mb-0 text-sm">
                            +3192993819
                        </span>
                      </td>
                      <td>
                      <span className="mb-0 text-sm">
                            mariaavni@unisabana.edu.co
                        </span>
                      </td>
                
        
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#"
                            role="button"
                            size="sm"
                            color=""
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#"
                              onClick={e => e.preventDefault()}
                            >
                              Editar
                            </DropdownItem>
                            <DropdownItem
                              href="#"
                              onClick={e => e.preventDefault()}
                            >
                              Eliminar
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
            </Container>
            </>

        )
    }

}

export default ListAdmins;