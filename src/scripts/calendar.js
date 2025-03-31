import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import multiMonthPlugin from '@fullcalendar/multimonth';

export function initCalendar() {
  const calendarEl = document.getElementById('calendar');

  const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, multiMonthPlugin],
    initialView: 'dayGridMonth',
    events: JSON.parse(localStorage.getItem('rentalEvents')) || [],
    dateClick: function (info) {
      const amount = prompt('Введите сумму аренды:');
      if (amount) {
        calendar.addEvent({
          title: `₽${amount}`,
          start: info.dateStr,
          allDay: true
        });
        saveEventsToStorage(calendar.getEvents());
      }
    }
  });

  calendar.render();
  return calendar;
}

function saveEventsToStorage(events) {
  const eventsData = events.map(event => ({
    title: event.title,
    start: event.startStr
  }));
  localStorage.setItem('rentalEvents', JSON.stringify(eventsData));
}
