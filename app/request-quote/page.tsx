'use server'
import Form from 'next/form';
import {handleSubmitQuoteForm} from '../utils/api.ts'
import LeadershipStrategyBasic from '../components/quoteForms/LeadershipStrategyBasic.tsx'


const RequestQuotePage = async({searchParams}) =>{
	const {service, tier} = await searchParams;

	if(service == 'leadership_strategy' && tier == 'basic'){
		return (
			<LeadershipStrategyBasic/>	

		)
	}
}

export default RequestQuotePage
