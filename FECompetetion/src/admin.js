let ArrApi;
const render = async () => {
    const res = await fetch('https://681ea6d4c1c291fa6634a832.mockapi.io/courses');
    ArrApi = await res.json();

    const table = document.getElementById("table");
    const tbody = document.createElement("tbody");
    tbody.id = "tbody";

    ArrApi.forEach((element) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <th scope="row">${element.id}</th>
            <td>${element.title}</td>
            <td>${element.instructor}</td>
            <td>${element.price}</td>
            <td>${element.description}</td>
            <td>${element.createdAt}</td>
        `;
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
};

render();
var search;
document.getElementById("search").addEventListener("input",(e)=>{
    // console.log(e.target.value)
    search = e.target.value
})
const takedata = ()=>{
    // console.log(ArrApi)
    var result = document.getElementById("result")
    var p = document.createElement("p");
    ArrApi.forEach((element) => {
        if(search == element.price || search == element.instructor){
            console.log(element.price)
            p.innerHTML = `
            id: ${element.id}, title: ${element.title}, instructor: ${element.instructor}, price: ${element.price}
            `
            result.appendChild(p)
        }
    });
}
document.getElementById("btnSearch").addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(true)
    takedata()
})

// sort
document.getElementById("sort").addEventListener("click",(e)=>{
    e.preventDefault()
    var b;
    b = ArrApi.sort(function(a, b){return a - b});
    console.log(b)
})
