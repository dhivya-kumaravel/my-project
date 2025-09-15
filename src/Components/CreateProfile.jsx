import React, { useState } from "react";

export default function CreateProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    password: "",
    confirmPassword: "",
    resume: null,
    education: [{ degree: "", institution: "", year: "" }],
    experience: [{ title: "", company: "", startDate: "", endDate: "", years: "" }],
  });

  const [showEducation, setShowEducation] = useState(true);
  const [showExperience, setShowExperience] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleArrayChange = (e, index, field, section) => {
    const updatedArray = [...formData[section]];
    updatedArray[index][field] = e.target.value;
    setFormData({ ...formData, [section]: updatedArray });
  };

  const addEntity = (section) => {
    const newEntry =
      section === "education"
        ? { degree: "", institution: "", year: "" }
        : { title: "", company: "", startDate: "", endDate: "", years: "" };

    setFormData({ ...formData, [section]: [...formData[section], newEntry] });
  };

  const removeEntity = (section, index) => {
    const updatedArray = [...formData[section]];
    updatedArray.splice(index, 1);
    setFormData({ ...formData, [section]: updatedArray });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Your profile created");

    // Reset all fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      skills: "",
      password: "",
      confirmPassword: "",
      resume: null,
      education: [{ degree: "", institution: "", year: "" }],
      experience: [{ title: "", company: "", startDate: "", endDate: "", years: "" }],
    });

    document.getElementById("resume").value = "";
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-2xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="skills"
          placeholder="Your Skills"
          value={formData.skills}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="3"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Set Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Resume Upload Section */}
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Resume Upload</h3>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          {formData.resume && (
            <p className="text-sm text-gray-600 mt-1">
              Uploaded: <span className="font-medium">{formData.resume.name}</span>
            </p>
          )}
        </div>

        {/* Education Section */}
        <div className="border-t pt-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setShowEducation(!showEducation)}
          >
            <h3 className="text-lg font-semibold">Education</h3>
            <span className="text-blue-600">
              {showEducation ? "▲ Collapse" : "▼ Expand"}
            </span>
          </div>
          {showEducation && (
            <>
              {formData.education.map((edu, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-2 mb-2 items-center"
                >
                  <input
                    type="text"
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={(e) =>
                      handleArrayChange(e, index, "degree", "education")
                    }
                    className="p-2 border rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Institution"
                    value={edu.institution}
                    onChange={(e) =>
                      handleArrayChange(e, index, "institution", "education")
                    }
                    className="p-2 border rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Year of passing"
                    value={edu.year}
                    onChange={(e) =>
                      handleArrayChange(e, index, "year", "education")
                    }
                    className="p-2 border rounded"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => removeEntity("education", index)}
                    className="text-red-600 text-sm hover:underline ml-2"
                    disabled={formData.education.length === 1}
                  >
                    ❌ Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addEntity("education")}
                className="text-blue-600 text-sm hover:underline"
              >
                + Add Education
              </button>
            </>
          )}
        </div>

        {/* Experience Section */}
        <div className="border-t pt-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setShowExperience(!showExperience)}
          >
            <h3 className="text-lg font-semibold">Experience</h3>
            <span className="text-blue-600">
              {showExperience ? "▲ Collapse" : "▼ Expand"}
            </span>
          </div>
          {showExperience && (
            <>
              {formData.experience.map((exp, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-2 mb-2 items-center"
                >
                  <input
                    type="text"
                    placeholder="Job Title"
                    value={exp.title}
                    onChange={(e) =>
                      handleArrayChange(e, index, "title", "experience")
                    }
                    className="p-2 border rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    value={exp.company}
                    onChange={(e) =>
                      handleArrayChange(e, index, "company", "experience")
                    }
                    className="p-2 border rounded"
                    required
                  />
                  <input
                    type="date"
                    placeholder="Start Date"
                    value={exp.startDate}
                    onChange={(e) =>
                      handleArrayChange(e, index, "startDate", "experience")
                    }
                    className="p-2 border rounded"
                    required
                  />
                  <input
                    type="date"
                    placeholder="End Date"
                    value={exp.endDate}
                    onChange={(e) =>
                      handleArrayChange(e, index, "endDate", "experience")
                    }
                    className="p-2 border rounded"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Years of Experience"
                    value={exp.years}
                    onChange={(e) =>
                      handleArrayChange(e, index, "years", "experience")
                    }
                    className="p-2 border rounded"
                    min="0"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => removeEntity("experience", index)}
                    className="text-red-600 text-sm hover:underline ml-2"
                    disabled={formData.experience.length === 1}
                  >
                    ❌ Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addEntity("experience")}
                className="text-blue-600 text-sm hover:underline"
              >
                + Add Experience
              </button>
            </>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Create Profile
        </button>
      </form>
    </div>
  );
}
