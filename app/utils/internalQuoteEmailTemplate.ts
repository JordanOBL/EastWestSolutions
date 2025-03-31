export function getInternalQuoteEmailTemplate(formData, service: string) {
 switch (service) {
   case 'leadership_strategy':
     return getLeadershipStrategyTemplate(formData)
   case 'business_planning':
     return getBusinessPlanningTemplate(formData)
   case 'operational_review':
     return getOperationalReviewTemplate(formData)
   case 'strategy_deck':
     return getStrategyDeckTemplate(formData)
   case 'team_structure':
     return getTeamStructureTemplate(formData)
   default:
     return 'Service not found'
 }
}

function getBusinessPlanningTemplate(formData: {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  companyWebsite: string;
  industry: string;
  businessStage: string;
  businessGoals: string;
  packageInterest: string;
  additionalPackageDetails: string;
  additionalPackageDetailsMessage: string;
  keyComponents: string;
  businessDocumentation: string;
  deadline: string;
  deadlineDate: string;
  additionalDetails: string;
}) {
  const text = `
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Company Name: ${formData.companyName}
Company Website: ${formData.companyWebsite}
Business Industry: ${formData.industry}
Business Stage: ${formData.businessStage}
Business Goals: ${formData.businessGoals}
Package Interest: ${formData.packageInterest}
Additional Package Details: ${formData.additionalPackageDetails}
Additional Package Details Message: ${formData.additionalPackageDetailsMessage}
Key Business Plan Components: ${formData.keyComponents}
Existing Business Documentation: ${formData.businessDocumentation}
Deadline: ${formData.deadline}
Deadline Date: ${formData.deadlineDate}
Additional Details: ${formData.additionalDetails}
`;

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>New Quote Request</title>
  </head>
  <body style="font-family: Arial, sans-serif; color: #000000; line-height: 1.6;">
    <h2 style="color: #333;">New Quote Request Received</h2>
    <p><strong>Full Name:</strong> ${formData.fullName}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Company Name:</strong> ${formData.companyName}</p>
    <p><strong>Company Website:</strong> ${formData.companyWebsite}</p>
    <p><strong>Business Industry:</strong> ${formData.industry}</p>
    <p><strong>Business Stage:</strong> ${formData.businessStage}</p>
    <p><strong>Business Goals:</strong> ${formData.businessGoals}</p>
    <p><strong>Package Interest:</strong> ${formData.packageInterest}</p>
    <p><strong>Additional Package Details:</strong> ${formData.additionalPackageDetails}</p>
    <p><strong>Additional Package Details Message:</strong> ${formData.additionalPackageDetailsMessage}</p>
    <p><strong>Key Business Plan Components:</strong> ${formData.keyComponents}</p>
    <p><strong>Existing Business Documentation:</strong> ${formData.businessDocumentation}</p>
    <p><strong>Deadline:</strong> ${formData.deadline}</p>
    <p><strong>Deadline Date:</strong> ${formData.deadlineDate}</p>
    <p><strong>Additional Details:</strong> ${formData.additionalDetails}</p>
  </body>
</html>
`;

  return { text, html };
}


function getLeadershipStrategyTemplate(formData) {
  const text = `
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Company Name: ${formData.companyName}
Company Website: ${formData.companyWebsite}
Industry: ${formData.industry}
Business Stage: ${formData.businessStage}
Leadership Team Count: ${formData.leadershipCount}
Leadership Challenges: ${formData.leadershipChallenges}
Package Interest: ${formData.packageInterest}
Additional Package Details: ${formData.additionalPackageDetails}
Additional Package Details Message: ${formData.additionalPackageDetailsMessage}
Leadership Goals: ${formData.leadershipGoals}
Leadership Development Program In Place?: ${formData.leadershipDevelopmentProgram}
Deadline: ${formData.deadline}
Deadline Date: ${formData.deadlineDate}
Additional Details: ${formData.additionalDetails}
`;

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Leadership Strategy Submission</title>
  </head>
  <body style="font-family: Arial, sans-serif; color: #000000; line-height: 1.6;">
    <h2 style="color: #333;">New Leadership Strategy Quote Request</h2>
    <p><strong>Full Name:</strong> ${formData.fullName}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Company Name:</strong> ${formData.companyName}</p>
    <p><strong>Company Website:</strong> ${formData.companyWebsite}</p>
    <p><strong>Industry:</strong> ${formData.industry}</p>
    <p><strong>Business Stage:</strong> ${formData.businessStage}</p>
    <p><strong>Leadership Team Count:</strong> ${formData.leadershipCount}</p>
    <p><strong>Leadership Challenges:</strong> ${formData.leadershipChallenges}</p>
    <p><strong>Package Interest:</strong> ${formData.packageInterest}</p>
    <p><strong>Additional Package Details:</strong> ${formData.additionalPackageDetails}</p>
    <p><strong>Additional Package Details Message:</strong> ${formData.additionalPackageDetailsMessage}</p>
    <p><strong>Leadership Goals:</strong> ${formData.leadershipGoals}</p>
    <p><strong>Leadership Development Program In Place?:</strong> ${formData.leadershipDevelopmentProgram}</p>
    <p><strong>Deadline:</strong> ${formData.deadline}</p>
    <p><strong>Deadline Date:</strong> ${formData.deadlineDate}</p>
    <p><strong>Additional Details:</strong> ${formData.additionalDetails}</p>
  </body>
</html>
`;

  return { text, html };
}


function getOperationalReviewTemplate(formData) {
  const text = `
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Company Name: ${formData.companyName}
Company Website: ${formData.companyWebsite}
Industry: ${formData.industry}
Business Stage: ${formData.businessStage}
Operational Challenges: ${formData.operationalChallenges}
Package Interest: ${formData.packageInterest}
Additional Package Details: ${formData.additionalPackageDetails}
Additional Package Details Message: ${formData.additionalPackageDetailsMessage}
Primary Objectives: ${formData.primaryObjectives}
Currently Track Operational Performance or KPI Metrics: ${formData.kpiMetrics}
Deadline: ${formData.deadline}
Deadline Date: ${formData.deadlineDate}
Additional Details: ${formData.additionalDetails}
`;

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Operational Review Quote Request</title>
  </head>
  <body style="font-family: Arial, sans-serif; color: #000000; line-height: 1.6;">
    <h2 style="color: #333;">New Operational Review Quote Request</h2>
    <p><strong>Full Name:</strong> ${formData.fullName}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Company Name:</strong> ${formData.companyName}</p>
    <p><strong>Company Website:</strong> ${formData.companyWebsite}</p>
    <p><strong>Industry:</strong> ${formData.industry}</p>
    <p><strong>Business Stage:</strong> ${formData.businessStage}</p>
    <p><strong>Operational Challenges:</strong> ${formData.operationalChallenges}</p>
    <p><strong>Package Interest:</strong> ${formData.packageInterest}</p>
    <p><strong>Additional Package Details:</strong> ${formData.additionalPackageDetails}</p>
    <p><strong>Additional Package Details Message:</strong> ${formData.additionalPackageDetailsMessage}</p>
    <p><strong>Primary Objectives:</strong> ${formData.primaryObjectives}</p>
    <p><strong>Currently Track Operational Performance or KPI Metrics:</strong> ${formData.kpiMetrics}</p>
    <p><strong>Deadline:</strong> ${formData.deadline}</p>
    <p><strong>Deadline Date:</strong> ${formData.deadlineDate}</p>
    <p><strong>Additional Details:</strong> ${formData.additionalDetails}</p>
  </body>
</html>
`;

  return { text, html };
}


function getStrategyDeckTemplate(formData) {
  const text = `
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Company Name: ${formData.companyName}
Company Website: ${formData.companyWebsite}
Industry: ${formData.industry}
Business Stage: ${formData.businessStage}
Business' Key Objectives: ${formData.businessKeyObjectives}
Strategy Deck Goals: ${formData.strategyDeckGoals}
Strategy Deck Focus: ${formData.strategyDeckFocus}
Existing market Research or Financial Data?: ${formData.existingData}
Package Interest: ${formData.packageInterest}
Additional Package Details: ${formData.additionalPackageDetails}
Additional Package Details Message: ${formData.additionalPackageDetailsMessage}
Deadline: ${formData.deadline}
Deadline Date: ${formData.deadlineDate}
Additional Details: ${formData.additionalDetails}
`;

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Strategy Deck Quote Request</title>
  </head>
  <body style="font-family: Arial, sans-serif; color: #000000; line-height: 1.6;">
    <h2 style="color: #333;">New Strategy Deck Quote Request</h2>
    <p><strong>Full Name:</strong> ${formData.fullName}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Company Name:</strong> ${formData.companyName}</p>
    <p><strong>Company Website:</strong> ${formData.companyWebsite}</p>
    <p><strong>Industry:</strong> ${formData.industry}</p>
    <p><strong>Business Stage:</strong> ${formData.businessStage}</p>
    <p><strong>Business' Key Objectives:</strong> ${formData.businessKeyObjectives}</p>
    <p><strong>Strategy Deck Goals:</strong> ${formData.strategyDeckGoals}</p>
    <p><strong>Strategy Deck Focus:</strong> ${formData.strategyDeckFocus}</p>
    <p><strong>Existing market Research or Financial Data?:</strong> ${formData.existingData}</p>
    <p><strong>Package Interest:</strong> ${formData.packageInterest}</p>
    <p><strong>Additional Package Details:</strong> ${formData.additionalPackageDetails}</p>
    <p><strong>Additional Package Details Message:</strong> ${formData.additionalPackageDetailsMessage}</p>
    <p><strong>Deadline:</strong> ${formData.deadline}</p>
    <p><strong>Deadline Date:</strong> ${formData.deadlineDate}</p>
    <p><strong>Additional Details:</strong> ${formData.additionalDetails}</p>
  </body>
</html>
`;

  return { text, html };
}


function getTeamStructureTemplate(formData) {
  const text = `
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Company Name: ${formData.companyName}
Company Website: ${formData.companyWebsite}
Industry: ${formData.industry}
Business Stage: ${formData.businessStage}
Team Structure Callenges: ${formData.teamStructureChallenges}
Package Interest: ${formData.packageInterest}
Additional Package Details: ${formData.additionalPackageDetails}
Additional Package Details Message: ${formData.additionalPackageDetailsMessage}
Team Structure Goals: ${formData.teamStructureGoals}
Current Organizational Chart?: ${formData.organizationalChart}
Deadline: ${formData.deadline}
Deadline Date: ${formData.deadlineDate}
Additional Details: ${formData.additionalDetails}
`;

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Team Structure Quote Request</title>
  </head>
  <body style="font-family: Arial, sans-serif; color: #000000; line-height: 1.6;">
    <h2 style="color: #333;">New Team Structure Quote Request</h2>
    <p><strong>Full Name:</strong> ${formData.fullName}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Company Name:</strong> ${formData.companyName}</p>
    <p><strong>Company Website:</strong> ${formData.companyWebsite}</p>
    <p><strong>Industry:</strong> ${formData.industry}</p>
    <p><strong>Business Stage:</strong> ${formData.businessStage}</p>
    <p><strong>Team Structure Callenges:</strong> ${formData.teamStructureChallenges}</p>
    <p><strong>Package Interest:</strong> ${formData.packageInterest}</p>
    <p><strong>Additional Package Details:</strong> ${formData.additionalPackageDetails}</p>
    <p><strong>Additional Package Details Message:</strong> ${formData.additionalPackageDetailsMessage}</p>
    <p><strong>Team Structure Goals:</strong> ${formData.teamStructureGoals}</p>
    <p><strong>Current Organizational Chart?:</strong> ${formData.organizationalChart}</p>
    <p><strong>Deadline:</strong> ${formData.deadline}</p>
    <p><strong>Deadline Date:</strong> ${formData.deadlineDate}</p>
    <p><strong>Additional Details:</strong> ${formData.additionalDetails}</p>
  </body>
</html>
`;

  return { text, html };
}

