const schema = {
  type: 'object',
  properties: {
    country: {
      type: 'string',
      enum: [
        'USA'
      ]
    },
    state: {
      type: 'string',
      enum: [
        'AL',
        'AK',
        'AS',
        'AZ',
        'AR',
        'AA',
        'AE',
        'AP',
        'CA',
        'CO',
        'CT',
        'DE',
        'DC',
        'FM',
        'FL',
        'GA',
        'GU',
        'HI',
        'ID',
        'IL',
        'IN',
        'IA',
        'KS',
        'KY',
        'LA',
        'ME',
        'MH',
        'MD',
        'MA',
        'MI',
        'MN',
        'MS',
        'MO',
        'MT',
        'NE',
        'NV',
        'NH',
        'NJ',
        'NM',
        'NY',
        'NC',
        'ND',
        'MP',
        'OH',
        'OK',
        'OR',
        'PW',
        'PA',
        'PR',
        'RI',
        'SC',
        'SD',
        'TN',
        'TX',
        'UT',
        'VT',
        'VI',
        'VA',
        'WA',
        'WV',
        'WI',
        'WY'
      ]
    },
    street: {
      type: 'string',
      minLength: 1,
      maxLength: 50,
      pattern: '^.*\\S.*'
    },
    street2: {
      type: 'string',
      maxLength: 50
    },
    street3: {
      type: 'string',
      maxLength: 50
    },
    city: {
      type: 'string',
      minLength: 1,
      maxLength: 51,
      pattern: '^.*\\S.*'
    },
    postalCode: {
      type: 'string',
      maxLength: 51
    }
  },
  required: [
    'street',
    'city',
    'country'
  ]
}

export default schema;
