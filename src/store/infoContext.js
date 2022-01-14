import React, { useReducer, useEffect } from 'react';
import _ from 'lodash';

export const InfoContext = React.createContext({
  information: [],
  addInformation: () => {},
});

const defaultState = {
  information: {
    personal: {
      firstName: '',
      lastName: '',
      PersonalStatement: '',
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

const informationReducer = (state = defaultValues, action) => {
  const currentSnapshot = _.cloneDeep(state);
  const {
    information: { personal, additional, contact, employment, education },
  } = currentSnapshot;

  switch (action.type) {
    case 'UPDATE_PERSONAL': {
    }
    case 'UPDATE_ADDITIONAL': {
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
    dispatchFn({ type: 'UPDATE_PERSONAL', payload: details });
  };
  const addAdditionalHandler = (details) => {
    dispatchFn({ type: 'UPDATE_ADDITIONAL', payload: details });
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
