import { useContext } from 'react';
import { InfoContext } from '../../store/infoContext';
import { ProgressBar, ProgressFigcaption } from './Container.styled';

const Progress = () => {
  const {
    defaultState: { status },
  } = useContext(InfoContext);

  const statusPercentage = Math.round(
    Object.values(status).filter((section) => section === true).length * 16.66
  );

  const percentageEval = statusPercentage > 0;
  const preferableFontSize = statusPercentage < 20 ? '1.2rem' : null;

  return (
    <div className="progressWrap">
      <ProgressBar barWidth={statusPercentage}>
        <div></div>
        {percentageEval && (
          <ProgressFigcaption fontSize={preferableFontSize}>
            {statusPercentage}% completed
          </ProgressFigcaption>
        )}
      </ProgressBar>
    </div>
  );
};

export default Progress;
