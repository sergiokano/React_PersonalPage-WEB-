import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  let navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  useEffect(() => {
    if (!data.name || !data.email || !data.subject || !data.message) {
      setMessage("Please, fill the fields");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  }, [data]);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "Sending data..." +
        data.name +
        " " +
        data.phone +
        " " +
        data.subject +
        " " +
        data.message
    );
    localStorage.setItem("reserva", JSON.stringify(data));
    clearState();
    setTimeout(() => {
      navigate("/");
    }, 3000);
    setVisible(false);
  };

  return (
    <>
      <div>Book a table</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name here"
          value={data.name}
          onChange={handleInputChange}
          name="name"
        />
        <br />
        <input
          type="text"
          placeholder="Your email here"
          value={data.email}
          onChange={handleInputChange}
          name="email"
        />
        <br />
        <input
          type="text"
          placeholder="The message subject here"
          value={data.subject}
          onChange={handleInputChange}
          name="subject"
        />
        <br />
        <textarea
          rows="4"
          value={data.message}
          onChange={handleInputChange}
          placeholder="Your message here"
          cols="50"
          name="message"
          form="usrform"
        ></textarea>
        {/* <input
          type="text"
          placeholder="Put the booking message here"
          value={data.message}
          onChange={handleInputChange}
          name="message"
        /> */}
        <p>
          <button type="submit" disabled={btnDisabled}>
            Send
          </button>
        </p>
      </form>
      <p>{visible ? message : "Thanks for choosing theKano delicatesen :)"}</p>
    </>
  );
};

export default Contact;
