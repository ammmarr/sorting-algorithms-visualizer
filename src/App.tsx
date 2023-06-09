import DataSetState from './components/data-set/DataSetState';
import DataSetDisplay from './components/data-set/DataSetDisplay';
import SortAnimator from './components/sort/SortAnimator';
import Toolbar from './components/Toolbar';
import InfoBox from './components/info-box/InfoBox';
import InfoBoxState from './components/info-box/InfoBoxState';

/**
 * @returns The HTML of the full page
 */
const App = () => {
  // Don't change the value 45, it just works :/
  const dataState = DataSetState(100, 45);
  const animState = SortAnimator(dataState.dataSet);
  const infoState = InfoBoxState();

  dataState.functions.setResetSorted(animState.functions.resetSorted);

  return (
    <div id="app">
      <Toolbar
        dataState={dataState}
        animState={animState}
        infoState={infoState}
      />
      <DataSetDisplay
        dataSet={dataState.dataSet}
        statistics={animState.properties.statistics}
      />

      <InfoBox infoState={infoState} />
    </div>
  );
};

export default App;
