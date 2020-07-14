var req = new XMLHttpRequest();
req.open('GET', 'https://restcountries.eu/rest/v2/all', true);
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
    if (req.status == 200) {
      var data = JSON.parse(req.responseText)

      var Ullist = document.getElementById('listul');
      var listepays = document.getElementById('secondList');

      let input = document.getElementById('inputpays');
      input.addEventListener('keyup', letrepays);


      let newTab = [];
      newTab = data;
      console.log(newTab)

      function letrepays() {
        let input = document.getElementById('inputpays');
        listepays.innerHTML = ""
        for (let i = 0; i < newTab.length; i++) {


          if (newTab[i].name.indexOf(input.value) === 0) {
            var monli = document.createElement('li');
            monli.innerHTML = newTab[i].name;
            listepays.appendChild(monli);
            listepays.className = 'list-group';
            monli.className = 'list-group-item';


            monli.onclick = () => {
              input.value = newTab[i].name;
              listepays.innerHTML = "";

              let mydiv = document.getElementById('divpays');
              let div2 = document.createElement('div');
              let paragraphe = document.createElement('p');
              paragraphe.innerHTML = `<img src="${newTab[i].flag}"/>`
              div2.appendChild(paragraphe);

              let paragraphe1 = document.createElement('p');
              paragraphe1.innerHTML = `la population de ${newTab[i].name} est de ${newTab[i].population} habitants`
              div2.appendChild(paragraphe1)
              let paragraphe2 = document.createElement('p');
              paragraphe2.innerHTML = `sa capitale est ${newTab[i].capital}`
              div2.appendChild(paragraphe2)
              let paragraphe3 = document.createElement('p');
              paragraphe3.innerHTML = `sa monaie est ${newTab[i].currencies[0].name + ' ' + newTab[i].currencies[0].symbol}`
              div2.appendChild(paragraphe3)
              let paragraphe4 = document.createElement('p');
              paragraphe4.innerHTML = `cest pays est situé en ${newTab[i].region}, plus précisément en ${newTab[i].subregion}`
              div2.appendChild(paragraphe4)
              div2.className = ('divjs')
              mydiv.prepend(div2);


                // currencies[0].name
              // [... flag, capital, currencies, region, subregion]; 
            }

          }
        }
        input.value.toUpperCase();
      }
    }

  }
};

req.send(null); 