/* global d3 */

// Used to read a text file at the given location
// Returns the text in the given file
const fetchFile = async filePath => {
  try {
    const response = await fetch(filePath);
    const text = await response.text();
    return text;
  } catch (error) {
    console.error(error);
  }
};



fetchFile("data-loafers.csv").then
  (function (str) {  
    const dataFiltered = d3.csvParse(str); 
      
      // For loop to create product card for each loafer

      for (var i=0; i<dataFiltered.length; i++) {
      
      const brandName = dataFiltered[i].brand;
      const shoeName = dataFiltered[i].shoeName;
      const priceValue = dataFiltered[i].price;
      const imgLink = dataFiltered[i].imageLink;
      
      const productCard = document.createElement('div');
      productCard.classList = ['productCard'];
      
        // const productImage = document.createElement('div');
        // productCard.appendChild(productImage);
        // productCard.classList = ['productImage'];
      
          const image = document.createElement('img');
          image.src = imgLink;
          productCard.appendChild(image);
          image.classList = ['productThumb'];
      
          // const button = document.createElement('button');
          // image.appendChild(button);
          // button.classList = ['cardButton'];
          // button.innerHTML = 'See Details';
      
        const productInfo = document.createElement('div');
        productCard.appendChild(productInfo);
      
          const brand = document.createElement('p');
          brand.innerHTML = brandName;
          productInfo.appendChild(brand);
          brand.classList = ['productInfo'];

          const name = document.createElement('p');
          name.innerHTML = shoeName;
          productInfo.appendChild(name);
          name.classList = ['productInfo'];
      
          const price = document.createElement('p');
          price.innerHTML = "$"+priceValue;
          productInfo.appendChild(price);
          price.classList = ['productInfo'];

      
      document.getElementById('container1').appendChild(productCard);
    }

});


fetchFile("data-sandals.csv").then
  (function (str) {  
    const dataFiltered = d3.csvParse(str); 
  
      // For loop to create product card for each sandal

      for (var i=0; i<dataFiltered.length; i++) {
      
      const brandName = dataFiltered[i].brand;
      const shoeName = dataFiltered[i].shoeName;
      const priceValue = dataFiltered[i].price;
      const imgLink = dataFiltered[i].imageLink;
      
      const productCard = document.createElement('div');
      productCard.classList = ['productCard'];
      
        // const productImage = document.createElement('div');
        // productCard.appendChild(productImage);
        // productCard.classList = ['productImage'];
      
          const image = document.createElement('img');
          image.src = imgLink;
          productCard.appendChild(image);
          image.classList = ['productThumb'];
      
          // const button = document.createElement('button');
          // image.appendChild(button);
          // button.classList = ['cardButton'];
          // button.innerHTML = 'See Details';
      
        const productInfo = document.createElement('div');
        productCard.appendChild(productInfo);
        productInfo.classList = ['productInfo'];
      
          const brand = document.createElement('p');
          brand.innerHTML = brandName;
          productInfo.appendChild(brand);
          brand.classList = ['productHeader'];
          brand.setAttribute("id", "brandName");

          const name = document.createElement('p');
          name.innerHTML = shoeName;
          productInfo.appendChild(name);
          name.classList = ['productHeader'];
      
          const price = document.createElement('p');
          price.innerHTML = "$"+priceValue;
          productInfo.appendChild(price);
          price.classList = ['productHeader'];

      
      document.getElementById('container2').appendChild(productCard);
    }

});

fetchFile("data-pumps-heels.csv").then
  (function (str) {  
    const dataFiltered = d3.csvParse(str); 
  
      // For loop to create product card for each pump/heel

      for (var i=0; i<dataFiltered.length; i++) {
      
      const brandName = dataFiltered[i].brand;
      const shoeName = dataFiltered[i].shoeName;
      const priceValue = dataFiltered[i].price;
      const imgLink = dataFiltered[i].imageLink;
      
      const productCard = document.createElement('div');
      productCard.classList = ['productCard'];
      
        // const productImage = document.createElement('div');
        // productCard.appendChild(productImage);
        // productCard.classList = ['productImage'];
      
          const image = document.createElement('img');
          image.src = imgLink;
          productCard.appendChild(image);
          image.classList = ['productThumb'];
      
          // const button = document.createElement('button');
          // image.appendChild(button);
          // button.classList = ['cardButton'];
          // button.innerHTML = 'See Details';
      
        const productInfo = document.createElement('div');
        productCard.appendChild(productInfo);
        productInfo.classList = ['productInfo'];
      
          const brand = document.createElement('p');
          brand.innerHTML = brandName;
          productInfo.appendChild(brand);
          brand.classList = ['productHeader'];

          const name = document.createElement('p');
          name.innerHTML = shoeName;
          productInfo.appendChild(name);
          name.classList = ['productHeader'];
      
          const price = document.createElement('p');
          price.innerHTML = "$"+priceValue;
          productInfo.appendChild(price);
          price.classList = ['productHeader'];

      
      document.getElementById('container3').appendChild(productCard);
    }

});

fetchFile("data-sneakers.csv").then
  (function (str) {  
    const dataFiltered = d3.csvParse(str); 
      
      // For loop to create product card for each sneaker
  
      for (var i=0; i<dataFiltered.length; i++) {
      
      const brandName = dataFiltered[i].brand;
      const shoeName = dataFiltered[i].shoeName;
      const priceValue = dataFiltered[i].price;
      const imgLink = dataFiltered[i].imageLink;
      
      const productCard = document.createElement('div');
      productCard.classList = ['productCard'];
      
        // const productImage = document.createElement('div');
        // productCard.appendChild(productImage);
        // productCard.classList = ['productImage'];
      
          const image = document.createElement('img');
          image.src = imgLink;
          productCard.appendChild(image);
          image.classList = ['productThumb'];
      
          // const button = document.createElement('button');
          // image.appendChild(button);
          // button.classList = ['cardButton'];
          // button.innerHTML = 'See Details';
      
        const productInfo = document.createElement('div');
        productCard.appendChild(productInfo);
        productInfo.classList = ['productInfo'];
      
          const brand = document.createElement('p');
          brand.innerHTML = brandName;
          productInfo.appendChild(brand);
          brand.classList = ['productHeader'];

          const name = document.createElement('p');
          name.innerHTML = shoeName;
          productInfo.appendChild(name);
          name.classList = ['productHeader'];
      
          const price = document.createElement('p');
          price.innerHTML = "$"+priceValue;
          productInfo.appendChild(price);
          price.classList = ['productHeader'];

      
      document.getElementById('container4').appendChild(productCard);
    }

});

fetchFile("data-boots.csv").then
  (function (str) {  
    const dataFiltered = d3.csvParse(str); 
  
      // For loop to create product card for each boot

      for (var i=0; i<dataFiltered.length; i++) {
      
      const brandName = dataFiltered[i].brand;
      const shoeName = dataFiltered[i].shoeName;
      const priceValue = dataFiltered[i].price;
      const imgLink = dataFiltered[i].imageLink;
      
      const productCard = document.createElement('div');
      productCard.classList = ['productCard'];
      // productCard.addEventListener("mouseover", showDetails());
      // productCard.addEventListener("mouseout", showImg());

          const image = document.createElement('img');
          image.src = imgLink;
          productCard.appendChild(image);
          image.classList = ['productThumb'];
          
        const productInfo = document.createElement('div');
        productCard.appendChild(productInfo);
        productInfo.classList = ['productInfo'];
      
          const brand = document.createElement('p');
          brand.innerHTML = brandName;
          productInfo.appendChild(brand);
          brand.classList = ['productHeader'];

          const name = document.createElement('p');
          name.innerHTML = shoeName;
          productInfo.appendChild(name);
          name.classList = ['productHeader'];
      
          const price = document.createElement('p');
          price.innerHTML = "$"+priceValue;
          productInfo.appendChild(price);
          price.classList = ['productHeader'];

      
      document.getElementById('container5').appendChild(productCard);
    
      }

});

