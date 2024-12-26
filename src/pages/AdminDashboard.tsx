import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { EventCard } from '../components/EventCard';
import { EventForm } from '../components/EventForm';
import { useEventStore } from '../store/eventStore';
import { Event } from '../types/event';

export const AdminDashboard: React.FC = () => {
  const { events, addEvent, updateEvent, deleteEvent } = useEventStore();
  const [showForm, setShowForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const handleSubmit = (event: Event) => {
    if (editingEvent) {
      updateEvent(editingEvent.id, event);
    } else {
      addEvent({ ...event, id: Date.now().toString() });
    }
    setShowForm(false);
    setEditingEvent(null);
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setShowForm(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Event Management</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Event
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4">
              {editingEvent ? 'Edit Event' : 'Create New Event'}
            </h2>
            <EventForm
              event={editingEvent || undefined}
              onSubmit={handleSubmit}
              onCancel={() => {
                setShowForm(false);
                setEditingEvent(null);
              }}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            isAdmin={true}
            onEdit={handleEdit}
            onDelete={deleteEvent}
          />
        ))}
      </div>
    </div>
  );
};