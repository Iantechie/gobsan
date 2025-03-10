import { useState } from "react";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';


const UserRequirementModal = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
    communicationChannel: "email",
    callTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/requirements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: "Thank you!",
          text: "Your information has been received. We will reach out to you shortly.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: '#3085d6'
        });
        setFormData({
          email: "",
          phone: "",
          address: "",
          communicationChannel: "email",
          callTime: "",
        });
        onClose(); // Close the modal after successful submission
      } else {
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: '#3085d6'
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Unable to submit your request. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: '#3085d6'
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">Let us know how to reach you</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Physical Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Preferred Communication Channel
            </label>
            <select
              name="communicationChannel"
              value={formData.channel}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Preferred Time to Call</label>
            <input
              type="time"
              name="callTime"
              value={formData.callTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="text-black font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mt-4 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRequirementModal;
