import { standardUser, problemUser } from '../pages/Roles'

fixture('Saucedemo Roles Testing')
  .page `${process.env.URL}`

//One role
test('BONUS: Test Cafe Roles - STANDARD User', async t =>{
  await t
    .useRole(standardUser)
})

//Different role
test('BONUS: Test Cafe Roles - PROBLEM User', async t =>{
  await t
    .useRole(problemUser)
})