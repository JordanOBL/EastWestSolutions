'use server'
import { getInternalQuoteEmailTemplate } from '../internalQuoteEmailTemplate.ts'
import { sendInternalQuoteEmail } from './toInternal.ts'
import { sendRecievedQuoteClientEmail } from './toClient.ts'


export async function handleSubmitQuoteForm(formData, service: string) {
  try{
    const templateResponse = await getInternalQuoteEmailTemplate(formData, service)
    if (!templateResponse.text || !templateResponse.html) {
      return { success: false,
        status: 500
      }
    }
    await sendInternalQuoteEmail(templateResponse, service)
    await sendRecievedQuoteClientEmail(formData.fullName, formData.email)

    return { success: true,
      status: 200,
    }
  } catch(err){
    console.error(err)
  }
}


