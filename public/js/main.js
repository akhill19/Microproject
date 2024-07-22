document.getElementById('fetch-data').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        const container = document.getElementById('data-container');
        container.innerHTML = '';
        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'product';
            div.innerHTML = `<strong>ID:</strong> ${item.id}<br>
                             <strong>Name:</strong> ${item.name}<br>
                             <strong>Description:</strong> ${item.description}<br>
                             <strong>Price:</strong> $${item.price.toFixed(2)} <br><br>`;
            container.appendChild(div); 
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
