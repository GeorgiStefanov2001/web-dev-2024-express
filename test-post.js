const axios = require('axios');

async function testPostUniversityRequest() {
  try {
    const response = await axios.post('http://localhost:3000/university', {
      name: 'Sofia University',
      town: 'Sofia'
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

async function testPostSubjectRequest() {
  try {
    const response = await axios.post('http://localhost:3000/subject', {
      name: 'Mathematics',
    });
    console.log('Response data:', response.data);

    const response1 = await axios.post('http://localhost:3000/subject', {
      name: 'Biology',
    });
    console.log('Response data:', response1.data);

    const response2 = await axios.post('http://localhost:3000/subject', {
      name: 'Physics',
    });
    console.log('Response data:', response2.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}


async function testPostUserRequest() {
  try {
    const response = await axios.post('http://localhost:3000/user', {
      name: 'John Doe',
      email: 'johndoe@example.com',
      universityId: 1,
      subjectIds: [1, 3]
    });
    console.log('Response data:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}
(async () => {
  await testPostUniversityRequest();
  await testPostSubjectRequest();
  await testPostUserRequest();
})()