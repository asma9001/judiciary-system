const FormData = [
  // **********************Petition Form Data**************
  {
    heading: "State the Name of the Deceased?",
    subHeading: "Use the name on the death certificate",
    fields: [
      { label: "First name", inputType: "text", name: "firstName" },
      { label: "Last name", inputType: "text", name: "lastName" },
    ],
    buttonName: "Save & Continue",
  },
  {
    heading: "Select Deceased Gender:",
    subHeading: "Deceased is a male /female",
    selected: "Male",
    inputType: "radio",
    genderSelection: {
      options: [
        { id: 1, label: "Male", value: "male" },
        { id: 2, label: "Female", value: "female" },
      ],
    },
    buttonName: "Save & Continue",
  },
  {
    heading: "State the address of the deceased:",

    fields: [
      {
        label: "Address",
        inputType: "text",
        name: "address",
      },
      {
        label: "Island",
        value: "island",
        name: "island",
        inputType: "select",
        options: [
          { value: "", label: "Select Province" },
          { value: "abaco", label: "Abaco" },
          { value: "acklins", label: "Acklins" },
          { value: "andros", label: "Andros" },
          { value: "berry island", label: "Berry Islands" },
          { value: "cat island", label: "Cat Island" },
        ],
      },
      {
        label: "City",
        inputType: "text",
        name: "city",
      },
      {
        label: "Country",
        value: "country",
        name: "country",
        inputType: "select",
        options: [
          { value: "", label: "Select a Country" },
          { value: "the bahamas", label: "The Bahamas" },
          { value: "afghanistan", label: "Afghanistan" },
          { value: "armenia", label: "Armenia" },
          { value: "belize", label: "Belize" },
          { value: "bangladesh", label: "Bangladesh" },
        ],
      },
    ],
    inputType: "text",
    buttonName: "Save & Continue",
  },
  {
    heading: "Nature of grant sought?",

    inputType: "radio",
    genderSelection: {
      selected: "Probate",
      options: [
        {
          id: 1,
          label: "Probate",
          value: "Probate",
        },
        {
          id: 2,
          label: "Resealing",
          value: "Resealing",
        },
        {
          id: 3,
          label: "Letters of Administration",
          value: "Letters of Administration",
        },
        {
          id: 4,
          label: "Letters of Administration with the Will annexed",
          value: "Letters of Administration with the Will annexed",
        },
      ],
    },
    buttonName: "Save & Continue",
  },

  //************************ */ Executor Form Data ******************

  {
    heading: "How many Applicants are there?",
    subHeading: "only up to 4 Applicants can apply",
    applicantsSelection: {
      selected: "One",
      options: [
        { id: 1, label: "One", value: "One" },
        { id: 2, label: "Two", value: "Two" },
        { id: 3, label: "Three", value: "Three" },
        { id: 4, label: "Four", value: "Four" },
      ],
    },
    buttonName: "Save & Continue",
  },
  {
    heading: "State the name of applicant:",
    subHeading: "Use the name on the National ID",
    fields: [
      { label: "First name", inputType: "text", name: "firstName" },
      { label: "Last name", inputType: "text", name: "lastName" },
    ],
    buttonName: "Save & Continue",
  },
  {
    heading: "State the address of Applicant:",

    fields: [
      {
        label: "Address",
        inputType: "text",
        name: "address",
      },
      {
        label: "Island",
        value: "island",
        name: "island",
        inputType: "select",
        options: [
          { value: "", label: "Select Province" },
          { value: "abaco", label: "Abaco" },
          { value: "acklins", label: "Acklins" },
          { value: "andros", label: "Andros" },
          { value: "berry island", label: "Berry Islands" },
          { value: "cat island", label: "Cat Island" },
        ],
      },
      {
        label: "City",
        inputType: "text",
        name: "city",
      },
      {
        label: "Country",
        value: "country",
        name: "country",
        inputType: "select",
        options: [
          { value: "", label: "Select a Country" },
          { value: "the bahamas", label: "The Bahamas" },
          { value: "afghanistan", label: "Afghanistan" },
          { value: "armenia", label: "Armenia" },
          { value: "belize", label: "Belize" },
          { value: "bangladesh", label: "Bangladesh" },
        ],
      },
    ],
    inputType: "text",
    buttonName: "Save & Continue",
  },
  {
    heading: "Occupation of Applicant:",
    subHeading: "Use the name on the National ID",
    label: "Occupation",
    inputType: "text",
    name: "occupation",
    buttonName: "Save & Continue",
  },
  {
    heading: "Is there a Codicil?",
    selected: "Yes",
    inputType: "radio",
    codicilSelection: {
      options: [
        { id: 1, label: "Yes", value: "Yes" },
        { id: 2, label: "No", value: "No" },
      ],
    },
    buttonName: "Save & Continue",
  },
  {
    heading: "Date of death of the deceased?",

    inputType: "date",
    fields: [
      {
        label: "Day",
        inputType: "text",
        name: "deathDay",
        message: "invalid Day",
      },
      {
        label: "Month",
        inputType: "text",
        name: "deathMonth",
        message: "invalid Month",
      },
      {
        label: "Year",
        inputType: "text",
        name: "deathYear",
        message: "invalid Year",
      },
    ],
    buttonName: "Save & Continue",
  },
  {
    heading: "State the Place of death (full address):",

    fields: [
      {
        label: "Address",
        inputType: "text",
        name: "address",
      },
      {
        label: "Island",
        value: "island",
        name: "island",
        inputType: "select",
        options: [
          { value: "", label: "Select Province" },
          { value: "abaco", label: "Abaco" },
          { value: "acklins", label: "Acklins" },
          { value: "andros", label: "Andros" },
          { value: "berry island", label: "Berry Islands" },
          { value: "cat island", label: "Cat Island" },
        ],
      },
      {
        label: "City",
        inputType: "text",
        name: "city",
      },
      {
        label: "Country",
        value: "country",
        name: "country",
        inputType: "select",
        options: [
          { value: "", label: "Select a Country" },
          { value: "the bahamas", label: "The Bahamas" },
          { value: "afghanistan", label: "Afghanistan" },
          { value: "armenia", label: "Armenia" },
          { value: "belize", label: "Belize" },
          { value: "bangladesh", label: "Bangladesh" },
        ],
      },
    ],
    inputType: "text",
    buttonName: "Save & Continue",
  },
  {
    heading: "State where deceased domiciled?",

    fields: [
      {
        label: "City",
        inputType: "text",
        name: "city",
      },
      {
        label: "Country",
        value: "country",
        name: "country",
        inputType: "select",
        options: [
          { value: "", label: "Select a Country" },
          { value: "the bahamas", label: "The Bahamas" },
          { value: "afghanistan", label: "Afghanistan" },
          { value: "armenia", label: "Armenia" },
          { value: "belize", label: "Belize" },
          { value: "bangladesh", label: "Bangladesh" },
        ],
      },
    ],
    inputType: "text",
    buttonName: "Save & Continue",
  },
  {
    heading: "Did the deceased own property?",
    selected: "Yes",
    inputType: "radio",
    codicilSelection: {
      options: [
        { id: 1, label: "Yes", value: "Yes" },
        { id: 2, label: "No", value: "No" },
      ],
    },
    buttonName: "Save & Continue",
  },
  {
    heading: "Choose one:",

    inputType: "radio",
    genderSelection: {
      selected: "Probate",
      options: [
        {
          id: 1,
          label: "I am the executor",
          value: "I am the executor",
        },
        {
          id: 2,
          label: "I am one of the executors",
          value: "I am one of the executors",
        },
        {
          id: 3,
          label: "We are the executors",
          value: "We are the executors",
        },
        {
          id: 4,
          label: "We are two of the executors",
          value: "We are two of the executors",
        },
        {
          id: 4,
          label: "We are the executrices",
          value: "We are the executrices",
        },
      ],
    },
    buttonName: "Save & Continue",
  },

  //************************ */ Affidavit Form Data ******************
  {
    heading: "State the name of witness to the Will or Codicil:",
    subHeading: "Use the name on the National ID",
    fields: [
      { label: "First name", inputType: "text", name: "firstName" },
      { label: "Last name", inputType: "text", name: "lastName" },
    ],
    buttonName: "Save & Continue",
  },
  {
    heading: "State the address of witness:",

    fields: [
      {
        label: "Address",
        inputType: "text",
        name: "address",
      },
      {
        label: "Island",
        value: "island",
        name: "island",
        inputType: "select",
        options: [
          { value: "", label: "Select Province" },
          { value: "abaco", label: "Abaco" },
          { value: "acklins", label: "Acklins" },
          { value: "andros", label: "Andros" },
          { value: "berry island", label: "Berry Islands" },
          { value: "cat island", label: "Cat Island" },
        ],
      },
      {
        label: "City",
        inputType: "text",
        name: "city",
      },
      {
        label: "Country",
        value: "country",
        name: "country",
        inputType: "select",
        options: [
          { value: "", label: "Select a Country" },
          { value: "the bahamas", label: "The Bahamas" },
          { value: "afghanistan", label: "Afghanistan" },
          { value: "armenia", label: "Armenia" },
          { value: "belize", label: "Belize" },
          { value: "bangladesh", label: "Bangladesh" },
        ],
      },
    ],
    inputType: "text",
    buttonName: "Save & Continue",
  },
  {
    heading: "Occupation of Witness?",

    label: "Occupation",
    inputType: "text",
    name: "occupation",
    buttonName: "Save & Continue",
  },
  {
    heading: "Select Affiant Gender:",
    subHeading: "Affiant is a male /female",
    selected: "Male",
    inputType: "radio",
    genderSelection: {
      options: [
        { id: 1, label: "Male", value: "male" },
        { id: 2, label: "Female", value: "female" },
      ],
    },
    buttonName: "Save & Continue",
  },
  {
    heading: "Please choose which document the affiant is a witness?",

    selected: "Male",
    inputType: "radio",
    genderSelection: {
      options: [
        {
          id: 1,
          label: "Last Will and testament",
          value: "Last Will and testament",
        },
        { id: 2, label: "Codicil", value: "Codicil" },
      ],
    },
    buttonName: "Save & Continue",
  },
  {
    heading: "Please insert the date of the Will or Codicil:",

    inputType: "date",
    fields: [
      {
        label: "Day",
        inputType: "text",
        name: "deathDay",
        message: "invalid Day",
      },
      {
        label: "Month",
        inputType: "text",
        name: "deathMonth",
        message: "invalid Month",
      },
      {
        label: "Year",
        inputType: "text",
        name: "deathYear",
        message: "invalid Year",
      },
    ],
    buttonName: "Save & Continue",
  },
  {
    heading: "State the name of the other attesting witness:",

    fields: [
      { label: "First name", inputType: "text", name: "firstName" },
      { label: "Last name", inputType: "text", name: "lastName" },
    ],
    buttonName: "Save & Continue",
  },
];

export default FormData;
