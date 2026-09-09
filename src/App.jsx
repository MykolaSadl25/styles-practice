import './App.css';
import events from "./upcoming-events.json";
import Section from './components/Section/Section';
import Title from './components/Title/Title';
import EventsList from './components/EventsList/EventsList';

function App() {

  return (
    <>
      <Section>
        <Title text="24th Core Worlds Coalition Conference"/>
        <EventsList eventsData={events}/>
      </Section>
    </>
  )
}

export default App
