'use server'
import LeadershipStrategy from '../components/quoteForms/LeadershipStrategy.tsx'
import BusinessPlan from '../components/quoteForms/BusinessPlan.tsx'
import OperationalReview from '../components/quoteForms/OperationalReview.tsx'
import StrategyDeck from '../components/quoteForms/StrategyDeck.tsx'
import TeamStructure from '../components/quoteForms/TeamStructure.tsx'
type Props = {
  searchParams: Promise<{ service: string }>
};


const RequestQuotePage = async (props: Props) => {
  const searchParams = await props.searchParams;

  const {service} = searchParams;

  switch(service){
      case 'leadership_strategy':
        return <LeadershipStrategy/>
      case 'business_planning':
        return <BusinessPlan/>
      case 'operational_review':
        return <OperationalReview/>
      case 'strategy_deck':
        return <StrategyDeck/>
      case 'team_structure':
        return <TeamStructure/>
      default:
        return <h1>Service not found</h1>
  }
}

export default RequestQuotePage
