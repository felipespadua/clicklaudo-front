import React, { Component } from "react";
import skrollr from "skrollr";
import "./LandingPageCover.css";
import Button from "@material-ui/core/Button";

class LandingPageCover extends Component {
  componentDidMount() {
    skrollr.init();
  }

  render() {
    return (
      <div>
        <div
          className="logocon"
          data-0="opacity: 1; display: flex"
          data-99="opacity: 0; display: none"
          data-100="display: none"
        >
          <div className="logo">
            <img src="/img/OnReport_roxo.svg" alt="" id="imageLaudos" />
          </div>
        </div>
        <div
          className="hint"
          data-0="bottom: 10vh"
          data-50="bottom:10vh"
          data-100="bottom: -85px"
        >
          <img src="/img/arrow-down.png" alt="" />
        </div>

        <div className="menu">
          <nav className="navigation navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="/landingPage">
                  <img
                    id="brand"
                    className="img-responsive"
                    alt="Brand"
                    src="/img/OnReport_roxo.svg"
                  />
                </a>
              </div>
              {/* ------------------------------------------------- */}
              <div>
                <a href="/login">
                  <button
                    href="/login"
                    id="navButton"
                    className="navbar-text navbar-right btn btn-info"
                  >
                    Login
                  </button>
                </a>

                <a href="/signup">
                  <button
                    href="/signup"
                    id="navButton"
                    className="navbar-text navbar-right btn btn-info"
                  >
                    SignUp
                  </button>
                </a>
              </div>
              {/* -------------------------------------------------- */}
            </div>
          </nav>
        </div>
        <div className="content">
          <div>
            {/* <!-- Header Banner --> */}
            <div className="intro-header">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="intro-message">
                      <h1 className="animated bounceInDown">
                        Crie e tenha total controle sobre seus laudos de exames.
                      </h1>

                      <ul
                        className="list-inline intro-social-buttons"
                        id="headerButton"
                      ></ul>
                      <div id="empty"> </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /.container --> */}
            </div>

            {/* <!-- Page Content --> */}

            {/* <!-- /.content-section-a --> --------------------------------------------------*/}

            <div className="content-section-a">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <div className="clearfix"></div>
                    <h2 className="section-heading">Agilidade</h2>
                    <hr className="section-heading-spacer" />
                    <div className="clearfix"></div>
                    <p className="lead">
                      O sistema OnReport permite laudar de forma extremamente
                      rápida e ao mesmo tempo segura, encurtando o tempo de
                      entrega dos resultados sem prejuízo da qualidade do laudo.
                    </p>
                  </div>
                  <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                    {/* <!-- /.image credit: simple.com --> */}

                    <img
                      className=" img-responsive"
                      src="/img/lukas-blazek-UAvYasdkzq8-unsplash.jpg"
                      id="responsive"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* <!-- /.container --> */}
            </div>
            {/* <!-- /.content-section-b --> */}

            <div className="content-section-b">
              <div className="container">
                <div className="row secb">
                  <div className="col-lg-5 col-sm-6">
                    <h2 className="section-heading">Rentabilidade</h2>
                    <hr className="section-heading-spacer" />
                    <div className="clearfix"></div>

                    <p className="lead">
                      O OnReport auxilia na agilidade da liberação, assim, sua
                      clínica não só terá um grande diferencial em relação à
                      concorrência, como terá um aumento significativo de renda.
                    </p>
                  </div>
                  <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img
                      className="img-responsive"
                      src="/img/pepi-stojanovski-MJSFNZ8BAXw-unsplash.jpg"
                      alt=""
                      id="responsive"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- /.container --> */}
            </div>
            {/* <!-- /.content-section-c --> */}

            <div className="content-section-c">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <h2 className="section-heading">Speech to Text</h2>

                    <hr className="section-heading-spacer" />
                    <div className="clearfix"></div>
                    <p className="lead">
                      O recurso mais renomado do OnReport é a funcionalidade
                      <strong> Speech to Text</strong> ,no qual o médico dita
                      para o sistema como o laudo deve ser preenchido. Assim o
                      profissional pode realizar a consulta e o laudo ao mesmo
                      tempo.
                    </p>
                  </div>
                  <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                    <img
                      className="img-responsive"
                      id="responsive"
                      src="https://static.pexels.com/photos/57825/pexels-photo-57825-medium.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* <!-- /.container --> */}
            </div>

            {/* <!-- /.content-section-d --> */}

            <div className="content-section-d">
              <div className="container">
                <div className="row secb">
                  <div className="col-lg-5 col-sm-6">
                    <h2 className="section-heading-white">Facilidade</h2>

                    <hr className="section-heading-spacer-white" />
                    <div className="clearfix"></div>
                    <p className="lead-white">
                      O sistema é preparado para o dia a dia dos médicos,
                      tornando-o imperativo e de fácil adaptação. Além de
                      permitir novas customizações.
                    </p>

                    {/* <button
                  href="#"
                  id="button-white"
                  className="animated bounceInUp btn btn-info btn-lg"
                >
                  {" "}
                  <span className="network-name">CRUNCH DEBT TODAY</span>
                </button> */}
                  </div>
                  <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img
                      className="phone img-responsive"
                      id="responsive"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/crunch_phone_%26_computer.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* <!-- /.container --> */}
            </div>

            {/* <!-- Footer --> */}
            <footer>
              <div className="container">
                <div className="row">
                  <p className="copyright text-muted small">
                    Copyright &copy; OnReport 2019. All Rights Reserved
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPageCover;
