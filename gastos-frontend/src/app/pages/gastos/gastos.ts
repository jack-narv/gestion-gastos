import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Gasto } from '../../interfaces/gasto.interface';
import { GastosService } from '../../services/gasto.service';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gastos.html',
  styleUrls: ['./gastos.scss'],
})
export class Gastos implements OnInit {

  gastos: Gasto[] = [];
  gastosFiltrados: Gasto[] = [];
  totalGastos: number = 0;
  mesSeleccionado: string = '';
  mesEtiqueta: string = '';
  loading: boolean = false;

  // 👇 NO incluye id
  nuevoGasto = {
    fecha: '',
    concepto: '',
    monto: 0
  };

  constructor(
    private gastosService: GastosService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargarGastos();
  }

  cargarGastos() {
    // Trae todos los gastos y luego aplica el filtro seleccionado
    this.loading = true;

    this.gastosService.getGastos().subscribe(data => {
      this.gastos = data;
      this.aplicarFiltro();
      this.cdr.detectChanges();
      this.loading = false;
    });
  }

  agregarGasto() {
    // Guarda un nuevo gasto y reinicia el formulario
    this.loading = true;

    this.gastosService.addGasto(this.nuevoGasto).subscribe(() => {
      this.cargarGastos();
      this.nuevoGasto = { fecha: '', concepto: '', monto: 0 };
    });
  }

  eliminarGasto(gasto: Gasto) {
    // Confirma antes de eliminar un registro
    const confirmado = confirm(`¿Seguro que deseas eliminar el gasto "${gasto.concepto}" de $${gasto.monto}?`);
    if (!confirmado) {
      return;
    }

    this.loading = true;

    this.gastosService.deleteGasto(gasto.id).subscribe(() => {
      this.cargarGastos();
    });
  }

  aplicarFiltro() {
    // Aplica filtro por mes (si existe) y recalcula totales
    this.loading = true;

    const sinFiltro = !this.mesSeleccionado || this.mesSeleccionado.toLowerCase() === 'all';

    if (sinFiltro) {
      this.gastosFiltrados = [...this.gastos];
    } else {
      this.gastosFiltrados = this.gastos.filter(g =>
        g.fecha.startsWith(this.mesSeleccionado)
      );
    }

    this.actualizarMesEtiqueta();
    this.calcularTotal();

    this.loading = false;
  }

  calcularTotal() {
    // Acumula el monto de los gastos filtrados
    this.totalGastos = this.gastosFiltrados.reduce(
      (total, g) => total + Number(g.monto),
      0
    );
  }

  private actualizarMesEtiqueta() {
    // Genera la etiqueta legible del mes seleccionado o la limpia si es "all"
    if (!this.mesSeleccionado || this.mesSeleccionado.toLowerCase() === 'all') {
      this.mesEtiqueta = '';
      return;
    }

    const partes = this.mesSeleccionado.split('-');
    if (partes.length !== 2) {
      this.mesEtiqueta = '';
      return;
    }

    const [anio, mes] = partes;
    const fecha = new Date(Number(anio), Number(mes) - 1, 1);

    if (isNaN(fecha.getTime())) {
      this.mesEtiqueta = '';
      return;
    }

    const nombreMes = fecha.toLocaleString('es-ES', { month: 'long' });
    this.mesEtiqueta = nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1);
  }
}
