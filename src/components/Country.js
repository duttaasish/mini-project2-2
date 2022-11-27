import React, { useState } from "react";
import "../styles/Country.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Country(props) {
  const currency = props.currency;
  const currencySymbol = currency ? Object.keys(currency)[0] : "";
  const currencyName = currencySymbol.length
    ? currency[currencySymbol].name
    : "-";
  const currencySymbol1 = currencySymbol.length
    ? currency[currencySymbol].symbol
    : "-";
  const currencyDetails = currencySymbol + "  -  " + currencySymbol1;

  const languages = props.languages;
  const languageNames = languages
    ? Object.values(languages).toString().split(",").join(", ")
    : "-";

  const countrycode = props.countrycode;
  const countryCode1 = Object.values(countrycode);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="countryDiv" onClick={handleShow}>
        <h4 className="countryName mt-3">{props.name}</h4>
        <img src={props.image} alt="Country Flag" />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modalDiv">
          <Modal.Title className="countryName2 mt-3">{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalDiv">
          <div>
            <img src={props.image} alt="Country Flag" />
            <h4> </h4>
            <h4> </h4>
            <table className="tableformat">
              <tbody>
                <tr>
                  <th className="thformat">Capital : </th>
                  <td className="tdformat">{props.capital}</td>
                </tr>
                <tr>
                  <th className="thformat">Continent : </th>
                  <td className="tdformat">{props.continents}</td>
                </tr>
                <tr>
                  <th className="thformat">Population : </th>
                  <td className="tdformat">{props.population}</td>
                </tr>
                <tr>
                  <th className="thformat">Currency Name: </th>
                  <td className="tdformat">{currencyName}</td>
                </tr>
                <tr>
                  <th className="thformat">Currency Symbol: </th>
                  <td className="tdformat">{currencyDetails}</td>
                </tr>
                <tr>
                  <th className="thformat">Language : </th>
                  <td className="tdformat">{languageNames}</td>
                </tr>
                <tr>
                  <th className="thformat">Time Zone : </th>
                  <td className="tdformat">{props.timezones}</td>
                </tr>
                <tr>
                  <th className="thformat">Sub-Region : </th>
                  <td className="tdformat">{props.subregion}</td>
                </tr>
                <tr>
                  <th className="thformat">Country Code : </th>
                  <td className="tdformat">{countryCode1}</td>
                </tr>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <Modal.Footer className="footerModal">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Country;
