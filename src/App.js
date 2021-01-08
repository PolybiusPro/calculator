import './App.css';
import {useState} from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  darkMode:{
    backgroundColor: 'black',
  },
  darkDisplay:{
    color: 'white'
  }
});

function App() {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const classes = useStyles();

  const handleDarkModeClick = () => {
    if(darkMode === false){
      setDarkMode(true);
    }else{
      setDarkMode(false);
    }
  }


  const handleButtonPress = content => () => {
    const num = parseFloat(value);

    if(content === "AC"){
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if(content === "±"){
      setValue((num * -1).toString());
      return;
    }

    if(content === "%"){
      setValue((num / 100).toString());
      setMemory(null);
      return;
    }
    if(content === "+"){
      if(operator !== null){
        if(operator === "+"){
          setMemory(memory + parseFloat(value));
        }
        else if(operator === "−"){
          setMemory(memory - parseFloat(value));
        }
        else if(operator === "×"){
          setMemory(memory * parseFloat(value));
        }
        else if(operator === "÷"){
          setMemory(memory / parseFloat(value));
        }
      }else{
        setMemory(parseFloat(value));
      }

      setValue("0");
      setOperator("+");
      return;
    }
    if(content === "−"){

      if(operator !== null){
        if(operator === "+"){
          setMemory(memory + parseFloat(value));
        }
        else if(operator === "−"){
          setMemory(memory - parseFloat(value));
        }
        else if(operator === "×"){
          setMemory(memory * parseFloat(value));
        }
        else if(operator === "÷"){
          setMemory(memory / parseFloat(value));
        }
      }else{
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("−");
      return;
    }
    if(content === "×"){
      if(operator !== null){
        if(operator === "+"){
          setMemory(memory + parseFloat(value));
        }
        else if(operator === "−"){
          setMemory(memory - parseFloat(value));
        }
        else if(operator === "×"){
          setMemory(memory * parseFloat(value));
        }
        else if(operator === "÷"){
          setMemory(memory / parseFloat(value));
        }
      }else{
        setMemory(parseFloat(value));
      }

      setValue("0");
      setOperator("×");
      return;
    }
    if(content === "÷"){
      if(operator !== null){
        if(operator === "+"){
          setMemory(memory + parseFloat(value));
        }
        else if(operator === "−"){
          setMemory(memory - parseFloat(value));
        }
        else if(operator === "×"){
          setMemory(memory * parseFloat(value));
        }
        else if(operator === "÷"){
          setMemory(memory / parseFloat(value));
        }
      }else{
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("÷");
      return;
    }

    if(content === "."){
      if(value.includes(".")) return;

      setValue(value + ".");
      return;
    }

    if(content === "="){
      if(!operator) return;

      if(operator === "+"){
        setValue((memory + parseFloat(value)).toString());
      }
      else if(operator === "−"){
        setValue((memory - parseFloat(value)).toString());
      }
      else if(operator === "×"){
        setValue((memory * parseFloat(value)).toString());
      }
      else if(operator === "÷"){
        setValue((memory / parseFloat(value)).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }

    if(value[value.length - 1] === '.'){
      setValue(value + content);
    }else{
      setValue(parseFloat(num + content).toString());
    }

  }

  return (
    <div className={darkMode ? classes.darkMode : "" }>
      <Header darkMode={handleDarkModeClick} />
      <Typography className={`display ${darkMode ? classes.darkDisplay : "" }`} align="right" variant="h3">
        {value}
      </Typography>
      <div className="buttons">
        <Grid container spacing={3} align="center">
          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="AC" type="function"/>
          </Grid>
          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="±" type="function"/>
          </Grid>
          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="%" type="function"/>
          </Grid>
          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="÷"  type="operator"/>
          </Grid>

          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="7" />
          </Grid>
          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="8" />
          </Grid>
          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="9" />
          </Grid>
          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="×"  type="operator"/>
          </Grid>

          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="4" />
          </Grid>
          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="5" />
          </Grid>
          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="6" />
          </Grid>
          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="−"  type="operator"/>
          </Grid>

          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="1" />
          </Grid>
          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="2" />
          </Grid>
          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="3" />
          </Grid>
          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="+"  type="operator"/>
          </Grid>

          <Grid item xs={6}>
            <Button onButtonClick={handleButtonPress} content="0" />
          </Grid>
          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="."/>
          </Grid>
          <Grid item xs={3}>
            <Button onButtonClick={handleButtonPress} content="="  type="operator"/>
          </Grid>

        </Grid>
      </div>

    </div>
  );
}

export default App;
