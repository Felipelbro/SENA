// Datos iniciales
let usuarios = [
    {id: '001', nombre: 'Antonio', apellido: 'Sanchez', cedula: '1057896449', correo: 'anto@gmail.com', telefono: '3054220321', cargo: 'Empleado'},
    {id: '002', nombre: 'Martha', apellido: 'Messi', cedula: '1584692468', correo: 'mar@gmail.com', telefono: '3134582640', cargo: 'Empleado'},
    {id: '003', nombre: 'Sofia', apellido: 'Hoyos', cedula: '1269874536', correo: 'sofi@gmail.com', telefono: '3144620941', cargo: 'Empleado'}
];

// Cargar usuarios en la tabla
function loadUsers() {
    const tbody = document.getElementById('user-tbody');
    tbody.innerHTML = '';
    usuarios.forEach((usuario, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.cedula}</td>
            <td>${usuario.correo}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.cargo}</td>
            <td>
                <button class="edit-button" onclick="openEditUserModal(${index})">✏️</button>
                <button class="delete-button" onclick="deleteUser(${index})">🗑️</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Abrir modal para crear usuario
function openCreateUserModal() {
    document.getElementById('user-form').reset();
    document.getElementById('user-id').value = '';
    document.getElementById('modal-title').innerText = 'Crear Usuario';
    document.getElementById('user-modal').style.display = 'block';
}

// Abrir modal para editar usuario
function openEditUserModal(index) {
    const usuario = usuarios[index];
    document.getElementById('user-id').value = usuario.id;
    document.getElementById('nombre').value = usuario.nombre;
    document.getElementById('apellido').value = usuario.apellido;
    document.getElementById('cedula').value = usuario.cedula;
    document.getElementById('correo').value = usuario.correo;
    document.getElementById('telefono').value = usuario.telefono;
    document.getElementById('cargo').value = usuario.cargo;
    document.getElementById('modal-title').innerText = 'Editar Usuario';
    document.getElementById('user-modal').style.display = 'block';
}

// Cerrar modal
function closeModal() {
    document.getElementById('user-modal').style.display = 'none';
}

// Guardar usuario (crear o editar)
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.getElementById('user-id').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const cedula = document.getElementById('cedula').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const cargo = document.getElementById('cargo').value;
    
    if (id) {
        // Editar usuario
        const index = usuarios.findIndex(user => user.id === id);
        usuarios[index] = { id, nombre, apellido, cedula, correo, telefono, cargo };
    } else {
        // Crear usuario
        const newId = (usuarios.length + 1).toString().padStart(3, '0');
        usuarios.push({ id: newId, nombre, apellido, cedula, correo, telefono, cargo });
    }
    
    loadUsers();
    closeModal();
});

// Eliminar usuario
function deleteUser(index) {
    usuarios.splice(index, 1);
    loadUsers();
}

// Buscar usuario
function searchUser() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredUsers = usuarios.filter(usuario => 
        usuario.nombre.toLowerCase().includes(query) ||
        usuario.apellido.toLowerCase().includes(query) ||
        usuario.cedula.toLowerCase().includes(query) ||
        usuario.correo.toLowerCase().includes(query) ||
        usuario.telefono.toLowerCase().includes(query) ||
        usuario.cargo.toLowerCase().includes(query)
    );
    displayUsers(filteredUsers);
}

// Mostrar usuarios filtrados en la tabla
function displayUsers(users) {  
    const tbody = document.getElementById('user-tbody');
    tbody.innerHTML = '';
    users.forEach((usuario, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.cedula}</td>
            <td>${usuario.correo}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.cargo}</td>
            <td>
                <button class="edit-button" onclick="openEditUserModal(${index})">✏️</button>
                <button class="delete-button" onclick="deleteUser(${index})">🗑️</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Inicializar tabla de usuarios
loadUsers();
