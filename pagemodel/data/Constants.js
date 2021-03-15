import dotenv from 'dotenv'
dotenv.config()

export const DATA = {
  STANDARD_USER : {
    USERNAME: process.env.USERNAME_STD,
    PASSWORD: process.env.PASSWORD
  },
  INVALID_USER: {
    USERNAME: 'invalidUser',
    PASSWORD: 'invalidPassword'
  },
  USER_DATA: {
    FIRST_NAME: 'Alonso',
    LAST_NAME: 'Castellon',
    ZIP_CODE: '78258'
  },
  LOCKED_USER : {
    USERNAME: process.env.USERNAME_LOCKED_OUT,
    PASSWORD: process.env.PASSWORD
  },
  PROBLEM_USER : {
    USERNAME: process.env.USERNAME_PROBLEM,
    PASSWORD: process.env.PASSWORD
  },
  PERFORMANCE_USER : {
    USERNAME: process.env.USERNAME_PERFORMANCE_GLITCH,
    PASSWORD: process.env.PASSWORD
  },
  PRODUCTS : [  'Sauce Labs Onesie',
                'Sauce Labs Backpack', 
                'Sauce Labs Bike Light', 
                'Sauce Labs Bolt T-Shirt'
              ]
}