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
    },
    education: {
      school: '',
      degree: '',
      from: '',
      to: '',
      description: '',
    },
  },
  status: {
    personal: false,
    additional: false,
    contact: false,
    education: false,
    employment: false,
  },
};

const informationReducer = (state = defaultState, action) => {
  const currentSnapshot = _.cloneDeep(state);
  const { type, payload } = action;
  const {
    status,
    information: { personal, additional, contact, employment, education },
  } = currentSnapshot;

  switch (type) {
    case 'ADD_PERSONAL': {
      _.assign(personal, payload);
      status.personal = true;
      return { ...currentSnapshot };
    }
    case 'ADD_ADDITIONAL': {
      _.assign(additional, payload);
      status.additional = true;
      return { ...currentSnapshot };
    }
    case 'ADD_CONTACT': {
      _.assign(contact, payload);
      status.contact = true;
      return { ...currentSnapshot };
    }
    case 'ADD_EMPLOYMENT': {
      _.assign(employment, payload);
      status.employment = true;
      return { ...currentSnapshot };
    }
    case 'ADD_EDUCATION': {
      _.assign(education, payload);
      status.education = true;
      return { ...currentSnapshot };
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

  const defaultValues = {
    defaultState,
    addPersonal: addPersonalHandler,
    addAdditional: addAdditionalHandler,
    addContact: addContactHandler,
    addEmployment: addEmploymentHandler,
    addEducation: addEducationHandler,
  };

  return (
    <InfoContext.Provider value={defaultValues}>
      {children}
    </InfoContext.Provider>
  );
};

export default InformationProvider;
