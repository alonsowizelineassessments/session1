import { Role } from 'testcafe';
import { DATA } from '../data/Constants'

const standardUser = Role(`${process.env.URL}`, async t =>{
  await t
        .typeText('#user-name', DATA.STANDARD_USER.USERNAME)
        .typeText('#password', DATA.STANDARD_USER.PASSWORD)
        .click('input[value="LOGIN"]');
});

const problemUser = Role(`${process.env.URL}`, async t =>{
  await t
        .typeText('#user-name', DATA.PROBLEM_USER.USERNAME)
        .typeText('#password', DATA.PROBLEM_USER.PASSWORD)
        .click('input[value="LOGIN"]');
});

export { standardUser, problemUser };
