import React, { useState, useRef } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://script.google.com/macros/s/AKfycby1UTV7Q5er1A9wdrK9RifrbktusleUEjfxpgefEW-vvzksf6sZ3i0s-DNCGdEhyiS_/exec",
      {
        method: "POST",
        body: new FormData(formRef.current),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        alert(data.msg);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Application Form + Google Sheet</h1>
      <form onSubmit={handleSubmit} ref={formRef}>
        <TextField
          id="name"
          name="Name"
          label="Name"
          variant="outlined"
          required
          inputProps={{ autoCapitalize: "words" }}
          onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          id="email"
          name="Email"
          label="Email"
          variant="outlined"
          required
          onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          id="phone"
          name="Phone"
          label="Phone"
          variant="outlined"
          required
          onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          id="subject"
          name="Subject"
          label="Subject"
          variant="outlined"
          required
          onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          id="message"
          name="Message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          required
          onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <Button type="submit" variant="contained" sx={{ width: "100%", mb: 2 }}>
          Submit
        </Button>
      </form>
    </>
  );
};

export default Form;

//https://docs.google.com/spreadsheets/d/1sw05P-jFEtS1oDrjf3AVxmdmCZsP5Ums-C_kKCp-JyQ/edit#gid=0
