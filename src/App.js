import './App.css';
import React from 'react';

let audioFile = [
  {
    name: 'Q',
    audioName: 'heater1',
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3'
  },
  {
    name: 'W',
    audioName: 'heater2',
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3'
  },
  {
    name: 'E',
    audioName: 'heater3',
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3'
  },
  {
    name: 'A',
    audioName: 'heater4',
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3'
  },
  {
    name: 'S',
    audioName: 'clap',
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3'
  },
  {
    name: 'D',
    audioName: 'open-hh',
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3'
  },
  {
    name: 'Z',
    audioName: 'kick-n-hat',
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3'
  },
  {
    name: 'X',
    audioName: 'kick-n-hat',
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3'
  },
  {
    name: 'C',
    audioName: 'close-hh',
    source: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3'
  },
]

function App() {
  const [state, setState] = React.useState('')
  const playAudio = (id) => {
    const audio = document.getElementById(id);
    const findAudio = audioFile.find((audio) => audio.name === id);
    console.log(findAudio)
    setState(findAudio.audioName)
    audio.play();
  }

  const handleKeyPress = (event) => {
    const findAudio = audioFile.find((audio) => audio.name === event.key.toUpperCase());
    const audio = document.getElementById(findAudio.name);
    audio.play();
    setState(findAudio.audioName)
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);


  return (
   <div id="drum-machine" className='text-center'>
    {
      audioFile.map((audio)=> (
        <button onClick={()=> playAudio(audio.name)} id={audio.audioName} className='drum-pad' >{audio.name}
      <audio className='clip' id={audio.name} src={audio.source} />
    </button>
      ))
    }
    
    <div id='display'>
      display:{state}
    </div>
    </div>
  );
}

export default App;
