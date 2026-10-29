import { useEffect } from "react"
import { useState } from "react";
import BookCard from "../components/BookCard";
import { getBook } from "../services/apiService";

function Book() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooksData();
    }, []);

    const getBooksData = async () => {
        try {
            const res = await getBook();
            setBooks(res.data);
        } catch (error) {
            console.log(error);
            console.error(error.message);
            console.error(error.response.status);
            console.error(error.response.data)
        }
    };

    return (
        <ul className="my-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                books.map((curElem) => {
                    return <BookCard key={curElem.title} bookData={curElem} />
                })
            }
        </ul>
    )
}

export default Book