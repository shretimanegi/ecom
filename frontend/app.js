fetch("http://127.0.0.1:8000/api/products/")
  .then(res => res.json())
  .then(products => {
    console.log(products); // You can use this to show product cards dynamically
  });
