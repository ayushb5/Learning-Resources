
function BookCard({ bookData }) {
    return (
        <div className="m-2 p-2 flex flex-col gap-3 text-center rounded-md border border-gray-300 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <span className="block text-xl text-green-700 font-semibold">{bookData.title}</span>
            <p><span className="text-blue-800">Author</span>: {bookData.author}</p>
            <span>Published in: {bookData.published_year}</span>
            <div className="flex flex-row gap-4 justify-center">
                <span>Category:</span>
                <span className="border px-2 py-0.5 rounded-xl bg-blue-500 text-white font-semibold">{bookData.category}</span>
            </div>
        </div>
    )
}

export default BookCard