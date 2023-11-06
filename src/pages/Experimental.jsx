import React from 'react'
import ExperimentContainer from '../components/ExperimentContainer'
import SquaresColors from '../components/SquaresColors'
import SquaresBorders from '../components/SquaresBorders'

const Experimental = () => {
  return (
    <div className='page-container'>
      <h1 className='h1'>Experimental</h1>
      <p className='text'>Here you can find some experimental components</p>
      <div className='flex justify-center'>
        <ExperimentContainer />
      </div>
      <SquaresColors />
      <SquaresBorders />
    </div>
  )
}

export default Experimental