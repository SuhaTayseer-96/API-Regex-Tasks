function personalInfo(){

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const birthdate = document.getElementById('birthdate').value;
    const image = document.getElementById('image').value;

    const desc = document.getElementById('name').value;
    const uni = document.getElementById('age').value;
    const proglang = document.getElementById('gender').value;
    const phone = document.getElementById('birthdate').value;
    const descofsib = document.getElementById('image').value;

    const proglangs = [];
    const checkboxes = document.querySelectorAll('input[name="proglang"]:checked');
    checkboxes.forEach((checkbox) => {
        proglangs.push(checkbox.value); 
});
const userInfo = {
    name: name,
    age: age,
    gender: gender,
    birthdate: birthdate,
    image: image,
    desc: desc,
    uni: uni,
    proglang: proglang,
    phone: phone,
    descofsib: descofsib,
};

localStorage.setItem('userInfo', JSON.stringify(userInfo));
console.log('Stored information:', userInfo);
};
