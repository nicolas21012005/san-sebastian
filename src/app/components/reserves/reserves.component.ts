import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'

@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.scss']
})
export class ReservesComponent {

  calendarOptions: CalendarOptions;

  constructor() {
    this.calendarOptions = {
      plugins: [dayGridPlugin], // Agrega el plugin dayGridPlugin
      initialView: 'dayGridMonth', // Vista inicial del calendario (mes)
      selectable: true, // Permitir la selección de rangos de fechas
      events: [ /* Tus eventos aquí */ ],
      select: this.handleDateSelection.bind(this) // Manejador de selección de fechas
    };
  }

  handleDateSelection(info: any): void {
    const startDate = info.startStr;
    const endDate = info.endStr;

    // Lógica para procesar la selección del rango de fechas
    console.log('Fecha de inicio:', startDate);
    console.log('Fecha de fin:', endDate);
  }
}
