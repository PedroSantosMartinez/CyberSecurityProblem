// Coding Challenge #2 
/* Concept Challenge 2: Function and aparameter passing 10-15m
Write a function that takes in the 'cybersecurityData' data structure you created that prints each roles and
the number of opening to the screen and calculates for each level
*/

const jobData = [
    { level: "Cybersecurity Analyst", experienceReq: [1, 2, 3], openRoles: 32000 },
    { level: "Threat Intelligence Analyst", experienceReq: [2, 3, 4], openRoles: 15000 },
    { level: "Cloud Security Engineer", experienceReq: [3, 4, 5], openRoles: 25000 },
    { level: "Incident Response Manager", experienceReq: [4, 5, 6], openRoles: 18000 },
    { level: "Governance & Compliance Specialist", experienceReq: "5+", openRoles: 10000 },
    { level: "Security Architect", experienceReq: "7+", openRoles: 8000 }
];

// Function to display each job's details in a readable format
function displayJobsData(jobs) {
    // Loop through each job object in the array
    jobs.forEach((job) => {
        // Display the job title (level), experience requirement, and open roles
        console.log(`Job Role: ${job.level}`);
        
        // Check if experienceReq is an array or a string and display accordingly
        if (Array.isArray(job.experienceReq)) {
            // Join(combine) array elements with a hyphen to show the range, e.g., "1-3 years"
            console.log(`Experience Required: ${job.experienceReq.join('-')} years`);
        } else {
            // If it's a string, just display it directly, e.g., "5+ years"
            console.log(`Experience Required: ${job.experienceReq} years`);
        }
        
        // Display the number of open roles, formatted with commas for readability
        console.log(`Open Roles: ${job.openRoles.toLocaleString()}`);
        console.log('-----------------------------'); // Separator for readability
    });
}

// Call the function with the jobData array
displayJobsData(jobData);
