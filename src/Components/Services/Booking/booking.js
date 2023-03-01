import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./booking.css";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default function Booking() {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Appointment Form Submitted Successfully
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {records.map((curElem) => {
              return (
                <div>
                  <h4 className="mb-4">Data Preview</h4>
                  <p>Name : {curElem.username}</p>
                  <p>Email : {curElem.email}</p>
                  <p>Phone no : {curElem.phone}</p>
                  <p>Chosen Service : {curElem.service}</p>
                  <p>Chosen Date : {curElem.date}</p>
                  <p>Chosen Time : {curElem.time}</p>
                  <p>Total Price : {Price.price}</p>
                  <p>Message For Us : {curElem.message}</p>
                </div>
              );
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="close" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  // const price_cal = () => {
  //   // var f_price;
  //   // if (document.getElementById("h_service :checked")) {
  //   //   f_price = 40;
  //   // } else {
  //   // }
  //   setuserBooking({price:"$40"});
  // };

  const [modalShow, setModalShow] = React.useState(false);
  const [Price, setPrice] = useState(
    {
      price:"$0"
    }
  )
  const [userBooking, setuserBooking] = useState({
    username: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [records, setRecords] = useState([]);
  const handleInput = (e) => 
  {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setuserBooking({ ...userBooking, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...userBooking, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);
    setuserBooking({
      username: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="header_div10">
        <Container>
          <h1>Book an Appointment</h1>
        </Container>
      </div>
      <div>
        <Container>
          <div className="row row_div9">
            <div className="col-lg-7 col-md-7 col-sm-10 col-xsm-12">
              <div className="O_div">
                <h2>Fill The Appointment Form</h2>
                <p>
                  You can book an appointment by filling out and submitting the
                  form below and we'll get back to you as soon as possible,
                  usually within 24 hours.
                </p>
              </div>

              <div className="b_form">
                <form onSubmit={handleSubmit} >
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-4 col-xsm-4 b_form1">
                      <label>Name</label>
                      <input
                        type="text"
                        id="name"
                        name="username"
                        autoComplete="off"
                        value={userBooking.username}
                        onChange={handleInput}
                        placeholder="Name"
                        required
                      />
                      <label>Phone</label>
                      <input
                        type="number"
                        id="phone"
                        name="phone"
                        autoComplete="off"
                        value={userBooking.phone}
                        onChange={handleInput}
                        placeholder="+012345678"
                        required
                      />

                      <label>Preferred Date</label>
                      <input
                        name="date"
                        value={userBooking.date}
                        onChange={handleInput}
                        type="date"
                        id="date"
                        required
                      />
                      <div className="h_service">
                        <input name="h_service" type="radio" id="h_service" onClick={() => setPrice({price:"$40"}) }/>{" "}
                        <label>In Clinic</label>
                      </div>
                      <div className="h_service">
                        <input name="h_service" type="radio" id="h_service" onClick={() => setPrice({price:"$80"}) }/>{" "}
                        <label>Home Service</label>
                      </div>

                      <label>Price $</label>
                      <input
                        name="price"
                        value={Price.price}
                        
                        id="price"
                        readOnly
                        placeholder="$"
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-xsm-4 b_form2">
                      <label>Email</label>
                      <input
                        type="text"
                        id="email"
                        autoComplete="off"
                        name="email"
                        value={userBooking.email}
                        onChange={handleInput}
                        placeholder="name@email.com"
                      />
                      <label>Service</label>
                      <select
                        name="service"
                        id="services_drop"
                        onChange={handleInput}
                        value={userBooking.service}
                      >
                        <option value="None">Select a Service</option>
                        <option
                          value="Cervical Traction"
                          
                        >
                          Cervical Traction
                        </option>
                        <option value="Sport Injuries">Sport Injuries</option>
                        <option value="Physiotherapy">Physiotherapy</option>
                        <option value="Osteoarthritis">Osteoarthritis</option>
                        <option value="Rheumatoid Arthritis">
                          Rheumatoid Arthritis
                        </option>
                        <option value="Nerve Impingement">
                          Nerve Impingement
                        </option>
                        <option value="Tendinitis">Tendinitis</option>
                        <option value="Edema">Edema</option>
                        <option value="Neuropathy">Neuropathy</option>
                      </select>
                      <label>Preferred Time</label>
                      <select
                        name="time"
                        id="time"
                        onChange={handleInput}
                        value={userBooking.time}
                      >
                        <option value="None">Select Time</option>
                        <option value="08:00 - 09:00">08:00 - 09:00</option>
                        <option value="09:00 - 10:00">09:00 - 10:00</option>
                        <option value="10:00 - 11:00">10:00 - 11:00</option>
                        <option value="11:00 - 12:00">11:00 - 12:00</option>
                        <option value="12:00 - 13:00">12:00 - 13:00</option>
                        <option value="13:00 - 14:00">13:00 - 14:00</option>
                        <option value="14:00 - 15:00">14:00 - 15:00</option>
                        <option value="15:00 - 16:00">15:00 - 16:00</option>
                        <option value="16:00 - 17:00">16:00 - 17:00</option>
                      </select>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-4 col-xsm-4 sub_btn">
                        <label style={{ marginTop: 20, fontSize: "18px" }}>
                          Message
                        </label>
                        <textarea
                          name="message"
                          autoComplete="off"
                          value={userBooking.message}
                          onChange={handleInput}
                          rows="8"
                          cols="100"
                          id="message"
                        ></textarea>
                        <button
                          type="submit"
                          id="submit"
                          onClick={() => setModalShow(true)}
                        >
                          Submit
                        </button>

                        {/* <Button
                          variant="primary"
                        >
                          Launch vertically centered modal
                        </Button> */}

                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>
                    </div>
                  </div>
                </form>
                {/* <div>
                  {records.map((curElem) => {
                    return (
                      <div>
                        <h4>Centered Modal</h4>
                            <p>{curElem.username}</p>
                            <p>{curElem.email}</p>
                            <p>{curElem.phone}</p>
                            <p>{curElem.service}</p>
                            <p>{curElem.message}</p>
                      </div>
                    );
                  })}
                </div> */}
              </div>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-4 col-xsm-4">
              <div className="timing_div8">
                <div className="title8">
                  <h2>Opening Hours</h2>
                </div>
                <div className="time8">
                  <Table>
                    <tr>
                      <td>Monday</td>
                      <td>07:00 - 17:00</td>
                    </tr>
                    <tr>
                      <td>Tuesday</td>
                      <td>07:00 - 17:00</td>
                    </tr>
                    <tr>
                      <td>Wednesday</td>
                      <td>07:00 - 17:00</td>
                    </tr>
                    <tr>
                      <td>Thursday</td>
                      <td>07:00 - 17:00</td>
                    </tr>
                    <tr>
                      <td>Friday</td>
                      <td>07:00 - 15:00</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>07:00 - 17:00</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td> --Closed</td>
                    </tr>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
