const url="https://66681676f53957909ff67af8.mockapi.io/users/Animals";
async function getdata()

{
    const response = await fetch(url);

    var jsondata = await response.json()
    var variabelselect=document.getElementById("myselect")

    for(let i=0; i<jsondata.length ;i++)
    {
        var createitem=document.createElement("option");
        createitem.innerHTML=jsondata[i].name;
        createitem.value=jsondata[i].image;
        variabelselect.appendChild(createitem);
        var img= document.getElementById("image")

    }
    
}
getdata();
function imagechange(value){
    var img= document.getElementById("image")

    img.src=value;
}


// function change_image(value) {
//   fetch('https://66681676f53957909ff67af8.mockapi.io/users/Animals')
//       .then((response) => response.json())
//       .then((animals) => {
//         const jsonData = await response.json()
//         document.getElementById("img").src = jsonData[0].image
//           let selected;
//           for (let i = 0; i < animals.length; i++) {
//               if (animals[i].name === value) {
//                   selected = animals[i];
//               }
//           }

//           if (selected) {
//               const src = selected.image;
//               const id = selected.id;
//               const name = selected.name;

//               document.getElementById("img").src = src;

//               console.log("image changes");
//           } else {
//               console.error('not found in the API');
//           }
//       });
// }
