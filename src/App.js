import Input from './components/Input'
import Button from './components/Button'
import { Container, Content, Row } from './styles'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }
  
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }
  const handleRemoveNumber = () => {
    setCurrentNumber(currentNumber.split('').slice(0, -1).join(''))
    console.log(currentNumber.length)
    if(currentNumber.length === 1){
      setCurrentNumber('0')
    }
  }
  const handleSumNumbers = () => {
    if(firstNumber ===  '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }
  const handleSubstractNumbers = () => {
    if(firstNumber ===  '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const substract = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(substract))
      setOperation('')
    }
  }
  const handleDivideNumbers = () => {
    if(firstNumber ===  '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    }else{
      const divide = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(divide))
      setOperation('')
    }
  }
  const handleMultiplyNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    }else{
      const multiply = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(multiply))
      setOperation('')
    }
  }
  const handleSquaredNumbers = () => {
      const squared = Number(currentNumber) * Number(currentNumber)
      setCurrentNumber(String(squared))
      handleSquaredNumbers()
  }
  const handlePercentNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber / 100))
      setCurrentNumber('0')
      setOperation('%')
    }else{
      const percent = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(percent))
      setOperation('')
    }
   }
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !==  '0'){
      switch(operation){
        case '+': handleSumNumbers()
        break
        case '-': handleSubstractNumbers()
        break
        case '/': handleDivideNumbers()
        break
        case '*': handleMultiplyNumbers()
        break
        case '%': handlePercentNumbers()
        break
        default: break;
      }
    }
  }
  return (
    <Container>
      <Content>
       <Input value={currentNumber}/>
       <Row>
       <Button label='%' onClick={handlePercentNumbers}/>
       <Button label='x²'onClick={handleSquaredNumbers}/>
       <Button label='c'onClick={handleOnClear}/>
       <Button label='<-' onClick={handleRemoveNumber}/>
       </Row>
       <Row>
       <Button label='7' onClick={() => handleAddNumber('7')}/>
       <Button label='8' onClick={() => handleAddNumber('8')}/>
       <Button label='9' onClick={() => handleAddNumber('9')}/>
       <Button label='x'onClick={handleMultiplyNumbers}/>
       </Row>
       <Row>
       <Button label='4' onClick={() => handleAddNumber('4')}/>
       <Button label='5' onClick={() => handleAddNumber('5')}/>
       <Button label='6' onClick={() => handleAddNumber('6')}/>
       <Button label='/'onClick={handleDivideNumbers}/>
       </Row>
       <Row>
       <Button label='1' onClick={() => handleAddNumber('1')}/>
       <Button label='2' onClick={() => handleAddNumber('2')}/>
       <Button label='3' onClick={() => handleAddNumber('3')}/>
       <Button label='+'onClick={handleSumNumbers}/>
       </Row>
       <Row>
       <Button label='.' onClick={() => handleAddNumber('.')}/>
       <Button label='0' onClick={() => handleAddNumber('0')}/>
       <Button label='=' onClick={handleEquals}/>
       <Button label='-'onClick={handleSubstractNumbers}/>
       </Row>
      </Content>
    </Container>
  );
}

export default App;
