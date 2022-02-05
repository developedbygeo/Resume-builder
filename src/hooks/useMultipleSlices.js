import { useContext } from 'react';
import { InfoContext } from '../store/infoContext';

// locates and returns all context slices that are based on the identifier - useful for retrieving additional employment & education history
const useMultipleSlices = (identifier) => {
  const {
    defaultState: { information },
  } = useContext(InfoContext);

  //   filters the information object, retrieving the keys and returns an array of objects that match the identifier - this will always return an array of at least 1 object
  const retrievedKeys = Object.keys(information).filter((element) =>
    element.includes(identifier)
  );
  const retrievedObjects = retrievedKeys.map((object) => information[object]);

  return retrievedObjects;
};

export default useMultipleSlices;
