import { useState } from "react"
import AddContact from "./AddContact"
import ContactList from "./ContactList";

function UseEffect() {
    const [addContact, setAddContact] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <>
            <header className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">

                    <h1 className="text-2xl font-bold text-gray-800">
                        Contact Book
                    </h1>

                    <input
                        type="text"
                        placeholder="Search contact"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className={`${addContact ? "hidden" : ""} w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />

                    <button
                        className={`px-5 py-2 ${addContact ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-900"} text-white font-medium rounded-lg
                         transition`} onClick={() => setAddContact(!addContact)}
                    >
                        {addContact ? "Cancel" : "Add Contact"}
                    </button>

                </div>
            </header>
            <main>
                {!addContact && (<ContactList search={search} />)}
            </main>

            {addContact && (
                <AddContact setAddContact={setAddContact} />
            )}
        </>
    )
}

export default UseEffect