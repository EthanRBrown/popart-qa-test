import React from 'react';
import renderer from 'react-test-renderer'
import ResistorInputs from '../ResistorInputs.js'

it('renders resistance values correctly', () => {
  const comp = renderer.create(<ResistorInputs r1={100} r2={100} requiv={50} />)
  expect(comp).toMatchSnapshot()
})

it('when values are missing, rendering is appropriate', () => {
  const comp = renderer.create(<ResistorInputs />)
  expect(comp).toMatchSnapshot()
})

