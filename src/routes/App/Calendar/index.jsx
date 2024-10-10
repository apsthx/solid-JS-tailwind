import { createSignal, onMount } from "solid-js";
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

export default function AppCalendar() {
  let calendarRef;
  const [eventTitle, setEventTitle] = createSignal('');
  const [eventColor, setEventColor] = createSignal('primary');
  const [startDate, setStartDate] = createSignal('');
  const [endDate, setEndDate] = createSignal('');
  
  const events = [
    { title: "Event Conf.", start: "2024-09-01", end: "2024-09-01", color: 'red' },
    { title: "Seminar #4", start: "2024-09-08", color: 'green' },
    // ... รายการ events อื่น ๆ
  ];

  const addEvent = () => {
    const newEvent = {
      title: eventTitle(),
      start: startDate(),
      end: endDate(),
      color: eventColor()
    };
    events.push(newEvent);
    // re-render the calendar with the new event
    const calendar = new Calendar(calendarRef, {
      plugins: [dayGridPlugin, timeGridPlugin],
      initialView: 'dayGridMonth',
      events: events
    });
    calendar.render();
    // close modal
    const modal = new bootstrap.Modal(document.getElementById('eventModal'));
    modal.hide();
  };

  onMount(() => {
    const calendar = new Calendar(calendarRef, {
      plugins: [dayGridPlugin, timeGridPlugin],
      initialView: 'dayGridMonth',
      events: events,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }
    });
    calendar.render();
  });

  return (
    <div class="container-fluid mw-100">
      <div class="page-titles mb-7 mb-md-5">
        <div class="row">
          <div class="col-lg-8 col-md-6 col-12 align-self-center">
            <h2 class="mb-0 fw-bolder fs-8">Calendar</h2>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-center justify-content-end">
            <a href="javascript:void(0)" class="btn btn-primary d-flex align-items-center ms-2" data-bs-toggle="modal" data-bs-target="#eventModal">
              <i class="ti ti-plus me-1" />
              Add Event
            </a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body calender-sidebar app-calendar">
          <div ref={calendarRef} />
        </div>
      </div>

      {/* Modal for Add/Edit Event */}
      <div class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="eventModalLabel">Add / Edit Event</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12">
                  <label class="form-label">Event Title</label>
                  <input type="text" class="form-control" value={eventTitle()} onInput={(e) => setEventTitle(e.target.value)} />
                </div>
                <div class="col-md-12 mt-3">
                  <label class="form-label">Event Color</label>
                  <div class="d-flex">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="event-color" value="danger" onChange={() => setEventColor('red')} />
                      <label class="form-check-label">Danger</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="event-color" value="success" onChange={() => setEventColor('green')} />
                      <label class="form-check-label">Success</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="event-color" value="primary" onChange={() => setEventColor('blue')} defaultChecked />
                      <label class="form-check-label">Primary</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="event-color" value="warning" onChange={() => setEventColor('yellow')} />
                      <label class="form-check-label">Warning</label>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 mt-3">
                  <label class="form-label">Enter Start Date</label>
                  <input type="date" class="form-control" value={startDate()} onInput={(e) => setStartDate(e.target.value)} />
                </div>
                <div class="col-md-12 mt-3">
                  <label class="form-label">Enter End Date</label>
                  <input type="date" class="form-control" value={endDate()} onInput={(e) => setEndDate(e.target.value)} />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn bg-danger-subtle text-danger" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={addEvent}>Add Event</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
