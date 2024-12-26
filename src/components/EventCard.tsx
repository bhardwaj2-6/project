import React from 'react';
import { Calendar, MapPin, Users, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { Event } from '../types/event';

interface EventCardProps {
  event: Event;
  isAdmin?: boolean;
  onEdit?: (event: Event) => void;
  onDelete?: (id: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  isAdmin,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200 hover:shadow-lg">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {event.title}
          </h3>
          <span className="px-2 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-100">
            {event.category}
          </span>
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{event.description}</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Calendar className="w-4 h-4 mr-2" />
            {format(new Date(event.date), 'PPP')}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="w-4 h-4 mr-2" />
            {event.location}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Users className="w-4 h-4 mr-2" />
            {event.registeredCount}/{event.capacity} registered
          </div>
          {event.poster && (
            <div className="flex items-center">
              <a
                href={event.poster}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
              >
                <FileText className="w-4 h-4 mr-2" />
                View Poster
              </a>
            </div>
          )}
        </div>
        {isAdmin && (
          <div className="mt-4 flex space-x-2">
            <button
              onClick={() => onEdit?.(event)}
              className="px-4 py-2 text-sm bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete?.(event.id)}
              className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};