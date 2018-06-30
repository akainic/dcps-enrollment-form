import Introduction from '../components/Introduction.jsx';
import fullName from '../definitions/fullName';
import address from '../definitions/address';

import fullNameUI from 'us-forms-system/lib/js/definitions/fullName';
import currentOrPastDateUI from 'us-forms-system/lib/js/definitions/currentOrPastDate';
import { schema as addressSchema, uiSchema as addressUI } from 'us-forms-system/lib/js/definitions/address';
import phoneUI from 'us-forms-system/lib/js/definitions/phone';

const formConfig = {
  title: 'Annual Student Enrollment Form',
  subTitle: 'School Year 2017-2018',
  formId: '',
  urlPrefix: '/',
  trackingPrefix: 'form-',
  transformForSubmit: '',
  submitUrl: '',
  introduction: Introduction,
  confirmation: '',
  defaultDefinitions: {
    fullName,
    address
  },
  chapters: {
    studentInformation: {
      title: 'Student Information',
      pages: {
        name: {
          path: 'student-information/name',
          title: 'Name',
          uiSchema: {
            fullName: fullNameUI,
            dateOfBirth: currentOrPastDateUI('Date of birth')
          },
          schema: {
            type: 'object',
            required: ['fullName', 'dateOfBirth'],
            properties: {
              fullName,
              dateOfBirth: {
                pattern: '^(\\d{4}|XXXX)-(0[1-9]|1[0-2]|XX)-(0[1-9]|[1-2][0-9]|3[0-1]|XX)$',
                type: 'string'
              }
            }
          }
        },
        demographicInformation: {
          path: 'student-information/demographic-information',
          title: 'Demographic information',
          uiSchema: {
            gender: {
              'ui:title': 'Gender',
            },
            'view:race': {
              'ui:title': 'Which categories best describe you?',
              'ui:description': 'You may check more than one.',
              isSpanishHispanicLatino: {
                'ui:title': 'Hispanic/Latino'
              },
              isAmericanIndianOrAlaskanNative: {
                'ui:title': 'American Indian/Alaska Native'
              },
              isBlackOrAfricanAmerican: {
                'ui:title': 'Black/African American'
              },
              isAsian: {
                'ui:title': 'Asian'
              },
              isNativeHawaiianOrPacificIslander: {
                'ui:title': 'Native Hawaiian/Pacific Islander'
              },
              isWhite: {
                'ui:title': 'White'
              }
            },
          },
          schema: {
            type: 'object',
            required: ['gender'],
            properties: {
              gender: {
                type: 'string',
                enum: [
                  'Female',
                  'Male'
                ]
              },
              'view:race': {
                type: 'object',
                properties: {
                  isSpanishHispanicLatino: {
                    type: 'boolean'
                  },
                  isAmericanIndianOrAlaskanNative: {
                    type: 'boolean'
                  },
                  isBlackOrAfricanAmerican: {
                    type: 'boolean'
                  },
                  isAsian: {
                    type: 'boolean'
                  },
                  isNativeHawaiianOrPacificIslander: {
                    type: 'boolean'
                  },
                  isWhite: {
                    type: 'boolean'
                  }
                }
              }
            }
          }
        },
        contactInformation: {
          path: 'student-information/contact-information',
          title: 'Contact information',
          uiSchema: {
            studentPhone: phoneUI('Phone number'),
            studentAddress: addressUI('Student Address', true)
          },
          schema: {
            type: 'object',
            properties: {
              studentPhone: {
                type: "string",
                minLength: 10,
                pattern: '^[0-9]{10}$'
              },
              studentAddress: address
            }
          }
        },
        // schoolInformation: {
        //   path: 'student-information/school-information',
        //   title: 'School Information',
        //   uiSchema: {
        //     gradeLevelNextYear: {
        //       'ui:title': 'Grade Level Next Year'
        //     }
        //   },
        //   schema: {
        //     type: 'objct',
        //     properties: {
        //       gradeLevelNextYear: {
        //         type: 'string',
        //         enum: [
        //           "PK3",
        //           "PK4",
        //           "K",
        //           "1",
        //           "2",
        //           "3",
        //           "4",
        //           "5",
        //           "6",
        //           "7",
        //           "8",
        //           "9",
        //           "10",
        //           "11",
        //           "12",
        //           "Adult"
        //         ]
        //       }
        //     }
        //   }
        // }
      }
    },
    parentOrGuardianInformation: {
      title: 'Parent or Guardian Information',
      pages: {

      }
    }
  }
};

export default formConfig;