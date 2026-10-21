import { useEffect, useState } from "react";

const AddContact = ({ setAddContact }) => {
    const [contactList, setContactList] = useState([]);
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        imgLink: "",
    });

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = () => {
        const list = JSON.parse(localStorage.getItem("contacts")) || [];
        setContactList(list);
    }

    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.id]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedList = [...contactList, contactData];
        localStorage.setItem("contacts", JSON.stringify(updatedList));
        setContactList(updatedList);
        setContactData({
            name: "",
            email: "",
            phone: "",
            address: "",
            imgLink: "",
        })
        setAddContact(false);
    }

    return (
        <div className="max-w-lg mx-auto mt-8 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Add Contact
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={contactData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        value={contactData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={contactData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Image Link
                    </label>

                    <input
                        type="url"
                        id="imgLink"
                        value={contactData.imgLink}
                        onChange={handleChange}
                        placeholder="Enter image URL"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Address */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                    </label>
                    <textarea
                        rows="3"
                        id="address"
                        value={contactData.address}
                        onChange={handleChange}
                        placeholder="Enter address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>
                </div>

                {/* Buttons */}
                <div className="text-end">
                    <button
                        type="submit"
                        className="px-5 py-2 bg-blue-600 text-white rounded-lg
                       hover:bg-blue-700"
                    >
                        Add Contact
                    </button>
                </div>

            </form>
        </div>
    );
};

export default AddContact;