import React from "react";


export default function BookCreate({onChange}){

    const createBook = async (e) => {
        e.preventDefault()

        try {
            const formData = new FormData(e.target)
            await axios.post(`api/books`, formData);
            onChange()

            e.target.reset()
        } catch (error) {
            alert(error.response.data.message)
            console.error("Failed to fetch books:", error);
        }
    };



    return (
        <form
            onSubmit={createBook}
            className="col-span-2 max-w-xl space-y-4 rounded-2xl bg-white p-6 shadow-md border border-gray-100"
        >
            <h2 className="text-xl font-semibold text-gray-800">Edit Book</h2>

            <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                    Title
                </label>
                <input
                    name="title"
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
                    name="word_count"
                    type="number"
                    placeholder="100"
                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
            </div>

            <button
                type="submit"
                className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700 active:scale-[0.98]"
            >
                Save
            </button>
        </form>
    )
}