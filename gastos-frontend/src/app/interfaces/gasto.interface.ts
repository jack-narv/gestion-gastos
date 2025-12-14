export interface Gasto {
  id: number;
  fecha: string;
  concepto: string;
  monto: number;
}

// 👇 Tipo para creación (sin id)
export type NuevoGasto = Omit<Gasto, 'id'>;