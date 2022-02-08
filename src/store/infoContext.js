import React, { useReducer } from 'react';
import _ from 'lodash';

export const InfoContext = React.createContext({
  information: [],
  addImage: () => {},
  addInformation: () => {},
  addPersonal: () => {},
  addAdditional: () => {},
  addContact: () => {},
  addEmployment: () => {},
  addEducation: () => {},
  addExtraInfo: () => {},
  reset: () => {},
});

const defaultState = {
  information: {
    imageExists: false,
    imageInfo: null,
    personal: {
      firstName: '',
      lastName: '',
      role: '',
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
    extraInfo: {
      skills: [],
      languages: [],
    },
  },
  status: {
    personal: false,
    additional: false,
    contact: false,
    education: false,
    employment: false,
    languagesSkills: false,
  },
  flag: {
    resetFlag: false,
  },
};

const informationReducer = (state = defaultState, action) => {
  const currentSnapshot = _.cloneDeep(state);
  const { type, payload, identifier } = action;
  const {
    status,
    information,
    flag,
    information: {
      personal,
      additional,
      contact,
      employment,
      education,
      extraInfo: { skills, languages },
    },
  } = currentSnapshot;

  switch (type) {
    case 'ADD_IMAGE': {
      currentSnapshot.information.imageExists = true;
      currentSnapshot.information.imageInfo = {
        path: payload.path,
        size: payload.size,
      };
      return currentSnapshot;
    }
    case 'ADD_PERSONAL': {
      _.assign(personal, payload);
      status.personal = true;
      flag.resetFlag = false;
      return currentSnapshot;
    }
    case 'ADD_ADDITIONAL': {
      _.assign(additional, payload);
      status.additional = true;
      flag.resetFlag = false;
      return currentSnapshot;
    }
    case 'ADD_CONTACT': {
      _.assign(contact, payload);
      status.contact = true;
      return currentSnapshot;
    }
    case 'ADD_EMPLOYMENT': {
      // runtime check if its the original
      if (employment.title === '' || !identifier) {
        _.assign(employment, payload);
        status.employment = true;
      } else {
        information[`employment_${identifier}`] = payload;
        information[`employment_${identifier}`].key = identifier;
      }
      flag.resetFlag = false;
      return currentSnapshot;
    }
    case 'ADD_EDUCATION': {
      if (education.degree === '' || !identifier) {
        _.assign(education, payload);
        status.education = true;
      } else {
        information[`education_${identifier}`] = payload;
        information[`education_${identifier}`].key = identifier;
      }
      flag.resetFlag = false;
      return currentSnapshot;
    }
    case 'ADD_EXTRA_INFO': {
      const [sanitizedSkills, sanitizedLanguages] = [
        _.compact(payload.skills),
        _.compact(payload.languages),
      ];
      _.assign(skills, sanitizedSkills);
      _.assign(languages, sanitizedLanguages);
      status.languagesSkills = true;
      flag.resetFlag = false;
      return currentSnapshot;
    }
    case 'RESET': {
      flag.resetFlag = true;
      return { ...defaultState, flag };
    }
    default: {
      return currentSnapshot;
    }
  }
};

const InformationProvider = ({ children }) => {
  const [currentState, dispatchFn] = useReducer(
    informationReducer,
    defaultState
  );

  const addImageHandler = (path, size) => {
    dispatchFn({ type: 'ADD_IMAGE', payload: path, size });
  };
  const addPersonalHandler = (details) => {
    dispatchFn({ type: 'ADD_PERSONAL', payload: details });
  };
  const addAdditionalHandler = (details) => {
    dispatchFn({ type: 'ADD_ADDITIONAL', payload: details });
  };
  const addContactHandler = (details) => {
    dispatchFn({ type: 'ADD_CONTACT', payload: details });
  };
  const addEmploymentHandler = (details, identifier) => {
    dispatchFn({ type: 'ADD_EMPLOYMENT', payload: details, identifier });
  };
  const addEducationHandler = (details, identifier) => {
    dispatchFn({ type: 'ADD_EDUCATION', payload: details, identifier });
  };
  const addExtraInfoHandler = (details) => {
    dispatchFn({ type: 'ADD_EXTRA_INFO', payload: details });
  };
  const resetHandler = () => {
    dispatchFn({ type: 'RESET' });
  };

  const defaultValues = {
    defaultState: currentState,
    addImage: addImageHandler,
    addPersonal: addPersonalHandler,
    addAdditional: addAdditionalHandler,
    addContact: addContactHandler,
    addEmployment: addEmploymentHandler,
    addEducation: addEducationHandler,
    addExtraInfo: addExtraInfoHandler,
    reset: resetHandler,
  };

  return (
    <InfoContext.Provider value={defaultValues}>
      {children}
    </InfoContext.Provider>
  );
};

export default InformationProvider;
