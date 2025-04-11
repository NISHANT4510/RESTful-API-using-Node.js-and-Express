
import express from 'express';
import { logger, validateUser } from './logger.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

// Dummy users
let users = [
  { id: 1, name: 'Nishant' },
  { id: 2, name: 'Amit' },
  { id: 3, name: 'Ravi' }
];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET single user
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// POST user
app.post('/user', validateUser, (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT user
app.put('/user/:id', validateUser, (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  user.name = req.body.name;
  res.json(user);
});

// DELETE user
app.delete('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userExists = users.some(u => u.id === userId);
  
    if (!userExists) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    users = users.filter(u => u.id !== userId);
    res.status(200).json({ message: `User ${userId} deleted successfully` });
  });

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
