import React, { FormEventHandler } from 'react';
import { AlgorithmType } from '../sort/SortAnimator';

interface DataProps {
  setSpeed: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sortData: (algorithm?: AlgorithmType) => void;
  dataSize: {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    regenerateNewData: () => void;
    undoSort: () => void;
  };
  isDisabled: boolean;
  isSorted: boolean;
}

/**
 * @param props Necessary functions and state variables.
 * @returns The slider and buttons that affect the data set.
 */
const DataSetInputs = (props: DataProps) => {
  return (
    <div
      className="input_section"

    >
      <div className='input'>
        <h3>Generate Data:</h3>
        <input
          type="range"
          className="slider data"
          min={25}
          max={200}
          defaultValue={100}
          onInput={props.dataSize.handleChange}
          onChange={props.dataSize.handleChange}
          disabled={props.isDisabled}
        />
      </div>
      <div className='input'>
        <h3>Sort Speed:</h3>
        <input
          type="range"
          className="slider sort"
          min={0.1}
          max={1.0}
          step={0.0001}
          defaultValue={0.1}
          onInput={props.setSpeed}
          onChange={props.setSpeed}
          disabled={false}
        ></input>
      </div>
      <div className="left_buttons array_button">
        <button
          onClick={props.dataSize.regenerateNewData}
          disabled={props.isDisabled}
        >
          Randomize
        </button>
        <button
          id="undo_sort"
          onClick={props.dataSize.undoSort}
          disabled={!props.isSorted || props.isDisabled}
          style={{
            display:
              !props.isSorted || props.isDisabled ? 'inline-block' : 'inline-block',
            marginLeft: '1rem'
          }}
        >
          Undo
        </button>
      </div>
    </div>
  );
};

export default DataSetInputs;
