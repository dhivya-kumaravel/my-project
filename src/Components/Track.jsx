import React, { useState, useEffect } from "react";

export default function Track() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch jobs data");
        }
        return res.json();
      })
      .then((data) => {
        setApplications(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4">Loading applied jobs...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Applied Jobs Status</h1>
      {applications.length === 0 ? (
        <p className="text-center text-gray-600">No job applications found.</p>
      ) : (
        <ul className="space-y-4">
          {applications.slice(0, 2).map((app) => {
            const appliedDate = new Date(app.appliedDate);
            const isValidDate = !isNaN(appliedDate.getTime());

            return (
              <li
                key={app.id}
                className="p-4 border rounded-md flex justify-between items-center hover:shadow-lg transition"
              >
                <div>
                  <h2 className="text-xl font-semibold">{app.jobTitle}</h2>
                  <p className="text-gray-700">{app.company}</p>
                  {isValidDate ? (
                    <p className="text-gray-500 text-sm">
                      Applied on: {appliedDate.toLocaleDateString()}
                    </p>
                  ) : (
                    <p className="text-gray-500 italic text-sm">
                      You have applied and wait for recruiter response.
                      <br />
                      You will receive the update to your registered mail id.
                    </p>
                  )}
                </div>
                <div>
                  <StatusBadge status={app.status} />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function StatusBadge({ status }) {
  const colors = {
    Applied: "bg-blue-100 text-blue-800",
    Interview: "bg-yellow-100 text-yellow-800",
    Rejected: "bg-red-100 text-red-800",
    Offer: "bg-green-100 text-green-800",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full font-semibold text-sm ${
        colors[status] || "bg-gray-100 text-gray-800"
      }`}
    >
      {status}
    </span>
  );
}
