import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;
const SECRET_KEY = 'your_secret_key'; // Mantenha isso seguro!

app.use(cors());
app.use(bodyParser.json());

let users = []; // Simulação de banco de dados

// Rota de registro
app.post('/auth/register', (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashedPassword });
  res.status(201).send({ message: 'User registered successfully!' });
});

// Rota de login
app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).send('User not found.');

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

  const token = jwt.sign({ id: user.username }, SECRET_KEY, { expiresIn: 86400 }); // 24 horas
  res.status(200).send({ auth: true, token });
});

// Middleware para verificar o token
const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    req.userId = decoded.id;
    next();
  });
};

// Rota protegida
app.get('/api/protected', verifyToken, (req, res) => {
  res.status(200).send('This is a protected route.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
