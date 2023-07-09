async function getProducts() {
  const url = "https://fakestoreapi.com/products";
  try {
    const request = await fetch(url);
    const results = await request.json();
    document.querySelector(".spinner-border").remove();
    const products = results;
    for (const product of products) {
      const { title } = product;
      const picture = product.image;

      const userContainer = document.createElement("div");
      userContainer.classList.add("col-6", "col-md-4", "my-3");
      const wrapper = document.createElement("div");
      userContainer.appendChild(wrapper);
      wrapper.classList.add("product");

      //image
      const image = document.createElement("img");
      image.src = picture;
      image.setAttribute("alt", title);
      wrapper.appendChild(image);
      document.querySelector(".products").appendChild(userContainer);

      //title
      const heading = document.createElement("h3");
      heading.innerHTML = title;
      wrapper.appendChild(heading);
    }
  }catch(error){
    console.log(error)
  }
}

getProducts();
