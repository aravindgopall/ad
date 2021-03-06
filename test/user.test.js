const AD = require('../index.js');
const config = require('./importConfig');

const ad = new AD(config).cache(true);
const addingUser = async () => {
  let result = await ad
    .user()
    .add({
      userName: 'test.node',
      firstName: 'test',
      lastName: 'node',
      commonName: 'test node',
      email: '',
      pass: '',
      employeeId: '432',
      enabled: true
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

addingUser();
// test('user().add() should return a user', async () => {
//   let result = await ad
//     .user()
//     .add({
//       userName: 'test52',
//       firstName: 'test',
//       lastName: '52',
//       commonName: 'Test User 52',
//       email: 'test52@foobar.net',
//       title: 'Director of Test Section 52',
//       pass: 'SuperWord4567!!!'
//     })
//     .catch(err => {
//       expect(err).not.toBeDefined();
//     });
// });
//
// test('user().add({firstName, lastName}) should infer a commonName', async () => {
//   try {
//     let result = await ad.user().add({
//       userName: 'test53',
//       firstName: 'Test',
//       lastName: '53',
//       pass: 'SuperWord4567!!!'
//     });
//     const user = await ad.user('test53').get();
//     expect(user.cn.toLowerCase()).toBe('test 53');
//   } catch (err) {
//     expect(err).not.toBeDefined();
//   }
// });
//
const check = async () => {
  try {
    let results = await ad.user().get();
    console.log(results);
  } catch (err) {
    expect(err).not.toBeDefined();
  }
};

// check();
//
// test('user().get() should filter by field', async () => {
//   let results = await ad.user().get({
//     fields: ['givenName']
//   });
//   expect(results.filter(r => r.sAMAccountName !== undefined).length).toBe(0);
//   expect(results.filter(r => r.givenName !== undefined).length).toBeGreaterThan(
//     0
//   );
// });
//
// test('user().get() should sort', async () => {
//   let results = await ad.user().get({
//     sort: ['cn'],
//     order: ['desc']
//   });
//   let idx51;
//   let idx52;
//   for (let i = 0; i < results.length; ++i) {
//     if (results[i].cn === 'Test User 52') {
//       idx52 = i;
//     }
//     if (results[i].cn === 'Test User 51') {
//       idx51 = i;
//     }
//   }
//   expect(idx51).not.toBeUndefined();
//   expect(idx52).not.toBeUndefined();
//   expect(idx52).toBeLessThan(idx51);
// });
//
// test('user().get() should full text search', async () => {
//   let results = await ad.user().get({
//     q: ['foobar']
//   });
//   expect(results.length).toBe(2);
// });
//
// test('user().get() should filter values', async () => {
//   let results = await ad.user().get({
//     filter: {
//       cn: 'Test User 52'
//     }
//   });
//   expect(results.length).toBe(1);
// });
//
// test('user(user).get() should find a single user by sAMAccountName', async () => {
//   let results = await ad.user('test52').get();
//   expect(results.sAMAccountName).toBe('test52');
// });
//
// test('user(user).get() should find a single user by userPrincipalName', async () => {
//   let results = await ad.user('test51@' + config.domain).get();
//   expect(results.sAMAccountName).toBe('test51');
// });
//
// test('user(user).get(opts) should take filter options', async () => {
//   let results = await ad.user('test51').get({
//     fields: ['givenName']
//   });
//   expect(results.sAMAccountName).toBeUndefined();
//   expect(results.givenName).not.toBeUndefined();
// });
//
// test('user(user).exists() should return true for a given user', async () => {
//   expect(await ad.user('test51').exists()).toBe(true);
// });
//
// test('user(user).exists() should return false for a bs user', async () => {
//   expect(await ad.user('dskfdslkfjekfjeidj').exists()).toBe(false);
// });
//
// test('user(user).addToGroup(group) should add a user', async () => {
//   let addResult = await ad
//     .user('test52')
//     .addToGroup('Administrators')
//     .catch(err => {
//       expect(err).toBeUndefined();
//     });
//   let result = await ad.user('test52').isMemberOf('Administrators');
//   expect(result).toBe(true);
// });
//
// test('user(user).removeFromGroup(group) should remove a user', async () => {
//   let addResult = await ad
//     .user('test52')
//     .removeFromGroup('Administrators')
//     .catch(err => {
//       expect(err).toBeUndefined();
//     });
//   let result = await ad.user('test52').isMemberOf('Administrators');
//   expect(result).toBe(false);
// });
//
// test('user(user).authenticate(pass) should test authentication.', async () => {
//   try {
//     let trueResult = await ad.user('test52').authenticate('SuperWord4567!!!');
//     expect(trueResult).toBe(true);
//     let falseResult = await ad.user('test52').authenticate('jetlag');
//     expect(falseResult).toBe(false);
//   } catch (err) {
//     expect(err).toBeUndefined();
//   }
// });
//
// test('user(user).password(pass) should change a password.', async () => {
//   try {
//     let result = await ad.user('test52').password('iSunMonkey23!');
//     let trueResult = await ad.user('test52').authenticate('iSunMonkey23!');
//     expect(trueResult).toBe(true);
//   } catch (err) {
//     expect(err).toBeUndefined();
//   }
// });
//
// test('user(user).password(pass) should throw on a missing password.', async () => {
//   try {
//     let result = await ad.user('test52').password();
//     expect(false).toBe(true);
//   } catch (err) {
//     expect(err).toBeDefined();
//   }
// });
//
// test('user(user).passwordNeverExpires() should not throw.', async () => {
//   try {
//     let result = await ad.user('test52').passwordNeverExpires();
//     expect(result.success).toBe(true);
//   } catch (err) {
//     expect(err).not.toBeDefined();
//   }
// });
//
// test('user(user).passwordExpires() should not throw.', async () => {
//   try {
//     let result = await ad.user('test52').passwordExpires();
//     expect(result.success).toBe(true);
//   } catch (err) {
//     expect(err).not.toBeDefined();
//   }
// });
//
// test('user(user).enable() should not throw.', async () => {
//   try {
//     let result = await ad.user('test52').enable();
//     expect(result.success).toBe(true);
//   } catch (err) {
//     expect(err).not.toBeDefined();
//   }
// });
//
// test('user(user).disable() should not throw.', async () => {
//   try {
//     let result = await ad.user('test52').disable();
//     expect(result.success).toBe(true);
//   } catch (err) {
//     expect(err).not.toBeDefined();
//   }
// });
//
// test('user(user).move() should move the user.', async () => {
//   try {
//     let result = await ad.user('test52').move('!Builtin');
//     expect(result.success).toBe(true);
//     let location = await ad.user('test52').location();
//     expect(location).toBe('!Builtin');
//   } catch (err) {
//     expect(err).not.toBeDefined();
//   }
// });
//
// test('user(user).move() should handle an invalid user.', async () => {
//   try {
//     let result = await ad.user('test52000').move('!Builtin');
//   } catch (err) {
//     expect(err).toBeDefined();
//   }
// });
//
// test('user(user).unlock() should not throw.', async () => {
//   try {
//     let result = await ad.user('test52').unlock();
//     expect(result.success).toBe(true);
//   } catch (err) {
//     expect(err).not.toBeDefined();
//   }
// });
//
// test('user(user).update({}) should update a user', async () => {
//   try {
//     let result = await ad.user('test53').update({
//       firstName: 'tester',
//       lastName: '54',
//       commonName: 'Test User 54',
//       email: 'test54@foobar.net',
//       title: 'Director of Test Section 54',
//       password: 'SuperTesto54!!!',
//       userName: 'test54',
//       enabled: false
//     });
//     exists = await ad.user('test54').exists();
//     expect(exists).toBe(true);
//   } catch (err) {
//     expect(err).not.toBeDefined();
//   }
// });
//
// test('user(user).remove() should remove the user.', async () => {
//   try {
//     let exists = await ad.user('test53').exists();
//     if (exists === true) {
//       await ad.user('test53').remove();
//     }
//     expect(exists).toBe(false);
//     await ad.user('test51').remove();
//     await ad.user('test54').remove();
//   } catch (err) {
//     expect(err).not.toBeDefined();
//   }
// });
