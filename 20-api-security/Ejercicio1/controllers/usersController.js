let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ];
  
  export const getAllUsers = (req, res) => {
    res.status(200).json(users);
  };
  
  export const getUserById = (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }
    res.status(200).json(user);
  };
  
  export const createUser = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).send('Faltan datos');
    }
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  export const updateUser = (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).send('Faltan datos');
    }
    user.name = name;
    user.email = email;
    res.status(200).json(user);
  };
  
  export const deleteUser = (req, res) => {
    const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
      return res.status(404).send('Usuario no encontrado');
    }
    users.splice(userIndex, 1);
    res.status(200).send('Usuario eliminado');
  };