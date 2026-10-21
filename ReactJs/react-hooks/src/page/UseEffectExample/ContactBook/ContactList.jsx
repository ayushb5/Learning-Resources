import { useEffect, useState } from "react";

function ContactList({ search }) {
    const [contactList, setContactList] = useState([]);

    useEffect(() => {
        const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        setContactList(contacts);
    }, []);

    const filteredContacts = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-6xl mx-auto mt-8 px-4">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Contacts
            </h2>

            {filteredContacts.length === 0 ? (
                <p className="text-gray-500">
                    No contacts found.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {filteredContacts.map((contact, index) => (
                        <div
                            key={index}
                            className="bg-white p-5 rounded-xl shadow-md"
                        >
                            {/* Image */}
                            {contact.imgLink && (
                                <img
                                    src={contact.imgLink}
                                    alt={contact.name}
                                    className="w-20 h-20 rounded-full object-cover mb-4"
                                />
                            )}

                            <h3 className="text-xl font-semibold text-gray-800">
                                {contact.name}
                            </h3>

                            <p className="text-gray-600 mt-2">
                                {contact.email}
                            </p>

                            <p className="text-gray-600">
                                {contact.phone}
                            </p>

                            <p className="text-gray-500 mt-2">
                                {contact.address}
                            </p>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

export default ContactList;