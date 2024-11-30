import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
/* Route imports */
import dashboardRoutes from './routes/dashboard.routes';
import productRoutes from './routes/product.routes'
import userRoutes from './routes/user.routes'
import expenseRoutes from './routes/expense.routes'

/* Config */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

/* Routes */
app.use('/dashboard', dashboardRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/expenses', expenseRoutes);

/* Server */
const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server started on port ${port}`);
});
