import React from "react";
import BookList from "./BookList.jsx";
import BookUpdate from "./BookUpdate.jsx";
import BookCreate from "./BookCreate.jsx";


export default function Books(){
    const [selectedBookId, setSelectedBookId] = React.useState(null);
    const [refreshKey, setRefreshKey] = React.useState(0);

    const onChange = (isDelete) => {
        if(isDelete) setSelectedBookId(null)
        setRefreshKey(prev => prev + 1);
    };

    return (
        <div className="p-10 bg-amber-50 grid grid-cols-5 gap-3">
            <BookList onSelectBook={setSelectedBookId} refreshKey={refreshKey} />
            <BookUpdate bookId={selectedBookId} onChange={onChange}/>
            <BookCreate bookId={selectedBookId} onChange={onChange} />
        </div>
    )
}