import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/index';
import { requestLogger } from './middlewares/logger.middleware';
import { globalErrorHandler } from './middlewares/errorHandler.middleware';

const app = express();

// 1. Aquí van exactamente las líneas que mencionas (CORS y el Logger de auditoría)
app.use(cors());
app.use(requestLogger);

// 2. Parser de JSON (debe ir después del logger y antes de las rutas)
app.use(express.json());

// 3. Ruta de salud del servidor
app.get('/api/v1/health', (_req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'ControlLabs API operando correctamente',
    timestamp: new Date().toISOString()
  });
});

// 4. Montaje de todas las rutas de la API
app.use('/api/v1', apiRoutes);

// 5. Manejador para cuando una ruta no existe (404)
app.use((_req, res) => {
  res.status(404).json({ success: false, error: 'Ruta no encontrada.' });
});

// 6. El bombero / manejador global de errores (siempre al final de todo)
app.use(globalErrorHandler);

export default app;
