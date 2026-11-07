import { Request, Response } from 'express';

export class PrestamoController {
  // 1. Crear un nuevo préstamo (POST /loans)
  public static createLoan = (req: Request, res: Response): void => {
    // TODO: llamar al servicio con req.body y responder 201 con el préstamo creado.
    res.status(501).json({
      success: false,
      message: 'El registro de préstamos todavía no está implementado.'
    });
  };

  // 2. Consultar historial por filtros (GET /loans/search)
  public static getLoansByFilter = (req: Request, res: Response): void => {
    // TODO: tomar los filtros de req.query, llamar al servicio y responder con los resultados.
    res.status(501).json({
      success: false,
      message: 'La consulta del historial todavía no está implementada.'
    });
  };

  // 3. Consultar préstamo por ID (GET /loans/:id)
  public static getLoanById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: pasar id a la operación de consulta y responder con el préstamo encontrado.
    res.status(501).json({
      success: false,
      message: `La consulta del préstamo ${id} todavía no está implementada.`
    });
  };

  // 4. Aceptar inventario de préstamo (PUT /loans/:id/accept)
  public static acceptLoanInventory = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: pasar id a la operación de aceptación y responder con el resultado.
    res.status(501).json({
      success: false,
      message: `La aceptación del préstamo ${id} todavía no está implementada.`
    });
  };
}
