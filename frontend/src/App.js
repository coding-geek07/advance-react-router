import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/RootLayout';
import ErrorElement from './pages/ErrorElement';
import EventsLayout from './pages/EventsLayout';

// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <RootLayout />, errorElement: <ErrorElement />, children: [
        { index: true, element: <HomePage /> },
        {
          path: 'events', element: <EventsLayout />, children: [
            { index: true, element: <EventsPage /> },
            { path: ':eventId', element: <EventDetailPage /> },
            { path: ':editEventId/edit', element: <EditEventPage /> }
          ]
        },
        { path: 'newEvent', element: <NewEventPage /> }
      ]
    }
  ])
  return <>
    <RouterProvider router={routes} />
  </>;
}

export default App;
