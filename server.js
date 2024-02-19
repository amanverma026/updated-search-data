


// document.addEventListener('DOMContentLoaded', function () {
//     const cont = document.querySelector(".container");

//     fetch("https://dummyjson.com/products")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then(responseData => {
//             console.log(responseData);
//             showData(responseData.products);
//         })
//         .catch(error =>
//             console.error("Error fetching data:", error);
//         });

//     function showData(products) {
//         const table = document.querySelector("table");
//         table.innerHTML = "<tr><th>ID</th><th>Title</th><th>Description</th></tr>";
//         products.forEach(product => {
//             const trow = document.createElement("tr");
//             trow.innerHTML = `<td>${product.id}</td>
//                              <td>${product.title}</td>
//                              <td>${product.description}</td>`;
//             table.appendChild(trow);
//         });
//     }

//     function filterProductsByTitle(products, substring) {
//         return products.filter(product => product.title.toLowerCase().includes(substring.toLowerCase()));
//     }

//     function updateTableWithFilteredData(products) {
//         const table = document.querySelector("table");
//         table.innerHTML = "<tr><th>ID</th><th>Title</th><th>Description</th></tr>";
//         products.forEach(product => {
//             const trow = document.createElement("tr");
//             trow.innerHTML = `<td>${product.id}</td>
//                              <td>${product.title}</td>
//                              <td>${product.description}</td>`;
//             table.appendChild(trow);
//         });
//     }

//     document.querySelector("#searchBtn").addEventListener("click", function () {
//         const searchTerm = document.querySelector("#ip").value.trim();
//         console.log("Search Term:", searchTerm);
//         fetch("https://dummyjson.com/products")
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error("Network response was not ok");
//                 }
//                 return response.json();
//             })
//             .then(responseData => {
//                 const filteredProducts = filterProductsByTitle(responseData.products, searchTerm);
//                 updateTableWithFilteredData(filteredProducts);
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//             });
//     });
// });










    // Update table based on checkbox state
    /* function updateTable() {
         const checkboxes = document.querySelectorAll(".checkbox");
         const table = document.querySelector("#dataTable");
         const rows = table.querySelectorAll("tr");

         rows.forEach(row => {
             const cells = row.querySelectorAll("td");
             checkboxes.forEach((checkbox, index) => {
                 cells[index].style.display = checkbox.checked ? "" : "none";
             });
         });
     }*/










     /* function updateTable() {
        const checkboxes = document.querySelectorAll(".checkbox");
        const table = document.querySelector("#dataTable");
        const rows = table.querySelectorAll("tr");

        rows.forEach((row, rowIndex) => {
            if (rowIndex === 0) return;
            const cells = row.querySelectorAll("td");
            checkboxes.forEach((checkbox, index) => {
                if (checkbox.id === "idCheckbox") {
                    cells[0].style.display = checkbox.checked ? "" : "none";
                } else if (checkbox.id === "titleCheckbox") {
                    cells[1].style.display = checkbox.checked ? "" : "none";
                } else if (checkbox.id === "descriptionCheckbox") {
                    cells[2].style.display = checkbox.checked ? "" : "none";
                }
            });
        });
    }*/




















    // correct ---->


    

// document.addEventListener('DOMContentLoaded', function () {
//     const cont = document.querySelector(".container");
//     let productsData = [];

//     fetch("https://dummyjson.com/products")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then(responseData => {
//             console.log(responseData);
//             productsData = responseData.products;
//             showData(productsData);
//         })
//         .catch(error => {
//             console.error("Error fetching data:", error);
//         });

//     function showData(products) {
//         const table = document.querySelector("#dataTable");
//         table.innerHTML = "";
//         const tableHead = document.createElement("tr");
//         tableHead.innerHTML = `<th>ID</th>
//                                <th>Title</th>
//                                <th>category</th>
//                                <th>brand</th>`;
//         table.appendChild(tableHead);

//         products.forEach(product => {
//             const trow = document.createElement("tr");
//             trow.innerHTML = `<td>${product.id}</td>
//                              <td>${product.title}</td> 
//                              <td>${product.category}</td>
//                              <td>${product.brand}</td>`;
//             table.appendChild(trow);
//         });

//         document.querySelector("#searchBtn").addEventListener("click", function () {
//             const searchTerm = document.querySelector("#ip").value.trim().toLowerCase();
//             const checkboxes = document.querySelectorAll('.checkbox');
//             let checkedFields = [];

//             checkboxes.forEach(checkbox => {
//                 if (checkbox.checked) {
//                     checkedFields.push(checkbox.id);
//                 }
//             });

//             let filteredProducts = productsData.filter(product => {
//                 return checkedFields.some(field => {
//                     switch (field) {
//                         case '_id':
//                             return product.id.toString().toLowerCase().includes(searchTerm);
//                         case 'title':
//                             return product.title.toLowerCase().includes(searchTerm);
//                         case 'category':
//                             return product.category.toString().toLowerCase().includes(searchTerm);
//                         case 'brand':
//                             return product.brand.toString().toLowerCase().includes(searchTerm);
//                         default:
//                             return false;
//                     }
//                 });
//             });

//             showFilteredData(filteredProducts);
//         });
//     }

//     function showFilteredData(filteredProducts) {
//         const table = document.querySelector("#dataTable");
//         table.innerHTML = "";
//         const tableHead = document.createElement("tr");
//         tableHead.innerHTML = `<th>ID</th>
//                                <th>Title</th>
//                                <th>category</th>
//                                <th>brand</th>`;
//         table.appendChild(tableHead);

//         filteredProducts.forEach(product => {
//             const trow = document.createElement("tr");
//             trow.innerHTML = `<td>${product.id}</td>
//                              <td>${product.title}</td> 
//                              <td>${product.category}</td>
//                              <td>${product.brand}</td>`;
//             table.appendChild(trow);
//         });
//     }
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const cont = document.querySelector(".container");
//     let productsData = [];

//     fetch("https://dummyjson.com/products")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then(responseData => {
//             console.log(responseData);
//             productsData = responseData.products;
//             showData(productsData);
//         })
//         .catch(error => {
//             console.error("Error fetching data:", error);
//         });

//     // Function to show data based on search term and checked fields
//     function showData(searchTerm = '') {
//         const table = document.querySelector("#dataTable");
//         table.innerHTML = "";
//         const tableHead = document.createElement("tr");
//         tableHead.innerHTML = `<th>ID</th>
//                                <th>Title</th>
//                                <th>category</th>
//                                <th>brand</th>`;
//         table.appendChild(tableHead);

//         productsData.forEach(product => {
//             // Check if the product matches the search term
//             if (productMatchesSearchTerm(product, searchTerm)) {
//                 const trow = document.createElement("tr");
//                 trow.innerHTML = `<td>${product.id}</td>
//                                  <td>${product.title}</td> 
//                                  <td>${product.category}</td>
//                                  <td>${product.brand}</td>`;
//                 table.appendChild(trow);
//             }
//         });
//     }

//     // Function to check if a product matches the search term and checked fields
//     function productMatchesSearchTerm(product, searchTerm) {
//         const checkboxes = document.querySelectorAll('.checkbox');
//         const checkedFields = Array.from(checkboxes)
//             .filter(checkbox => checkbox.checked)
//             .map(checkbox => checkbox.id);

//         return checkedFields.some(field => {
//             switch (field) {
//                 case '_id':
//                     return product.id.toString().toLowerCase().includes(searchTerm);
//                 case 'title':
//                     return product.title.toLowerCase().includes(searchTerm);
//                 case 'category':
//                     return product.category.toString().toLowerCase().includes(searchTerm);
//                 case 'brand':
//                     return product.brand.toString().toLowerCase().includes(searchTerm);
//                 default:
//                     return false;
//             }
//         });
//     }

//     // Event listener for input field changes
//     document.querySelector("#ip").addEventListener("input", function () {
//         const searchTerm = this.value.trim().toLowerCase();
//         showData(searchTerm);
//     });
// });


