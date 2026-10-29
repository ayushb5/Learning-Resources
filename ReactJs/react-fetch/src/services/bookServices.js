export const getBooks = async () => {
    try {
        const response = await fetch("https://6adf7ca18e42963c8d5e0607.mockapi.io/api/v1/books");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = (await response).json();
        return data;
    } catch (error) {
        console.error("Failed to fetch books:", error);
        throw error;
    }
}

export const saveBook = async (book) => {
    try {
        const response = await fetch("https://6adf7ca18e42963c8d5e0607.mockapi.io/api/v1/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book),
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error creating book", error);
        throw error;
    }
}