export function getInternalQuoteEmailTemplate(formData: any, service: string) {
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

function getBusinessPlanningTemplate(formData: any) {
  return `
<p style={{color: 'black'}}>Full Name: ${formData.fullName}</p>
<p style={{color: 'black'}}>Email: ${formData.email}</p>
<p style={{color: 'black'}}>Phone: ${formData.phone}</p>
<p style={{color: 'black'}}>Company Name: ${formData.companyName}</p>
<p style={{color: 'black'}}>Company Website: ${formData.companyWebsite}</p>
<p style={{color: 'black'}}>Business Industry: ${formData.industry}</p>
<p style={{color: 'black'}}>Business Stage: ${formData.businessStage}</p>
<p style={{color: 'black'}}>Business Goals: ${formData.businessGoals}</p>
<p style={{color: 'black'}}>Package Interest: ${formData.packageInterest}</p>
<p style={{color: 'black'}}>Additional Package Details: ${formData.additionalPackageDetails}</p>
<p style={{color: 'black'}}>Additional Package Details Message: ${formData.additionalPackageDetailsMessage}</p>
<p style={{color: 'black'}}>Key Business Plan Components: ${formData.keyComponents}</p>
<p style={{color: 'black'}}>Existing Business Documentation: ${formData.businessDocumentation}</p>
<p style={{color: 'black'}}>Deadline: ${formData.deadline}</p>
<p style={{color: 'black'}}>Deadline Date: ${formData.deadlineDate}</p>
<p style={{color: 'black'}}>Additional Details: ${formData.additionalDetails}</p>
`
    
}

function getLeadershipStrategyTemplate(formData: any) {
  return `
<p style={{color: 'black'}}>Full Name: ${formData.fullName}</p>
<p style={{color: 'black'}}>Email: ${formData.email}</p>
<p style={{color: 'black'}}>Phone: ${formData.phone}</p>
<p style={{color: 'black'}}>Company Name: ${formData.companyName}</p>
<p style={{color: 'black'}}>Company Website: ${formData.companyWebsite}</p>
<p style={{color: 'black'}}>Industry: ${formData.industry}</p>
<p style={{color: 'black'}}>Business Stage: ${formData.businessStage}</p>
<p style={{color: 'black'}}>Leadership Team Count: ${formData.leadershipCount}</p>
<p style={{color: 'black'}}>Leadership Challenges: ${formData.leadershipChallenges}</p>
<p style={{color: 'black'}}>Package Interest: ${formData.packageInterest}</p>
<p style={{color: 'black'}}>Additional Package Details: ${formData.additionalPackageDetails}</p>
<p style={{color: 'black'}}>Additional Package Details Message: ${formData.additionalPackageDetailsMessage}</p>
<p style={{color: 'black'}}>Leadership Goals: ${formData.leadershipGoals}</p>
<p style={{color: 'black'}}>Leadership Development Program In Place?: ${formData.leadershipDevelopmentProgram}</p>
<p style={{color: 'black'}}>Deadline: ${formData.deadline}</p>
<p style={{color: 'black'}}>Deadline Date: ${formData.deadlineDate}</p>
<p style={{color: 'black'}}>Additional Details: ${formData.additionalDetails}</p>`
}

function getOperationalReviewTemplate(formData: any) {
  return `
<p style={{color: 'black'}}>Full Name: ${formData.fullName}</p>
<p style={{color: 'black'}}>Email: ${formData.email}</p>
<p style={{color: 'black'}}>Phone: ${formData.phone}</p>
<p style={{color: 'black'}}>Company Name: ${formData.companyName}</p>
<p style={{color: 'black'}}>Company Website: ${formData.companyWebsite}</p>
<p style={{color: 'black'}}>Industry: ${formData.industry}</p>
<p style={{color: 'black'}}>Business Stage: ${formData.businessStage}</p>
<p style={{color: 'black'}}>Operational Challenges: ${formData.operationalChallenges}</p>
<p style={{color: 'black'}}>Package Interest: ${formData.packageInterest}</p>
<p style={{color: 'black'}}>Additional Package Details: ${formData.additionalPackageDetails}</p>
<p style={{color: 'black'}}>Additional Package Details Message: ${formData.additionalPackageDetailsMessage}</p>
<p style={{color: 'black'}}>Primary Objectives: ${formData.primaryObjectives}</p>
<p style={{color: 'black'}}>Currently Track Operational Performance or KPI Metrics: ${formData.kpiMetrics}</p>
<p style={{color: 'black'}}>Deadline: ${formData.deadline}</p>
<p style={{color: 'black'}}>Deadline Date: ${formData.deadlineDate}</p>
<p style={{color: 'black'}}>Additional Details: ${formData.additionalDetails}</p>`
}

function getStrategyDeckTemplate(formData: any) {
  return `
<p style={{color: 'black'}}>Full Name: ${formData.fullName}</p>
<p style={{color: 'black'}}>Email: ${formData.email}</p>
<p style={{color: 'black'}}>Phone: ${formData.phone}</p>
<p style={{color: 'black'}}>Company Name: ${formData.companyName}</p>
<p style={{color: 'black'}}>Company Website: ${formData.companyWebsite}</p>
<p style={{color: 'black'}}>Industry: ${formData.industry}</p>
<p style={{color: 'black'}}>Business Stage: ${formData.businessStage}</p>
<p style={{color: 'black'}}>Business' Key Objectives: ${formData.businessKeyObjectives}</p>
<p style={{color: 'black'}}>Strategy Deck Goals: ${formData.strategyDeckGoals}</p>
<p style={{color: 'black'}}>Strategy Deck Focus: ${formData.strategyDeckFocus}</p>
<p style={{color: 'black'}}>Existing market Research or Financial Data?: ${formData.existingData}</p>
<p style={{color: 'black'}}>Package Interest: ${formData.packageInterest}</p>
<p style={{color: 'black'}}>Additional Package Details: ${formData.additionalPackageDetails}</p>
<p style={{color: 'black'}}>Additional Package Details Message: ${formData.additionalPackageDetailsMessage}</p>
<p style={{color: 'black'}}>Deadline: ${formData.deadline}</p>
<p style={{color: 'black'}}>Deadline Date: ${formData.deadlineDate}</p>
<p style={{color: 'black'}}>Additional Details: ${formData.additionalDetails}</p>
`
}

function getTeamStructureTemplate(formData: any) {
  return `
<p style={{color: 'black'}}>Full Name: ${formData.fullName}</p>
<p style={{color: 'black'}}>Email: ${formData.email}</p>
<p style={{color: 'black'}}>Phone: ${formData.phone}</p>
<p style={{color: 'black'}}>Company Name: ${formData.companyName}</p>
<p style={{color: 'black'}}>Company Website: ${formData.companyWebsite}</p>
<p style={{color: 'black'}}>Industry: ${formData.industry}</p>
<p style={{color: 'black'}}>Business Stage: ${formData.businessStage}</p>
<p style={{color: 'black'}}>Team Structure Callenges: ${formData.teamStructureChallenges}</p>
<p style={{color: 'black'}}>Package Interest: ${formData.packageInterest}</p>
<p style={{color: 'black'}}>Additional Package Details: ${formData.additionalPackageDetails}</p>
<p style={{color: 'black'}}>Additional Package Details Message: ${formData.additionalPackageDetailsMessage}</p>
<p style={{color: 'black'}}>Team Structure Goals: ${formData.teamStructureGoals}</p>
<p style={{color: 'black'}}>Current Organizational Chart?: ${formData.organizationalChart}</p>
<p style={{color: 'black'}}>Deadline: ${formData.deadline}</p>
<p style={{color: 'black'}}>Deadline Date: ${formData.deadlineDate}</p>
<p style={{color: 'black'}}>Additional Details: ${formData.additionalDetails}</p>
`
}
