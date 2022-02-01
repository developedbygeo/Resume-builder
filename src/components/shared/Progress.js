import { useContext } from 'react';
import { InfoContext } from '../../store/infoContext';
import { ProgressBar } from './Container.styled';

const Progress = () => {
  const {
    defaultState: { status },
  } = useContext(InfoContext);

  const statusPercentage = Math.round(
    Object.values(status).filter((section) => section === true).length * 16.66
  );

  const percentageEval = statusPercentage > 0;

  return (
    <div style={{ background: '#31b1d8' }}>
      <ProgressBar barWidth={statusPercentage}>
        <div></div>
        {percentageEval && (
          <figcaption>{statusPercentage}% completed</figcaption>
        )}
      </ProgressBar>
    </div>
  );
};

export default Progress;
