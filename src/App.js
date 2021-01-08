import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import Typography from '@material-ui/core/Typography';

function App() {

  return (
    <div className="App">
      <Header />
      <Typography className="display" align="right" variant="h2">
        Hello World
      </Typography>

    </div>
  );
}

export default App;
