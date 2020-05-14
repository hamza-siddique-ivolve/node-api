const app = require('../app') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)
//get
describe("Testing the get all API", () => {

	it("tests the base route and returns true for status", async () => {

    const res = await request.get('/student/list');

    expect(res.body.status).toBe('Pass')

  });
  
  it("tests the find route and returns true for status", async () => {
  
    const res = await request.get('/student/list/5eb9ae8720a11e06ece2296f');

    expect(res.body.message).toBe('Successfully find student!')
   // expect(res.body.data).toHaveProperty("firstName","firstName")

  })
  it("tests the delete route and returns true for status", async () => {
  
    const res = await request.delete('/student/list/5eb9ae8720a11e06ece2296f');

    expect(res.body.message).toBe('Successfully delete student!')
  //  expect(res.body.data).toHaveProperty('ok', '1')

  });
})

 ///post
 


 
  describe('Post', () => {
    it('should create a new post', async () => {
    
      const res = await request.post('/student/create')
        
        .send( {
          firstName: "firstName122",
          lastName: "lastName221",
          email: "email122",
          company: "company221",
          phone: "phone122",
        
        });
      // console.log(res.body);
      expect(res.body.status).toBe('success')
      expect(res.body.message).toBe('student Created successfully!!!')
       expect(res.body.data).toHaveProperty("firstName","firstName122")
        
     
    })
  })