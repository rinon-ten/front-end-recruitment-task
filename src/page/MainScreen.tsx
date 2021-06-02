import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Main, ContentContainer } from '../styleComponents/Main'
import Joke from '../components/Joke'
import JokeControl from '../components/JokeControl'
import SaveJokes from '../components/SaveJokes'

export const MainScreen = () => {
  const {
    isLoading,
    randomJokeData,
    changeJoke,
    shouldJokeImageChange,
    listOfCategories,
    selectCategory,
    handleImpersonateInput,
    impersonateInputValue,
    downloadTxtFile,
    changeNumberOfJokes,
    numberOfJokes,
    incrementJokeNumbers,
    decrementJokeNumbers,
  } = useContext(GlobalContext)

  return (
    <Main>
      {!isLoading ? (
        <ContentContainer>
          <Joke
            randomJoke={randomJokeData}
            shouldJokeImageChange={shouldJokeImageChange}
          />
          <JokeControl
            selectCategory={selectCategory}
            categoriesList={listOfCategories}
            changeJoke={changeJoke}
            handleImpersonateInput={handleImpersonateInput}
            impersonateInputValue={impersonateInputValue}
          />
          <SaveJokes
            changeNumberOfJokes={changeNumberOfJokes}
            numberOfJokes={numberOfJokes}
            incrementJokeNumbers={incrementJokeNumbers}
            decrementJokeNumbers={decrementJokeNumbers}
            downloadTxtFile={downloadTxtFile}
          />
        </ContentContainer>
      ) : (
        <ContentContainer>
          <p>... Loading</p>
        </ContentContainer>
      )}
    </Main>
  )
}