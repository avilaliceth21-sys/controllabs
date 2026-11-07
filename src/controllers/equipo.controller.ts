import { Request, Response } from 'express';

export class EquipoController {
  // 1. Listar todos los equipos o filtrar por ambiente (ej: ?ambienteId=1)
  public static getAllEquipos = (req: Request, res: Response): void => {
    // TODO: Consultar equipos en la base de datos aplicando filtros de req.query si existen
    res.status(501).json({ success: false, message: 'Listar y filtrar equipos pendiente' });
  };

  // 2. Registrar un nuevo equipo vinculado a un ambiente de laboratorio
  public static createEquipo = (req: Request, res: Response): void => {
    // TODO: Guardar el nuevo equipo usando los datos de req.body
    res.status(501).json({ success: false, message: 'Crear equipo pendiente' });
  };

  // 3. Actualizar de forma parcial el estado técnico o ubicación usando PATCH
  public static patchEquipo = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: Modificar parcialmente el equipo con este id usando req.body
    res.status(501).json({ success: false, message: `Actualización parcial del equipo ${id} pendiente` });
  };
}