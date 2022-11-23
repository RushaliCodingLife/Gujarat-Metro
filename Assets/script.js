// Fetching Api

const api="Assets/data.json";


async function getdata(url){
    await  fetch(url).then ((res) => {
        console.log(res);
        return res.json ();
    }) .then ((data) => {
        console.log(data);
        show(data);
    })
}
getdata(api);

// data populate

function show(data){
let table =
`<tr>
<th> <h1 class="text-danger text-center"> Catg</h1></th>
<th> <h1 class="text-danger text-center">Desc </h1></th>
<th> <h1 class="text-danger text-center">Id</h1></th>
<th> <h1 class="text-danger text-center">Image</h1></th>
<th> <h1 class="text-danger text-center">Price</h1></th>
<th> <h1 class="text-danger text-center">Rating</h1></th>
<th> <h1 class="text-danger text-center">Title</h1></th>

</tr>` ;


for (let tbl of data){
    table += 
    `<tr>
    <td class="text-center fs-6 fw-light"> ${tbl.catg} </td>
    <td class="text-center fs-6 fw-light"> ${tbl.desc} </td>
    <td class="text-center fs-6 fw-light"> ${tbl.id} </td>
    <td> <img src="${tbl.img}" class="img-fluid rounded" width="50px" height="50px" alt="..."></td>
    <td class="text-center fs-6 fw-light"> ${tbl.price} </td>
    <td class="text-center fs-6 fw-light"> ${tbl.rating} </td>
    <td class="text-center fs-6 fw-light"> ${tbl.title} </td>
    </tr>
    `

}
document.getElementById("datatbl").innerHTML= table;
}