import React, { useReducer } from 'react';
import _ from 'lodash';

export const InfoContext = React.createContext({
  information: [],
  addInformation: () => {},
});

const defaultState = {
  information: {
    imageExists: false,
    personal: {
      firstName: '',
      lastName: '',
      personalStatement: '',
    },
    additional: {
      country: '',
      city: '',
      postal: '',
    },
    contact: {
      email: '',
      phone: '',
      linkedin: '',
    },
    employment: {
      title: '',
      employer: '',
      from: '',
      to: '',
      location: '',
      description: '',
      currentStatus: false,
    },
    education: {
      school: '',
      degree: '',
      from: '',
      to: '',
      description: '',
      currentStatus: false,
    },
  },
};

const informationReducer = (state = defaultState, action) => {
  const currentSnapshot = _.cloneDeep(state);
  const { type, payload } = action;
  const {
    information: { personal },
  } = currentSnapshot;

  switch (type) {
    case 'ADD_PERSONAL': {
      _.assign(personal, payload);
      return { ...currentSnapshot };
    }
    case 'ADD_ADDITIONAL': {
    }
    case 'ADD_CONTACT': {
    }
    case 'ADD_EMPLOYMENT': {
    }
    case 'ADD_EDUCATION': {
    }
    case 'UPDATE_EXISTING': {
    }
  }
};

const InformationProvider = ({ children }) => {
  const [currentState, dispatchFn] = useReducer(
    informationReducer,
    defaultState
  );

  const addPersonalHandler = (details) => {
    dispatchFn({ type: 'ADD_PERSONAL', payload: details });
  };
  const addAdditionalHandler = (details) => {
    dispatchFn({ type: 'ADD_ADDITIONAL', payload: details });
  };
  const addContactHandler = (details) => {
    dispatchFn({ type: 'ADD_CONTACT', payload: details });
  };
  const addEmploymentHandler = (details) => {
    dispatchFn({ type: 'ADD_EMPLOYMENT', payload: details });
  };
  const addEducationHandler = (details) => {
    dispatchFn({ type: 'ADD_EDUCATION', payload: details });
  };
  const updateExistingHandler = (update) => {
    dispatchFn({ type: 'UPDATE_EXISTING', payload: update });
  };

  const defaultValues = {
    defaultState,
    addPersonal: addPersonalHandler,
    addAdditional: addAdditionalHandler,
    addContact: addContactHandler,
    addEmployment: addEmploymentHandler,
    addEducation: addEducationHandler,
    updateInfo: updateExistingHandler,
  };

  return (
    <InfoContext.Provider value={defaultValues}>
      {children}
    </InfoContext.Provider>
  );
};

export default InformationProvider;
