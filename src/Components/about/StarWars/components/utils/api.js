const urls = [
    "https://swapi.dev/api/people/",
    "https://swapi.dev/api/starships/",
    "https://swapi.dev/api/vehicles/",
    "https://swapi.dev/api/planets/"
]

export const fetchData = async () => {
    try {
        const response = await Promise.all(
            urls.map(url => fetch(url).then(res => res.json()))
        );
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
};


// export async function fetchData(endpoint) {
//     const response = await fetch(endpoint);

//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
// }