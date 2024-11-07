// Define an array of objects called jobData to store job roles categorized by experience level.
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
    jobs.forEach((job) => {
        console.log(`Job Role: ${job.level}`);
        
        // Check if experienceReq is an array or a string and display accordingly
        if (Array.isArray(job.experienceReq)) {
            console.log(`Experience Required: ${job.experienceReq.join('-')} years`);
        } else {
            console.log(`Experience Required: ${job.experienceReq} years`);
        }
        
        // Display the number of open roles, formatted with commas for readability
        console.log(`Open Roles: ${job.openRoles.toLocaleString()}`);
        console.log('-----------------------------'); // Separator for readability
    });
}

// Call the function with the jobData array
displayJobsData(jobData);

// Function to calculate the total gap
function calculateTotalGap(data) {
    let totalGap = 0;
    data.forEach((job) => {
        totalGap += job.openRoles;
    });
    return totalGap;
}

// Function to find the job with the largest opening
function findLargestOpening(jobs) {
    let largestJob = jobs[0]; // Start with the first job as the largest
    jobs.forEach((job) => {
        if (job.openRoles > largestJob.openRoles) {
            largestJob = job;
        }
    });
    return largestJob.level; // Return the level with the largest opening
}

// Calculate the total gap
console.log(`Total Gap in Open Roles: ${calculateTotalGap(jobData).toLocaleString()}`);

// Find and display the job role with the largest number of openings
console.log(`Job with the Largest Openings: ${findLargestOpening(jobData)}`);
