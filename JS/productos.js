document.addEventListener('DOMContentLoaded', () => {
    const createProductBtn = document.getElementById('create-product');

    createProductBtn.addEventListener('click', () => {
        // Lógica para crear un nuevo producto
        alert('Crear nuevo producto');
    });

    const editButtons = document.querySelectorAll('.edit-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');

    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Lógica para editar un producto
            alert('Editar producto');
        });
    });

    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Lógica para eliminar un producto
            alert('Eliminar producto');
        });
    });

    const searchInput = document.querySelector('.search-create input');
    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase();
        const rows = document.querySelectorAll('.product-table tbody tr');

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const productName = cells[1].textContent.toLowerCase();

            if (productName.includes(searchValue)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});
