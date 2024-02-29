let myResume={
    "basics": {
      "name": "SREE RAM 5",
      "email": "sreeramuidesigner@gamil.com",
      "phone": 7358355574,
      "degree": "MCA",
      "location": {
        "address": "24A, Zaheer Hussian street, MGR nagar",
        "postalCode": 600078,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "www.linkedin.com/in/sreeramuiuxdesigner",
          "github":"https://github.com/sreeramuiuxdesigner"
        }
      ]
    },
    "work": [
      {
        "company": "AscendsSoft",
        "position": "UI UX Designer",
        "startDate": "July 2023",
        "endDate": "Sept 2023",
        "summary": "i am the business executive handling various task and gaining lots of experience",
      },
    ],
    "education": [
      {
        "institution": "University of Madras",
        "department": "MCA",
        "studyType": "fulltime",
        "batch start year": 2021,
        "batch end year": 2023,
        "gpa": 7.5,
      }
    ],
    "skills": [
      {
        "name": "html,Bottstrap, Css, ",
        "level": "beginer",
        "project": [
          "Child Monitoring App"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,English",
      }
    ],
    "interests": [
      {
        "name": "reading, coding",
      }
    ]
  }
  console.log(myResume);


  
  console.log("Using for loop:");
  for (let key in resumeData) {
  console.log(`${key}: ${resumeData[key]}`);
}


  console.log("\nUsing for...in loop:");
  for (let key in resumeData) {
  if (resumeData.hasOwnProperty(key)) {
    console.log(`${key}: ${resumeData[key]}`);
  }
}


  console.log("\nUsing for...of loop:");
  for (let value of Object.values(resumeData)) {
  console.log(value);
}

  console.log("\nUsing forEach loop for education:");
  resumeData.education.forEach((education) => {
  console.log(education);
});

  console.log("\nUsing forEach loop for experience:");
  resumeData.experience.forEach((experience) => {
  console.log(experience);
});

  console.log("\nUsing forEach loop for skills:");
  resumeData.skills.forEach((skill) => {
  console.log(skill);
});
        