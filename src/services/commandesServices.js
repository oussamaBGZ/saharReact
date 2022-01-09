const commandesEndPoint = "http://localhost:9600"

export const fetchCommandes = async () => {
    const res = await fetch(commandesEndPoint
        + '/commandes')
    return res.json()
}

export const fetchCommande = async (id) => {
    const res = await fetch(commandesEndPoint
        + '/commandes/' + id)
    return res.json()
}

export const AddCommandeApi = async (data) => {
    const res = await fetch(commandesEndPoint
        + '/commandes', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return res.json()
}


export const updateCommande = async (data, id) => {
    const res = await fetch(commandesEndPoint
        + '/commandes/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return res.text()
}

export const deleteCommande = async (id) => {
    const res = await fetch(commandesEndPoint
        + '/commandes/' + id, {
        method: 'DELETE'
    })
    return res.text()
}