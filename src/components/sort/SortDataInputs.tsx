import React, { useState } from 'react';
import { AlgorithmType } from './SortAnimator';
import SortButtons from './SortButtons';

interface ButtonProps {
  setSpeed: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sortData: (algorithm?: AlgorithmType) => void;
  isSorted: boolean;
  isDisabled: boolean;
  infoState: {
    toggleInfoBox: (enabled?: boolean) => void;
    setAlgo: (algo: AlgorithmType) => void;
  };
}

const SortDataInputs = (props: ButtonProps) => {
  const [selectedAlgo, setSelectedAlgo] = useState<AlgorithmType>('bubble');

  const changeAlgo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.infoState.setAlgo(e.target.value as AlgorithmType);
    setSelectedAlgo(e.target.value as AlgorithmType);
  };

  return (
    <div
      className="input_section "
      id='left_input_section'
    >

      <SortButtons
        selectedAlgo={selectedAlgo}
        changeAlgo={changeAlgo}
        sortProps={props}
      />
    </div>
  );
};

export default SortDataInputs;
