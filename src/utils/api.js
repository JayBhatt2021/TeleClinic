export default function fetchData(request, parameters) {
    return fetch('https://us-central1-teleclinic-8aa6b.cloudfunctions.net/api' + request,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("idToken")
            },
            method: 'post',
            body: JSON.stringify(parameters)
        })
        .then(response => {
            if (response.status !== 200) {
                return Promise.reject(response);
            }
            return response;
        })
        .then(response => response.json())
}
