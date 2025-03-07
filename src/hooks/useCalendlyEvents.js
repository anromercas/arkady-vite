import { useEffect, useState } from 'react';

const useCalendlyEvents = () => {
  const [events, setEvents] = useState([]);
  const apiKey = import.meta.env.VITE_CALENDLY_API_KEY;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          'https://api.calendly.com/scheduled_events',
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Error al obtener eventos');
        }

        const data = await response.json();
        console.log('calendly events ', data);
        setEvents(data.collection);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchEvents();
  }, [apiKey]);

  return events;
};

export default useCalendlyEvents;
