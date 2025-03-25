'use server'
import {NextResponse} from 'next/server'
import nodemailer from 'nodemailer';
import { getInternalQuoteEmailTemplate } from '../internalQuoteEmailTemplate.ts'
import { sendInternalQuoteEmail } from './toInternal.ts'
import { sendRecievedQuoteClientEmail } from './toClient.ts'


export async function handleSubmitQuoteForm(formData: any, service: string) {
  try{
    const templateResponse = await getInternalQuoteEmailTemplate(formData, service)
    await sendInternalQuoteEmail(templateResponse, service)
    await sendRecievedQuoteClientEmail(formData.fullName, formData.email)
  } catch(err){
    console.error(err)
  }
}


