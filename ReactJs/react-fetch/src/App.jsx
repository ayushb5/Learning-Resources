import { useEffect, useState } from "react"
import { getBooks } from "./services/bookServices";
import Header from "./components/Header";
import AddBookModal from "./components/AddBookModal";

function App() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [addBook, setAddBook] = useState(false);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const data = await getBooks();
        setBooks(data);
    }

    const handleAddBook = () => {
        setAddBook(true);
    }

    const filteredBooks = books.filter((book) => book.title?.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
            <Header
                search={search}
                setSearch={setSearch}
                onAddBook={handleAddBook}
            />

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredBooks.map((book) => (
                    <div
                        key={book.title}
                        className="p-4 bg-white rounded-lg shadow"
                    >
                        <h2 className="text-lg font-semibold">
                            {book.title}
                        </h2>
                        <p className="text-gray-600">{book.author}</p>
                    </div>
                ))}
            </div>

            {addBook && (
                <AddBookModal setAddBook={setAddBook} />
            )}
        </div>
    )
}

export default App