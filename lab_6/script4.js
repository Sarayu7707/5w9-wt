async function fetchData() {
    const loadingIndicator = document.getElementById('loading');
    const dataTable = document.getElementById('data');

    try {
        // Show loading, hide table initially
        loadingIndicator.style.display = 'block';
        dataTable.style.display = 'none';

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();
        renderData(users);
        
        // Show table after data is ready
        dataTable.style.display = 'table';
    } catch (error) {
        console.error('There was a problem fetching the data:', error);
        alert("Failed to fetch data. Please check your connection.");
    } finally {
        loadingIndicator.style.display = 'none';
    }
}

function renderData(data) {
    const dataBody = document.getElementById('dataBody');
    dataBody.innerHTML = ''; // Clear previous content

    data.forEach(user => {
        const row = document.createElement('tr');
        // Correct use of backticks for template literals
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        `;
        dataBody.appendChild(row);
    });
}

// Initialize the fetch
fetchData();
