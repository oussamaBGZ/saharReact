const bookEndPoint= "http://localhost:9500"

export const fetchBooks=async ()=>{
    const res= await fetch(bookEndPoint+'/books')
    return res.json()
}

export const fetchBook=async (id)=>{
    const res= await fetch(bookEndPoint+'/books/'+id)
    return res.json()
}

export const AddBookApi=async (data)=>{
    const res= await fetch(bookEndPoint+'/books',{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(data)
    })
    return res.json()
}


export const updateBook=async (data,id)=>{
    const res= await fetch(bookEndPoint+'/books/'+id,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(data)
    })
    return res.text()
}

export const deleteBook=async (id)=>{
    const res= await fetch(bookEndPoint+'/books/'+id,{
        method:'DELETE'
    })
    return res.text()
}