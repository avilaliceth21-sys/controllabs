import { Request, Response } from 'express';

export class UserController {
  // 1. Listar todos los usuarios
  public static getAllUsers = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: 'Listar usuarios pendiente' });
  };

  // 2. Crear un usuario
  public static createUser = (req: Request, res: Response): void => {
    res.status(501).json({ success: false, message: 'Crear usuario pendiente' });
  };

  // 3. Actualizar parcialmente (aquí usas PATCH como pide la guía)
  public static patchUser = (req: Request, res: Response): void => {
    const { id } = req.params;
    res.status(501).json({ success: false, message: `Actualizar parcial del usuario ${id} pendiente` });
  };
}