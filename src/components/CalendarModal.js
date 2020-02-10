import React from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from '../events';

const localizer = momentLocalizer(moment);

export default function CalendarModal() {
  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      });
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'white',
      }}
    >
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        defaultView={Views.MONTH}
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date(2015, 3, 12)}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={handleSelect}
        dayLayoutAlgorithm={'no-overlap'}
      />
    </div>
  );
}
