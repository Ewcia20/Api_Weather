'use strict';

const baseUrl = 'https://danepubliczne.imgw.pl/api/data/synop/';

const getWether = async city => {
    try {

        const response = await fetch(`${baseUrl}${city}`);

        const data = await response.json();

        return data;

    } catch(err) {

        console.error(err);

    }

}

getWether('synop').then(data => {

   

    const tr = document.createElement('tr');
    tr.innerHTML = `
     
      <td>${data.stacja}</td>
      <td>${data.currency}</td>
      <td>${data.currency}</td>
      <td>${data.currency}</td>
      <td>${data.currency}</td>
      <td>${data.currency}</td>
      `;
      
      document.querySelector('tbody').appendChild(tr);

    console.log(data);

    const { stacja } = data;
    const { cisnienie } = data;
  

    console.log(stacja);
    console.log(cisnienie);
    

});

 const option = document.querySelector('option');

 option.addEventListener('option', getWether);

