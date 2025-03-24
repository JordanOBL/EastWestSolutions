'use server'
import {NextResponse} from 'next/server'
import nodemailer from 'nodemailer';
import transporter from '../lib/nodemailer.ts'
export async function handleSubmitQuoteForm(formData){
  try{
    await sendInternalQuoteEmail(formData)
    await sendAutomatedClientQuoteEmail(formData.fullName, formData.email)
  } catch(err){
    console.error(err)
  }
}

async function sendInternalQuoteEmail(formData) {
  try {
    const { fullName, 
      email,
      phone,
      companyName,
      companyWebsite,
      industry,
      businessYears,
      employeeCount,
      leadershipCount,
      leadershipStructure,
      leadershipDevelopmentProgram,
      leadershipProgramDetails,
      leadershipChallenges,
      decisionMakingProcess,
      leadershipCulture,
      communicationEffectiveness,
      leadershipMeetingFrequency,
      leadershipOutcomes,
      openToTraining,
      goalSettingFramework,
      packageInterest,
      preferredStartDate,
      additionalDetails} = formData
    
    const mailOptions = {
      from: 'quotes@eastwestsolutions.us',
      to: 'quotes@eastwestsolutions.us',
      replyTo: email,
      subject: 'Request Quote',
      html: `
<h1>Request Quote</h1>
<p>Full Name: ${fullName}</p>
<p>Email: ${email}</p>
<p>Phone: ${phone}</p>
<p>Company Name: ${companyName}</p>
<p>Company Website: ${companyWebsite}</p>
<p>Industry: ${industry}</p>
<p>Business Years: ${businessYears}</p>
<p>Employee Count: ${employeeCount}</p>
<p>Leadership Count: ${leadershipCount}</p>
<p>Leadership Structure: ${leadershipStructure}</p>
<p>Leadership Development Program: ${leadershipDevelopmentProgram}</p>
<p>Leadership Program Details: ${leadershipProgramDetails}</p>
<p>Leadership Challenges: ${leadershipChallenges}</p>
<p>Decision Making Process: ${decisionMakingProcess}</p>
<p>Leadership Culture: ${leadershipCulture}</p>
<p>Communication Effectiveness: ${communicationEffectiveness}</p>
<p>Leadership Meeting Frequency: ${leadershipMeetingFrequency}</p>
<p>Leadership Outcomes: ${leadershipOutcomes}</p>
<p>Open To Training: ${openToTraining}</p>
<p>Goal Setting Framework: ${goalSettingFramework}</p>
<p>Package Interest: ${packageInterest}</p>
<p>Preferred Start Date: ${preferredStartDate}</p>
<p>Additional Details: ${additionalDetails}</p>
`};
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        return NextResponse.json({ success: true }, {
          status: 200,
        });
      }
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, {
      status: 500,
    });
  }
}

 



