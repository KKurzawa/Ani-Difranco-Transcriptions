import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home/Home.jsx';
import AboutMe from './Pages/AboutMe/AboutMe.jsx';
import Error from './Pages/Error/Error.jsx';
import TranscriptionsAz from './Pages/TranscriptionsAz/TranscriptionsaAz.jsx';
import ByTuning from './Pages/ByTuning/ByTuning.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import SingleTranscription from './Pages/SingleTranscription/SingleTranscription.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/AboutMe',
        element: <AboutMe />
      },
      {
        path: '/TranscriptionsAz',
        element: <TranscriptionsAz />
      },
      {
        path: '/ByTuning',
        element: <ByTuning />
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/SingleTranscription/:id',
        element: <SingleTranscription />,
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
