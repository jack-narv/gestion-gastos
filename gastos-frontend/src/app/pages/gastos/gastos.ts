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
    this.loading = true;

    this.gastosService.getGastos().subscribe(data => {
      this.gastos = data;
      this.aplicarFiltro();
      this.cdr.detectChanges();
      this.loading = false;
    });
  }

  agregarGasto() {
    this.loading = true;

    this.gastosService.addGasto(this.nuevoGasto).subscribe(() => {
      this.cargarGastos();
      this.nuevoGasto = { fecha: '', concepto: '', monto: 0 };
    });
  }

  eliminarGasto(gasto: Gasto) {
    this.loading = true;

    this.gastosService.deleteGasto(gasto.id).subscribe(() => {
      this.cargarGastos();
    });
  }

  aplicarFiltro() {
    this.loading = true;

    if (!this.mesSeleccionado) {
      this.gastosFiltrados = [...this.gastos];
    } else {
      this.gastosFiltrados = this.gastos.filter(g =>
        g.fecha.startsWith(this.mesSeleccionado)
      );
    }
    this.calcularTotal();

    this.loading = false;
  }

  calcularTotal() {
    this.totalGastos = this.gastosFiltrados.reduce(
      (total, g) => total + Number(g.monto),
      0
    );
  }
}
