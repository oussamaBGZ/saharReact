
const userEndPoint= "http://localhost:8889/CUSTOMER-SERVICE/api"

export const fetchUsers=async ()=>{
    const res= await fetch(userEndPoint+'/customers',{mode:'cors'})
    return res.json()
}

export const fetchuser=async (id)=>{
    const res= await fetch(userEndPoint+'/customers/'+id)
    return res.json()
}

export const AddUserApi=async (data)=>{
    const res= await fetch(userEndPoint+'/customers',{
        method:"POST",
        headers: { "Content-Type": "application/json"},
        body:JSON.stringify(data),
        mode: 'no-cors'
    })
    return res.text()
}


export const updateUser=async (data,id)=>{
    const res= await fetch(userEndPoint+'/customers/'+id,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(data)
    })
    return res.text()
}

export const deleteUser=async (id)=>{
    const res= await fetch(userEndPoint+'/customers/'+id,{
        method:'DELETE'
    })
    return res.text()
}