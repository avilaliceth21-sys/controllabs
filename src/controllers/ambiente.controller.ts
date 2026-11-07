import { Request, Response } from 'express';

export class AmbienteController {
  // 1. Listar todos los espacios físicos y laboratorios
  public static getAllAmbientes = (req: Request, res: Response): void => {
    // TODO: Conectar con el servicio/repositorio para consultar los ambientes
    res.status(501).json({ success: false, message: 'Listar ambientes pendiente' });
  };

  // 2. Crear un nuevo ambiente especificando su capacidad y ubicación
  public static createAmbiente = (req: Request, res: Response): void => {
    // TODO: Guardar el nuevo ambiente usando la información enviada en req.body
    res.status(501).json({ success: false, message: 'Crear ambiente pendiente' });
  };

  // 3. Actualizar atributos específicos (capacidad o estado operativo) vía PATCH
  public static patchAmbiente = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: Modificar parcialmente los atributos del ambiente con este id usando req.body
    res.status(501).json({ success: false, message: `Actualización parcial del ambiente ${id} pendiente` });
  };
}