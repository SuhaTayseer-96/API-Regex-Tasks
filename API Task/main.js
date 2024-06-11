function change_image(value) {
  fetch('https://66681676f53957909ff67af8.mockapi.io/users/Animals')
      .then((response) => response.json())
      .then((animals) => {
          let selected;
          for (let i = 0; i < animals.length; i++) {
              if (animals[i].name === value) {
                  selected = animals[i];
              }
          }

          if (selected) {
              const src = selected.image;
              const id = selected.id;
              const name = selected.name;

              document.getElementById("img").src = src;

              console.log("image changes");
          } else {
              console.error('not found in the API');
          }
      });
}