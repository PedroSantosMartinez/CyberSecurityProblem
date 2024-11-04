// Define an array of objects called jobData to store job roles categorized by experience level. 
// Each object represents a role and includes the job title, required experience levels, and the number of open positions.
const jobData = [
    { level: "Cybersecurity Analyst", experienceReq: [1, 2, 3], openRoles: 32000 },
    { level: "Threat Intelligence Analyst", experienceReq: [2, 3, 4], openRoles: 15000 },
    { level: "Cloud Security Engineer", experienceReq: [3, 4, 5], openRoles: 25000 },
    { level: "Incident Response Manager", experienceReq: [4, 5, 6], openRoles: 18000 },
    { level: "Governance & Compliance Specialist", experienceReq: "5+", openRoles: 10000 },
    { level: "Security Architect", experienceReq: "7+", openRoles: 8000 }
];

console.log(jobData);