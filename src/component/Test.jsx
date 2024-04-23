import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);

    try {
      const data = {
        // Collect form data into an object
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };
      const response = await axios.post(
        "https://sheet.best/api/sheets/fe82f7bd-6959-4146-abb2-e9c937c68e59",
        data
      ); // Send data to server
      console.log(response.data); // Log the response from the server
      setFormData({
        // Reset form data after successful submission
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  return (
    <div>
      <h1>Application Form</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          name="name"
          label="Name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          id="outlined-basic"
          name="email"
          label="Email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          id="outlined-basic"
          name="phone"
          label="Phone"
          variant="outlined"
          value={formData.phone}
          onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          id="outlined-basic"
          name="subject"
          label="Subject"
          variant="outlined"
          value={formData.subject}
          onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <TextField
          id="outlined-multiline-static"
          name="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          value={formData.message}
          onChange={handleChange}
          sx={{ width: "100%", mb: 2 }}
        />
        <Button type="submit" variant="contained" sx={{ width: "100%", mb: 2 }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
