import React from "react";


export default function BookUpdate({bookId,onChange}){
    const [book, setBook] = React.useState(null);

    React.useEffect( ()=>{
        bookId && getBook(bookId);
    },[bookId])

    const getBook = async (id) => {
        try {
            const response = await axios.get(`api/books/${id}`);
            setBook(response.data);
        } catch (error) {
            console.error("Failed to fetch books:", error);
        }
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setBook((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const updateBook = async (e) => {
        e.preventDefault()

        try {
            await axios.put(`api/books/${bookId}`, book);
            onChange()
        } catch (error) {
            console.error("Failed to update book:", error);
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.delete(`api/books/${bookId}`);
            setBook(null)
            onChange(true)
        } catch (error) {
            console.error("Failed to update book:", error);
        }
    };

    return (
            <div className="col-span-2">
                    {book &&
                        <form
                            onChange={handleFormChange}
                            onSubmit={updateBook}
                            className="max-w-xl space-y-4 rounded-2xl bg-white p-6 shadow-md border border-gray-100"
                        >
                            <h2 className="text-xl font-semibold text-gray-800">Edit Book</h2>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Title
                                </label>
                                <input
                                    name="title"
                                    value={book.title || ""}
                                    type="text"
                                    placeholder="Book title"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Author
                                </label>
                                <input
                                    name="author"
                                    value={book.author || ""}
                                    type="text"
                                    placeholder="Author name"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Price (USD)
                                </label>
                                <input
                                    name="price_usd"
                                    value={book.price_usd || ""}
                                    type="number"
                                    placeholder="0.00"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Genre
                                </label>
                                <input
                                    value={book.genre || ""}
                                    name="genre"
                                    type="text"
                                    placeholder="Genre"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Publisher
                                </label>
                                <input
                                    value={book.publisher || ""}
                                    name="publisher"
                                    type="text"
                                    placeholder="Publisher"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Publication date
                                </label>
                                <input
                                    value={book.publication_date || ""}
                                    name="publication_date"
                                    type="date"
                                    placeholder="Publication date"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Word count
                                </label>
                                <input
                                    value={book.word_count || ""}
                                    name="word_count"
                                    type="number"
                                    placeholder="100"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                />
                            </div>

                            <div className="space-x-2">
                                <button
                                    type="submit"
                                    className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700 active:scale-[0.98]"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="rounded-xl bg-red-600 px-5 py-2.5 font-medium text-white transition hover:bg-red-700 active:scale-[0.98]"
                                >
                                    Delete
                                </button>
                            </div>
                        </form>
                    }

            </div>

    )
}