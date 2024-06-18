    // Function to populate table with JSON data
    function populateTable(data) {
        const tableBody = document.querySelector("#data-table tbody");
        tableBody.innerHTML = "";  // Clear existing table rows
        data.forEach(item => {
            const row = document.createElement("tr");
            Object.keys(item).forEach(key => {
                const cell = document.createElement("td");
                cell.textContent = item[key];
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
    }

    // Function to fetch and display JSON data
    function fetchData() {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                window.tableData = data;  // Store data globally for searching
                populateTable(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // Function to filter and display table rows based on search input
    function filterTable() {
        const query = document.getElementById('search-input').value.toLowerCase();
        const filteredData = window.tableData.filter(item => item.name.toLowerCase().includes(query));
        populateTable(filteredData);
    }

    // Event listener for search input
    document.getElementById('search-input').addEventListener('input', filterTable);

    // Fetch data on page load
    window.onload = fetchData;