import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('')
  // onChange
  const [guesses, setGuesses] = useState([])
  // array of submitted guesses
  // each guess is an array
  const [history, setHistory] = useState([])
  // no duplicate guesses
  // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false)
  //

  const formatGuess = ()=> {

  }
  // guess를 guesses state에 추가
  // guess가 solution과 일치하면 isCorrect를 true로 업데이트
  // turn state에 + 1
  const addNewGuess = () => {

  }

  // 입력값을 감지
  // enter눌렀을때 addNewGuess
  const handleKeyup = () => {
    
  }
 return [turn, currentGuess, guesses, isCorrect, handleKeyup]
 
export default useWordle;