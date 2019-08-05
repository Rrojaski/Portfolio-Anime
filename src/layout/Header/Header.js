import React, { Component } from "react";
import Head from "../../components/Head/Head";
import { Grid, Row, Col } from "react-flexbox-grid";
import Image from "../../components/Image/Image";
import Helmet from "../../images/Helmet.png";
import Menu from "../../images/Menu.png";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <Grid>
            <Row between="xs">
              <Col xs={6}>
                <Image sizex="40px" src={Helmet} />
              </Col>
              <Col xs={6}>
                <Row end="xs">
                  <Image sizex="30px" src={Menu} />
                </Row>
              </Col>
            </Row>
          </Grid>
        </Head>
      </React.Fragment>
    );
  }
}

export default Header;
