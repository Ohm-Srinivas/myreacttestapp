import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Registration.css";

// Validation schema
const schema = yup.object().shape({
  role: yup.string().required("Role is required"),
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobile: yup
    .string()
    .matches(/^[0-9]{10}$/, "Enter valid 10-digit number")
    .required("Mobile number is required"),
  candidateId: yup.string().required("Candidate ID is required"),
  landType: yup.string().required("Please select land type"),
  acres: yup.string().when("landType", {
    is: (val) => val && val.length > 0,
    then: (schema) => schema.required("Acres is required"),
  }),
  subAcres: yup.string().when("landType", {
    is: (val) => val && val.length > 0,
    then: (schema) => schema.required("Sub Acres is required"),
  }),
  address: yup.string().required("Address is required"),
  state: yup.string().required("State is required"),
  district: yup.string().required("District is required"),
  mandal: yup.string().required("Mandal is required"),
  city: yup.string(),
  village: yup.string().required("Village is required"),
  aadhar: yup
    .string()
    .matches(/^[0-9]{12}$/, "Enter valid 12-digit Aadhar number")
    .required("Aadhar is required"),
  pan: yup
    .string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Enter valid PAN number")
    .required("PAN is required"),
});

// Mock state → district → mandal data
const indiaData = {
  Telangana: {
    Hyderabad: ["Shaikpet", "Serilingampally", "Ameerpet"],
    Warangal: ["Hanamkonda", "Kazipet"],
  },
  Karnataka: {
    Bengaluru: ["Yelahanka", "Hebbal"],
    Mysuru: ["Krishnaraja", "Nanjangud"],
  },
};

export default function Registration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const landType = watch("landType");

  const onSubmit = (data) => {
    console.log("Form submitted ✅:", data);
    setShowPopup(true);

    setTimeout(() => {
      reset();
    }, 100);
  };

  return (
    <div className="reg-page">
      <div className="reg-card">
        <h2 className="reg-title">🌱 Role-Based Registration</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="reg-grid">
          {/* Role */}
          <div className="reg-field">
            <label>Role</label>
            <select {...register("role")}>
              <option value="">-- Select Role --</option>
              <option value="DAO">District Agricultural Officer (DAO)</option>
              <option value="ATMA">ATMA</option>
              <option value="Farmer">Farmer</option>
            </select>
            <p className="reg-error">{errors.role?.message}</p>
          </div>

          <div className="reg-field">
            <label>Name</label>
            <input type="text" {...register("name")} maxLength="25" />
            <p className="reg-error">{errors.name?.message}</p>
          </div>

          <div className="reg-field">
            <label>Email</label>
            <input type="email" {...register("email")} maxLength="25" />
            <p className="reg-error">{errors.email?.message}</p>
          </div>

          <div className="reg-field">
            <label>Mobile</label>
            <input type="text" {...register("mobile")} maxLength="10" />
            <p className="reg-error">{errors.mobile?.message}</p>
          </div>

          <div className="reg-field">
            <label>Candidate ID</label>
            <input type="text" {...register("candidateId")} />
            <p className="reg-error">{errors.candidateId?.message}</p>
          </div>

          <div className="reg-field">
            <label>Land Type</label>
            <select {...register("landType")}>
              <option value="">-- Select --</option>
              <option value="Cultivated">Cultivated Land</option>
              <option value="Non-Cultivated">Non-Cultivated Land</option>
            </select>
            <p className="reg-error">{errors.landType?.message}</p>
          </div>

          {landType && (
            <>
              <div className="reg-field">
                <label>Acres</label>
                <input type="number" {...register("acres")} />
                <p className="reg-error">{errors.acres?.message}</p>
              </div>
              <div className="reg-field">
                <label>Sub Acres</label>
                <input type="text" {...register("subAcres")} />
                <p className="reg-error">{errors.subAcres?.message}</p>
              </div>
            </>
          )}

          <div className="reg-field">
            <label>Address</label>
            <input type="text" {...register("address")} />
            <p className="reg-error">{errors.address?.message}</p>
          </div>

          <div className="reg-field">
            <label>State</label>
            <select
              {...register("state")}
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">-- Select State --</option>
              {Object.keys(indiaData).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <p className="reg-error">{errors.state?.message}</p>
          </div>

          <div className="reg-field">
            <label>District</label>
            <select
              {...register("district")}
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="">-- Select District --</option>
              {selectedState &&
                Object.keys(indiaData[selectedState]).map((dist) => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                ))}
            </select>
            <p className="reg-error">{errors.district?.message}</p>
          </div>

          <div className="reg-field">
            <label>Mandal</label>
            <select {...register("mandal")}>
              <option value="">-- Select Mandal --</option>
              {selectedDistrict &&
                indiaData[selectedState][selectedDistrict].map((mandal) => (
                  <option key={mandal} value={mandal}>
                    {mandal}
                  </option>
                ))}
            </select>
            <p className="reg-error">{errors.mandal?.message}</p>
          </div>

          <div className="reg-field">
            <label>Village</label>
            <input type="text" {...register("village")} />
            <p className="reg-error">{errors.village?.message}</p>
          </div>

          <div className="reg-field">
            <label>Aadhar</label>
            <input type="text" {...register("aadhar")} maxLength="12" />
            <p className="reg-error">{errors.aadhar?.message}</p>
          </div>

          <div className="reg-field">
            <label>PAN</label>
            <input type="text" {...register("pan")} maxLength="10" />
            <p className="reg-error">{errors.pan?.message}</p>
          </div>

          <div className="reg-actions">
            <button type="submit">🚀 Register</button>
          </div>
        </form>
      </div>

      {showPopup && (
        <div className="reg-popup">
          <div className="reg-popup-content">
            <h3>✅ Registration Successful!</h3>
            <p>Your registration has been submitted successfully.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
