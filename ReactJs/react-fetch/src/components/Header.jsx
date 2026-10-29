
function Header({ search, setSearch, onAddBook }) {
    return (
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800">
                Book Store
            </h1>

            <div className="flex w-full sm:w-auto gap-3">
                <input
                    type="text"
                    placeholder="Search books..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    onClick={onAddBook}
                    className="shrink-0 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
                >
                    + Add Book
                </button>
            </div>
        </header>
    );
}

export default Header;
