import { getInternalQuoteEmailTemplate } from '../app/utils/internalQuoteEmailTemplate'

describe('getInternalQuoteEmailTemplate', () => {
  const formData = {
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    companyName: 'Acme Inc',
    companyWebsite: 'https://acme.com',
    industry: 'Tech',
    businessStage: 'Startup',
    businessGoals: 'Goals',
    packageInterest: 'Tier 1',
    additionalPackageDetails: 'Details',
    additionalPackageDetailsMessage: 'Message',
    keyComponents: 'Key components',
    businessDocumentation: 'Docs',
    deadline: 'Soon',
    deadlineDate: '2024-01-01',
    additionalDetails: 'Additional',
    leadershipCount: '5',
    leadershipChallenges: 'Challenges',
    leadershipGoals: 'Lead Goals',
    leadershipDevelopmentProgram: 'Yes',
    operationalChallenges: 'Ops Challenges',
    primaryObjectives: 'Objectives',
    kpiMetrics: 'Metrics',
    businessKeyObjectives: 'Objectives',
    strategyDeckGoals: 'Goals',
    strategyDeckFocus: 'Focus',
    existingData: 'Yes',
    teamStructureChallenges: 'Structure',
    teamStructureGoals: 'Goals',
    organizationalChart: 'Chart'
  };

  const services = [
    'leadership_strategy',
    'business_planning',
    'operational_review',
    'strategy_deck',
    'team_structure'
  ] as const;

  services.forEach(service => {
    test(`returns text and html for ${service}`, () => {
      const result = getInternalQuoteEmailTemplate(formData, service);
      expect(result).toHaveProperty('text');
      expect(result).toHaveProperty('html');
      expect(result.text).toBeTruthy();
      expect(result.html).toBeTruthy();
    });
  });
});
