type StatisticsProps = {
  statistics: {
    comparisons: number;
    swaps: number;
  };
  length: number;
};

const Statistics = (props: StatisticsProps) => {
  return (
    <div className="statistics">
      <h4>Number of bars = {props.length}</h4>
      <h4>
        Comparisons = {props.statistics.comparisons}

      </h4>
      <h4>
        Swaps = {props.statistics.swaps}
      </h4>
    </div>
  );
};

export default Statistics;
