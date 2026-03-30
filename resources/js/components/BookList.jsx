import React from "react";


export default function BookList({onSelectBook,refreshKey}){
    const [books, setBooks] = React.useState([]);

    React.useEffect( ()=>{
        getBooks();
    },[refreshKey])


    const getBooks = async () => {
        try {
            const response = await axios.get("api/books");
            setBooks(response.data.data);
        } catch (error) {
            console.error("Failed to fetch books:", error);
        }
    };

    return (
        <div>
            <div className="max-w-xl space-y-4 rounded-2xl bg-white p-6 shadow-md border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800">Books</h2>
                <div className="space-y-2">
                    { books.map((book,index) =>
                        <div onClick={() => onSelectBook(book.id)} className="rounded-xl bg-amber-100 p-2 cursor-pointer" key={index}>{book.title}</div> )}
                </div>
            </div>
        </div>
    )
}