import { useState } from "react"
import { saveBook } from "../services/bookServices";

function AddBookModal({ setAddBook }) {
    const [book, setBook] = useState({
        "title": "",
        "author": "",
        "published_year": "",
        "category": "",
        "available": false,
    });

    const handleOnChange = (e) => {
        setBook({ ...book, [e.target.id]: e.target.value });
        console.log(book);
    }

    const handleSaveBook = async (e) => {
        e.preventDefault();
        try {
            const response = await saveBook(book);
            alert("Book Saved successfully");
            console.log(response);
            setAddBook(false);
        } catch (error) {
            console.log("Failed to save book: ", error);
        }
    }
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <form onSubmit={handleSaveBook} className="w-full max-w-md rounded-md bg-white p-6 shadow-xl">
                <h1 className="text-2xl text-center">Add Book</h1>
                <div className="mt-6 my-2">
                    <input type="text" id="title" value={book.title} onChange={handleOnChange} className="w-full px-2.5 py-1 border rounded-md focus:outline-blue-700" placeholder="Enter Book Title" required />
                </div>
                <div className="mt-6 my-2">
                    <input type="text" id="author" value={book.author} onChange={handleOnChange} className="w-full px-2.5 py-1 border rounded-md focus:outline-blue-700" placeholder="Enter Author Name" required />
                </div>
                <div className="mt-6 my-2">
                    <input type="number" id="published_year" value={book.published_year} onChange={handleOnChange} className="w-full px-2.5 py-1 border rounded-md focus:outline-blue-700" placeholder="Enter Published Year" />
                </div>
                <div className="mt-6 my-2">
                    <input type="text" id="category" value={book.category} onChange={handleOnChange} className="w-full px-2.5 py-1 border rounded-md focus:outline-blue-700" placeholder="Enter Book Category" />
                </div>
                {/* <div className="mt-6 my-2 flex gap-2">
                    <input type="checkbox" />
                    <span>Available</span>
                </div> */}
                <div className="my-2 flex justify-end gap-4">
                    <button className="px-2 py-1 border font-semibold bg-red-500 text-white cursor-pointer" onClick={() => setAddBook(false)}>Cancel</button>
                    <button type="submit" className="px-2 py-1 border font-semibold bg-green-500 cursor-pointer">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddBookModal