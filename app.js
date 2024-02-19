

document.addEventListener('DOMContentLoaded', function () {
    const cont = document.querySelector(".container");
    let productsData = [];

    fetch("https://dummyjson.com/products")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(responseData => {
            console.log(responseData);
            productsData = responseData.products;
            showData();
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });

  
    function showData(searchTerm = '') {
        const table = document.querySelector("#dataTable");
        table.innerHTML = "";
        const tableHead = document.createElement("tr");
        tableHead.innerHTML = `<th>ID</th>
                               <th>Title</th>
                               <th>category</th>
                               <th>brand</th>`;
        table.appendChild(tableHead);

        productsData.forEach(product => {
           
            if (productMatchesSearchTerm(product, searchTerm)) {
                const trow = document.createElement("tr");
                trow.innerHTML = `<td>${product.id}</td>
                                 <td>${product.title}</td> 
                                 <td>${product.category}</td>
                                 <td>${product.brand}</td>`;
                table.appendChild(trow);
            }
        });
    }

   
    function productMatchesSearchTerm(product, searchTerm) {
        const checkboxes = document.querySelectorAll('.checkbox');
        const checkedFields = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.id);

        return checkedFields.some(field => {
            switch (field) {
                case '_id':
                    return product.id.toString().toLowerCase().includes(searchTerm);
                case 'title':
                    return product.title.toLowerCase().includes(searchTerm);
                case 'category':
                    return product.category.toString().toLowerCase().includes(searchTerm);
                case 'brand':
                    return product.brand.toString().toLowerCase().includes(searchTerm);
                default:
                    return false;
            }
        });
    }


    document.querySelector("#ip").addEventListener("input", function () {
        const searchTerm = this.value.trim().toLowerCase();
        showData(searchTerm);
    });
});
