export const UpdateContact = async (id, data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const response = await fetch(`http://localhost:5000/api/contacts/${id}`, requestOptions)
    const result = await response.json()
    return result
}