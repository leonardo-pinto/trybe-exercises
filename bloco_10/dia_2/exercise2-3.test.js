const { it, expect, describe } = require('@jest/globals');
const {
  findUserById, getUserName, users 
} = require('./exercise2-3.js');


describe('getUserName as promise', () => {
  describe('when the user id exists', () => {
    it('id 4 should return Mark', () => {
      return getUserName(4).then(data => expect(data).toEqual('Mark'));
    });
    it('id 5 should return Paul', () => {
      expect.assertions(1);
      return getUserName(5).then(data => expect(data).toEqual('Paul'));
    });
  });

  describe('when the user id does not exists', () => {
    it('should return an error', () => {
      return getUserName(1).catch(error => expect(error).toEqual({ error: 'User with 1 not found.' }))
    })
  })
});


describe('getUserName as async/await', () => {
  describe('when the user id exists', () => {
    it('id 4 should return Mark', async () => {
      expect.assertions(1);
      const data = await getUserName(4);
      expect(data).toEqual('Mark')
    });



    it('id 5 should return Paul', async () => {
      expect.assertions(1);
      const data = await getUserName(5);
      expect(data).toEqual('Paul')
    });
  });

  describe('when the user id does not exists', () => {
    it('should return an error', async () => {
      expect.assertions(1);
      try {
        await getUserName(1);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 1 not found.' })
      }
    });
  });
});




  
  