import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useReactToPrint } from "react-to-print";
import "./IDCard.css"; // same CSS file

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  registrationId: yup
    .string()
    .required("Registration ID is required"),  // ✅ Add this
  email: yup.string().email("Invalid email").required("Email is required"),
  mobile: yup
    .string()
    .matches(/^[0-9]{10}$/, "Mobile must be 10 digits")
    .required("Mobile number is required"),
  role: yup.string().required("Role is required"),
});

// Component
export default function Registration() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPopup, setShowPopup] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const cardRef = useRef();

  // For printing ID card only
  const handlePrint = useReactToPrint({
    content: () => cardRef.current,
  });

  const onSubmit = (data) => {
    setSubmittedData(data);
    setShowPopup(true);
    reset();
  };

  return (
    <div className="page-container">
      <div className="form-card">
        <h2 className="form-title">ID Card Issue Form</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          {/* Name */}
          <div className="field">
            <label>Name</label>
            <input {...register("name")} className="input" />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

           {/* Registration ID */}
          <div className="field">
            <label>Registration ID</label>
            <input {...register("registrationId")} className="input" />
            {errors.registrationId && <p className="error">{errors.registrationId.message}</p>}
          </div>

          {/* Email */}
          <div className="field">
            <label>Email</label>
            <input {...register("email")} className="input" />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          {/* Mobile */}
          <div className="field">
            <label>Mobile Number</label>
            <input {...register("mobile")} className="input" />
            {errors.mobile && <p className="error">{errors.mobile.message}</p>}
          </div>

          {/* Role Dropdown */}
          <div className="field">
            <label>Role</label>
            <select {...register("role")} className="input">
              <option value="">Select Role</option>
              <option value="Farmer">Farmer</option>
              <option value="Village Head">Village Head</option>
              <option value="Mandal Admin">Mandal Admin</option>
              <option value="District Admin">District Admin</option>
            </select>
            {errors.role && <p className="error">{errors.role.message}</p>}
          </div>

          <button type="submit" className="submit-btn">
            Click here to generate your ID Card
          </button>
        </form>
      </div>

      {/* Popup after submit */}
      {showPopup && submittedData && (
        <div className="popup">
          <div className="popup-content">
            <h3>✅ ID Card Generated</h3>
            <p>You can now download or print your ID Card.</p>

            {/* ID Card Preview */}
            <div className="id-card" ref={cardRef}>
              <div className="id-card-overlay">
                <strong>Name: </strong>{submittedData.name}
                <p><strong>Email:</strong> {submittedData.email}</p>
                <p><strong>ID Number:</strong> {submittedData.registrationId}</p>
                <p><strong>Mobile:</strong> {submittedData.mobile}</p>
                <p><strong>Role:</strong> {submittedData.role}</p>
              </div>
            </div>

            <div style={{ marginTop: "15px" }}>
              <button onClick={handlePrint} className="submit-btn">
                Print / Download ID Card
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="submit-btn"
                style={{ background: "#7d0707ff", marginLeft: "10px" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
