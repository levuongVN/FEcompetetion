user: https://681ea6d4c1c291fa6634a832.mockapi.io/user

courses:https://681ea6d4c1c291fa6634a832.mockapi.io/courses
\


function courses(){
    var display= document.getElementById("divtong")
    display.innerHTML= ''



    async function fetchUsers() {
        try {
            const response = await fetch('https://681ea6d4c1c291fa6634a832.mockapi.io/courses');

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            data.forEach(element => {

                const div = document.createElement('div col');



                div.innerHTML=`
                        <div class="card " style="width: 18rem;">
                            <img src="${element.image}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.description}</p>
                            <p class="card-text">${element.price}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                `


                display.appendChild(div);




            });
        } catch (error) {
            console.log("Lỗi khi fetch dữ liệu:", error);
        }
    }

    // Gọi hàm
    fetchUsers();

}
courses();
