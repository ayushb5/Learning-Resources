export const getBooks = async () => {
    try {
        const response = await fetch(import.meta.env.VITE_API);
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
        const response = await fetch(import.meta.env.VITE_API, {
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