export const clientOTPTemplateResponseData = {
'resume_build': {
  'basic': resumeBuildBasicResponse(),
  'plus': resumeBuildPlusResponse(), 
  'premium': resumeBuildPremiumResponse()
  },
  'resume_refresh': {
    'basic': resumeRefreshBasicResponse(),
    'plus': resumeRefreshPlusResponse(), 
    'premium': resumeRefreshPremiumResponse()
  },
  'professional_positioning': {
    'basic': professionalPositioningBasicResponse(),
    'plus': professionalPositioningPlusResponse(), 
    'premium': professionalPositioningPremiumResponse()
  }
}
function resumeBuildBasicResponse() {
  const text = `
Thank you for choosing EastWest Solutions for your resume development needs!

My name is India, and I will be working with you to create your resume. To build a resume that highlights your experience and strengths, I need some key details from you.

Please provide the following information at your earliest convenience:
- Work history
  - Current/Most Recent Position (Company, Job Title(s), Dates of Employment, Responsibilities, & Achievements)
  - Prior Positions (Company(s), Job Title(s), Dates of Employment, Responsibilities, & Achievements)
- Education (Degree, School, Year Completed)
- Certifications, Skills, or Special Training
- Metrics or KPIs from Previous Roles (e.g., revenue growth, cost savings, efficiency improvements)

You may reply to this email with your details or attach any supporting documents you feel are relevant. If you need any assistance, please don’t hesitate to ask.

Once I receive your information, I will complete your first draft within 5 business days.

Your package includes one round of edits after the first draft review, completed within 2 business days after feedback.

Thank you again. I am looking forward to helping you advance your career!

Best regards,
India

India Rolfe | Founder, EastWest Solutions  
India@EastWestSolutions.us | (509) 592-5381  
www.EastWestSolutions.us
`;

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Resume Build - Basic Response</title>
  </head>
  <body style="font-family: Arial, sans-serif; color: #000000; line-height: 1.6;">
    <p>Thank you for choosing <strong>EastWest Solutions</strong> for your resume development needs! My
    name is India, and I will be working with you to create your resume. To build a resume
    that highlights your experience and strengths, I need some key details from you.</p>

    <p>Please provide the following information at your earliest convenience:</p>
    <ul>
      <li>Work history</li>
      <li>Current/Most Recent Position (Company, Job Title(s), Dates of Employment, Responsibilities, &amp; Achievements)</li>
      <li>Prior Positions (Company(s), Job Title(s), Dates of Employment, Responsibilities, &amp; Achievements)</li>
      <li>Education (Degree, School, Year Completed)</li>
      <li>Certifications, Skills, or Special Training</li>
      <li>Metrics or KPIs from Previous Roles (e.g., revenue growth, cost savings, efficiency improvements)</li>
    </ul>

    <p>You may reply to this email with your details or attach any supporting documents you
    feel are relevant. If you need any assistance, please don’t hesitate to ask.</p>

    <p>Once I receive your information, I will complete your first draft within <strong>5 business days</strong>.
    Your package includes <strong>one round of edits</strong> after the first draft review, completed within <strong>2
    business days</strong> after feedback.</p>

    <p>Thank you again, I am looking forward to helping you advance your career!</p>
    <p>Best regards,</p>
    <p>India</p>

    <br/><br/>
    <img src="cid:signatureImage" style="max-width: 50px; margin-top: 10px;" alt="Signature Logo"/>
    <p><strong>India Rolfe</strong> | Founder, EastWest Solutions</p>
    <p>
      <a href="mailto:India@EastWestSolutions.us">India@EastWestSolutions.us</a> |
      <a href="tel:+15095925381">(509) 592-5381</a>
    </p>
    <p>
      <a href="https://www.EastWestSolutions.us" target="_blank">www.EastWestSolutions.us</a>
    </p>
  </body>
</html>
`;

  return { text, html };
}


function resumeBuildPlusResponse() {
  const text = `
Thank you for choosing EastWest Solutions for your resume development needs! My
name is India, and I will be working with you to create your resume. To build a resume
that highlights your experience and strengths, I need some key details from you.

Please provide the following information at your earliest convenience:
- Work history
  - Current/Most Recent Position (Company, Job Title(s), Dates of Employment, Responsibilities, & Achievements)
  - Prior Positions (Company(s), Job Title(s), Dates of Employment, Responsibilities, & Achievements)
- Education (Degree, School, Year Completed)
- Certifications, Skills, or Special Training
- Metrics or KPIs from Previous Roles (e.g., revenue growth, cost savings, efficiency improvements)
- Key Strengths or Achievements You Want to Highlight in Your Cover Letter (Optional)

You may reply to this email with your details or attach any supporting documents you
feel are relevant. If you need any assistance, please don’t hesitate to ask.

Once I receive your information, I will complete your first draft within 5–7 business days.
Your package includes two rounds of edits to refine your resume and cover letter after
the first draft review, each completed within 2–3 business days after feedback.

Thank you again, I am looking forward to helping you advance your career!

Best regards,  
India

India Rolfe | Founder, EastWest Solutions  
India@EastWestSolutions.us | (509) 592-5381  
www.EastWestSolutions.us
`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Resume Build - Plus Response</title>
</head>
<body style="font-family: Arial, sans-serif; color: #000000; line-height: 1.6;">
  <p>Thank you for choosing <strong>EastWest Solutions</strong> for your resume development needs! My
  name is India, and I will be working with you to create your resume. To build a resume
  that highlights your experience and strengths, I need some key details from you.</p>

  <p>Please provide the following information at your earliest convenience:</p>
  <ul>
    <li>Work history</li>
    <li>Current/Most Recent Position (Company, Job Title(s), Dates of Employment, Responsibilities, &amp; Achievements)</li>
    <li>Prior Positions (Company(s), Job Title(s), Dates of Employment, Responsibilities, &amp; Achievements)</li>
    <li>Education (Degree, School, Year Completed)</li>
    <li>Certifications, Skills, or Special Training</li>
    <li>Metrics or KPIs from Previous Roles (e.g., revenue growth, cost savings, efficiency improvements)</li>
    <li>Key Strengths or Achievements You Want to Highlight in Your Cover Letter (Optional)</li>
  </ul>

  <p>You may reply to this email with your details or attach any supporting documents you
  feel are relevant. If you need any assistance, please don’t hesitate to ask.</p>

  <p>Once I receive your information, I will complete your first draft within <strong>5–7 business days</strong>.
  Your package includes <strong>two rounds of edits</strong> to refine your resume and cover letter after
  the first draft review, each completed within <strong>2–3 business days</strong> after feedback.</p>

  <p>Thank you again, I am looking forward to helping you advance your career!</p>
  <p>Best regards,</p>
  <p>India</p>

  <br/><br/>
  <img src="cid:signatureImage" style="max-width: 50px; margin-top: 10px;" alt="Signature Logo" />
  <p><strong>India Rolfe</strong> | Founder, EastWest Solutions</p>
  <p><a href="mailto:India@EastWestSolutions.us">India@EastWestSolutions.us</a> | <a href="tel:+15095925381">(509) 592-5381</a></p>
  <p><a href="https://EastWestSolutions.us" target="_blank">www.EastWestSolutions.us</a></p>
</body>
</html>
`;

  return { text, html };
}


function resumeBuildPremiumResponse() {
  const text = `
Thank you for choosing EastWest Solutions for your resume development needs! My
name is India, and I will be working with you to create your resume. To build a resume
that highlights your experience and strengths, I need some key details from you.

Please provide the following information at your earliest convenience:
- Work history
  - Current/Most Recent Position (Company, Job Title(s), Dates of Employment, Responsibilities, & Achievements)
  - Prior Positions (Company(s), Job Title(s), Dates of Employment, Responsibilities, & Achievements)
- Education (Degree, School, Year Completed)
- Certifications, Skills, or Special Training
- Metrics or KPIs from Previous Roles (e.g., revenue growth, cost savings, efficiency improvements)
- Key Strengths or Achievements You Want to Highlight in Your Cover Letter (Optional)
- Your Preferred Career Focus or Target Industries
- Any Industry-Specific Accomplishments You Would Like to Highlight

You may reply to this email with your details or attach any supporting documents you
feel are relevant. If you need any assistance, please don’t hesitate to ask.

Once I receive your information, I will complete your first draft within 7-10 business
days. Your package includes three rounds of edits to refine your resume and cover letter
after the first draft review, each completed within 3 business days after feedback.

Thank you again, I am looking forward to helping you advance your career!

Best regards,  
India

India Rolfe | Founder, EastWest Solutions  
India@EastWestSolutions.us | (509) 592-5381  
www.EastWestSolutions.us
`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Resume Build - Premium Response</title>
</head>
<body style="font-family: Arial, sans-serif; color: #000000; line-height: 1.6;">
  <p>Thank you for choosing <strong>EastWest Solutions</strong> for your resume development needs! My
  name is India, and I will be working with you to create your resume. To build a resume
  that highlights your experience and strengths, I need some key details from you.</p>

  <p>Please provide the following information at your earliest convenience:</p>
  <ul>
    <li>Work history</li>
    <li>Current/Most Recent Position (Company, Job Title(s), Dates of
    Employment, Responsibilities, &amp; Achievements)</li>
    <li>Prior Positions (Company(s), Job Title(s), Dates of Employment,
    Responsibilities, &amp; Achievements)</li>
    <li>Education (Degree, School, Year Completed)</li>
    <li>Certifications, Skills, or Special Training</li>
    <li>Metrics or KPIs from Previous Roles (e.g., revenue growth, cost savings,
    efficiency improvements)</li>
    <li>Key Strengths or Achievements You Want to Highlight in Your Cover Letter
    (Optional)</li>
    <li>Your Preferred Career Focus or Target Industries</li>
    <li>Any Industry-Specific Accomplishments You Would Like to Highlight</li>
  </ul>

  <p>You may reply to this email with your details or attach any supporting documents you
  feel are relevant. If you need any assistance, please don’t hesitate to ask.</p>

  <p>Once I receive your information, I will complete your first draft within <strong>7-10 business
  days</strong>. Your package includes <strong>three rounds of edits</strong> to refine your resume and cover letter
  after the first draft review, each completed within <strong>3 business days</strong> after feedback.</p>

  <p>Thank you again, I am looking forward to helping you advance your career!</p>
  <p>Best regards,</p>
  <p>India</p>

  <br/><br/>
  <img src="cid:signatureImage" style="max-width: 50px; margin-top: 10px;" alt="Signature Logo" />
  <p><strong>India Rolfe</strong> | Founder, EastWest Solutions</p>
  <p><a href="mailto:India@EastWestSolutions.us">India@EastWestSolutions.us</a> | <a href="tel:+15095925381">(509) 592-5381</a></p>
  <p><a href="https://www.EastWestSolutions.us" target="_blank">www.EastWestSolutions.us</a></p>
</body>
</html>
`;

  return { text, html };
}


function resumeRefreshBasicResponse() {
  const text = `
Thank you for choosing EastWest Solutions to refresh your resume! My name is India,
and I will be working with you to update your resume. To ensure your updated resume
reflects your latest experience and skills, please provide the following details:

- Your Most Recent Resume
- Recent Job Updates (New Roles, Responsibilities, Promotions, or Achievements)
- Any New Certifications, Skills, or Training
- Adjustments to Career Goals or Target Industries
- Additional Preferences (Design, Formatting, or Specific Changes) If Any

You can reply to this email with your details or attach any supporting documents you
feel are relevant. If you need any assistance, please don’t hesitate to ask.

Once I receive your information, I will complete your first draft within 5 business days.
Your package includes one round of edits after the first draft review, completed within 2
business days after feedback.

Thank you again, I am looking forward to helping you advance your career!

Best regards,  
India

India Rolfe | Founder, EastWest Solutions  
India@EastWestSolutions.us | (509) 592-5381  
www.EastWestSolutions.us
`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Resume Refresh - Basic Response</title>
</head>
<body style="font-family: Arial, sans-serif; color: #000000; line-height: 1.6;">
  <p>Thank you for choosing <strong>EastWest Solutions</strong> to refresh your resume! My name is India,
  and I will be working with you to update your resume. To ensure your updated resume
  reflects your latest experience and skills, please provide the following details:</p>

  <ul>
    <li>Your Most Recent Resume</li>
    <li>Recent Job Updates (New Roles, Responsibilities, Promotions, or Achievements)</li>
    <li>Any New Certifications, Skills, or Training</li>
    <li>Adjustments to Career Goals or Target Industries</li>
    <li>Additional Preferences (Design, Formatting, or Specific Changes) If Any</li>
  </ul>

  <p>You can reply to this email with your details or attach any supporting documents you
  feel are relevant. If you need any assistance, please don’t hesitate to ask.</p>

  <p>Once I receive your information, I will complete your first draft within <strong>5 business days</strong>.
  Your package includes <strong>one round of edits</strong> after the first draft review, completed within
  <strong>2 business days</strong> after feedback.</p>

  <p>Thank you again, I am looking forward to helping you advance your career!</p>
  <p>Best regards,</p>
  <p>India</p>

  <br/><br/>
  <img src="cid:signatureImage" style="max-width: 50px; margin-top: 10px;" alt="Signature Logo" />
  <p><strong>India Rolfe</strong> | Founder, EastWest Solutions</p>
  <p><a href="mailto:India@EastWestSolutions.us">India@EastWestSolutions.us</a> | <a href="tel:+15095925381">(509) 592-5381</a></p>
  <p><a href="https://www.EastWestSolutions.us" target="_blank">www.EastWestSolutions.us</a></p>
</body>
</html>
`;

  return { text, html };
}


function resumeRefreshPlusResponse() {
  const text = `
Thank you for choosing EastWest Solutions to refresh your resume! My name is India,
and I will be working with you to update your resume. To ensure your updated resume
reflects your latest experience and skills, please provide the following details:

- Your Most Recent Resume
- Recent Job Updates (New Roles, Responsibilities, Promotions, or Achievements)
- Any New Certifications, Skills, or Training
- Adjustments to Career Goals or Target Industries
- Additional Preferences (Design, Formatting, or Specific Changes) If Any
- Key Strengths or Achievements You Would Like Highlighted in Your Cover Letter (Optional)

You can reply to this email with your details or attach any supporting documents you
feel are relevant. If you need any assistance, please don’t hesitate to ask.

Once I receive your information, I will complete your first draft within 5–7 business days.
Your package includes two rounds of edits after the first draft review, each completed
within 2–3 business days after feedback.

Thank you again, I am looking forward to helping you advance your career!

Best regards,  
India

India Rolfe | Founder, EastWest Solutions  
India@EastWestSolutions.us | (509) 592-5381  
www.EastWestSolutions.us
`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Resume Refresh - Plus Response</title>
</head>
<body style="font-family: Arial, sans-serif; color: #000000; line-height: 1.6;">
  <p>Thank you for choosing <strong>EastWest Solutions</strong> to refresh your resume! My name is India,
  and I will be working with you to update your resume. To ensure your updated resume
  reflects your latest experience and skills, please provide the following details:</p>

  <ul>
    <li>Your Most Recent Resume</li>
    <li>Recent Job Updates (New Roles, Responsibilities, Promotions, or Achievements)</li>
    <li>Any New Certifications, Skills, or Training</li>
    <li>Adjustments to Career Goals or Target Industries</li>
    <li>Additional Preferences (Design, Formatting, or Specific Changes) If Any</li>
    <li>Key Strengths or Achievements You Would Like Highlighted in Your Cover Letter (Optional)</li>
  </ul>

  <p>You can reply to this email with your details or attach any supporting documents you
  feel are relevant. If you need any assistance, please don’t hesitate to ask.</p>

  <p>Once I receive your information, I will complete your first draft within <strong>5–7 business days</strong>.
  Your package includes <strong>two rounds of edits</strong> after the first draft review, each completed
  within <strong>2–3 business days</strong> after feedback.</p>

  <p>Thank you again, I am looking forward to helping you advance your career!</p>
  <p>Best regards,</p>
  <p>India</p>

  <br/><br/>
  <img src="cid:signatureImage" style="max-width: 50px; margin-top: 10px;" alt="Signature" />
  <p><strong>India Rolfe</strong> | Founder, EastWest Solutions</p>
  <p><a href="mailto:India@EastWestSolutions.us">India@EastWestSolutions.us</a> | <a href="tel:+15095925381">(509) 592-5381</a></p>
  <p><a href="https://www.EastWestSolutions.us" target="_blank">www.EastWestSolutions.us</a></p>
</body>
</html>
`;

  return { text, html };
}



function resumeRefreshPremiumResponse() {
  const text = `
Thank you for choosing EastWest Solutions to refresh your resume! My name is India,
and I will be working with you to update your resume. To ensure your updated resume
reflects your latest experience and skills, please provide the following details:

- Your Most Recent Resume
- Recent Job Updates (New Roles, Responsibilities, Promotions, or Achievements)
- Any New Certifications, Skills, or Training
- Adjustments to Career Goals or Target Industries
- Additional Preferences (Design, Formatting, or Specific Changes) If Any
- Key Strengths or Achievements You Would Like Highlighted in Your Cover Letters (Optional)
- Up to Three Specific Job Postings You Would Like Tailored Cover Letters For

You can reply to this email with your details or attach any supporting documents you
feel are relevant. If you need any assistance, please don’t hesitate to ask.

Once I receive your information, I will complete your first draft within 7–10 business
days. Your package includes three rounds of edits after the first draft review, each
completed within 3 business days after feedback.

Thank you again, I am looking forward to helping you advance your career!

Best regards,  
India

India Rolfe | Founder, EastWest Solutions  
India@EastWestSolutions.us | (509) 592-5381  
www.EastWestSolutions.us
`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Resume Refresh - Premium Response</title>
</head>
<body style="font-family: Arial, sans-serif; color: #000000; line-height: 1.6;">
  <p>Thank you for choosing <strong>EastWest Solutions</strong> to refresh your resume! My name is India,
  and I will be working with you to update your resume. To ensure your updated resume
  reflects your latest experience and skills, please provide the following details:</p>

  <ul>
    <li>Your Most Recent Resume</li>
    <li>Recent Job Updates (New Roles, Responsibilities, Promotions, or Achievements)</li>
    <li>Any New Certifications, Skills, or Training</li>
    <li>Adjustments to Career Goals or Target Industries</li>
    <li>Additional Preferences (Design, Formatting, or Specific Changes) If Any</li>
    <li>Key Strengths or Achievements You Would Like Highlighted in Your Cover Letters (Optional)</li>
    <li>Up to Three Specific Job Postings You Would Like Tailored Cover Letters For</li>
  </ul>

  <p>You can reply to this email with your details or attach any supporting documents you
  feel are relevant. If you need any assistance, please don’t hesitate to ask.</p>

  <p>Once I receive your information, I will complete your first draft within <strong>7–10 business
  days</strong>. Your package includes <strong>three rounds of edits</strong> after the first draft review, each
  completed within <strong>3 business days</strong> after feedback.</p>

  <p>Thank you again, I am looking forward to helping you advance your career!</p>
  <p>Best regards,</p>
  <p>India</p>

  <br/><br/>
  <img src="cid:signatureImage" style="max-width: 50px; margin-top: 10px;" alt="Signature" />
  <p><strong>India Rolfe</strong> | Founder, EastWest Solutions</p>
  <p><a href="mailto:India@EastWestSolutions.us">India@EastWestSolutions.us</a> | <a href="tel:+15095925381">(509) 592-5381</a></p>
  <p><a href="https://www.EastWestSolutions.us" target="_blank">www.EastWestSolutions.us</a></p>
</body>
</html>
`;

  return { text, html };
}


function professionalPositioningBasicResponse() {
  const text = `
Thank you for choosing EastWest Solutions for your professional positioning needs!
My name is India, and I will be working with you to support your career growth. To tailor
the experience to your needs, please provide the following details:

- Your Current Resume
- Your Career Goals & Areas of Improvement
- Specific Skills or Topics You Want to Highlight (e.g. leadership, public speaking, negotiation)
- One Position-Specific Job Posting to Tailor Your Resume and Cover Letter
- LinkedIn Profile Link
- Preferred Format (One-on-one Coaching, Written Strategy, Action Plan, etc.)
- Any Challenges You’d Like to Address

You may reply to this email with your details or attach any supporting documents you
feel are relevant. If you need any assistance, please don’t hesitate to ask.

Once I receive your information, I will complete your first draft outline within 5–7
business days. Your package includes three rounds of edits after the first draft outline
review, each completed within 3 business days after feedback.

Thank you again, I am looking forward to helping you advance your career!

Best regards,  
India

India Rolfe | Founder, EastWest Solutions  
India@EastWestSolutions.us | (509) 592-5381  
www.EastWestSolutions.us
`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Professional Positioning - Basic Response</title>
</head>
<body style="font-family: Arial, sans-serif; color: #000000; line-height: 1.6;">
  <p>Thank you for choosing <strong>EastWest Solutions</strong> for your professional positioning needs!
  My name is India, and I will be working with you to support your career growth. To tailor
  the experience to your needs, please provide the following details:</p>

  <ul>
    <li>Your Current Resume</li>
    <li>Your Career Goals &amp; Areas of Improvement</li>
    <li>Specific Skills or Topics You Want to Highlight (e.g. leadership, public speaking, negotiation)</li>
    <li>One Position-Specific Job Posting to Tailor Your Resume and Cover Letter</li>
    <li>LinkedIn Profile Link</li>
    <li>Preferred Format (One-on-one Coaching, Written Strategy, Action Plan, etc.)</li>
    <li>Any Challenges You’d Like to Address</li>
  </ul>

  <p>You may reply to this email with your details or attach any supporting documents you
  feel are relevant. If you need any assistance, please don’t hesitate to ask.</p>

  <p>Once I receive your information, I will complete your first draft outline within <strong>5–7
  business days</strong>. Your package includes <strong>three rounds of edits</strong> after the first draft outline
  review, each completed within <strong>3 business days</strong> after feedback.</p>

  <p>Thank you again, I am looking forward to helping you advance your career!</p>
  <p>Best regards,</p>
  <p>India</p>

  <br/><br/>
  <img src="cid:signatureImage" style="max-width: 50px; margin-top: 10px;" alt="Signature" />
  <p><strong>India Rolfe</strong> | Founder, EastWest Solutions</p>
  <p><a href="mailto:India@EastWestSolutions.us">India@EastWestSolutions.us</a> | <a href="tel:+15095925381">(509) 592-5381</a></p>
  <p><a href="https://www.EastWestSolutions.us" target="_blank">www.EastWestSolutions.us</a></p>
</body>
</html>
`;

  return { text, html };
}

function professionalPositioningPlusResponse() {
  const text = `
Thank you for choosing EastWest Solutions for your professional positioning needs!
My name is India, and I will be working with you to support your career growth. To tailor
the experience to your needs, please provide the following details:

- Your Current Resume
- Your Career Goals & Areas of Improvement
- Specific Skills or Topics You Want to Highlight (e.g. leadership, public speaking, negotiation)
- Two Position-Specific Job Postings to Tailor Your Resumes and Cover Letters
- LinkedIn Profile Link + One Other Business Social Media Profile (Twitter, GitHub, Behance, Medium, etc.)
- Preferred Format (One-on-one Coaching, Written Strategy, Action Plan, etc.)
- Any Challenges You’d Like to Address

You may reply to this email with your details or attach any supporting documents you
feel are relevant. If you need any assistance, please don’t hesitate to ask.

Once I receive your information, I will complete your first draft outline within 7–10
business days. Your package includes five rounds of edits after the first draft outline
review, each completed within 3 business days after feedback.

Thank you again, I am looking forward to helping you advance your career!

Best regards,  
India

India Rolfe | Founder, EastWest Solutions  
India@EastWestSolutions.us | (509) 592-5381  
www.EastWestSolutions.us
`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Professional Positioning - Plus Response</title>
</head>
<body style="font-family: Arial, sans-serif; color: #000000; line-height: 1.6;">
  <p>Thank you for choosing <strong>EastWest Solutions</strong> for your professional positioning needs!
  My name is India, and I will be working with you to support your career growth. To tailor
  the experience to your needs, please provide the following details:</p>

  <ul>
    <li>Your Current Resume</li>
    <li>Your Career Goals &amp; Areas of Improvement</li>
    <li>Specific Skills or Topics You Want to Highlight (e.g. leadership, public speaking, negotiation)</li>
    <li>Two Position-Specific Job Postings to Tailor Your Resumes and Cover Letters</li>
    <li>LinkedIn Profile Link + One Other Business Social Media Profile (Twitter, GitHub, Behance, Medium, etc.)</li>
    <li>Preferred Format (One-on-one Coaching, Written Strategy, Action Plan, etc.)</li>
    <li>Any Challenges You’d Like to Address</li>
  </ul>

  <p>You may reply to this email with your details or attach any supporting documents you
  feel are relevant. If you need any assistance, please don’t hesitate to ask.</p>

  <p>Once I receive your information, I will complete your first draft outline within <strong>7–10
  business days</strong>. Your package includes <strong>five rounds of edits</strong> after the first draft outline
  review, each completed within <strong>3 business days</strong> after feedback.</p>

  <p>Thank you again, I am looking forward to helping you advance your career!</p>
  <p>Best regards,</p>
  <p>India</p>

  <br/><br/>
  <img src="cid:signatureImage" style="max-width: 50px; margin-top: 10px;" alt="Signature" />
  <p><strong>India Rolfe</strong> | Founder, EastWest Solutions</p>
  <p><a href="mailto:India@EastWestSolutions.us">India@EastWestSolutions.us</a> | <a href="tel:+15095925381">(509) 592-5381</a></p>
  <p><a href="https://www.EastWestSolutions.us" target="_blank">www.EastWestSolutions.us</a></p>
</body>
</html>
`;

  return { text, html };
}


function professionalPositioningPremiumResponse() {
  const text = `
Thank you for choosing EastWest Solutions for your professional positioning needs!
My name is India, and I will be working with you to support your career growth. To tailor
the experience to your needs, please provide the following details:

- Your Current Resume
- Your Career Goals & Areas of Improvement
- Specific Skills or Topics You Want to Highlight (e.g. leadership, public speaking, negotiation)
- Up to Five Position-Specific Job Postings to Tailor Your Resumes and Cover Letters
- LinkedIn Profile Link + One Other Business Social Media Profile (Twitter, GitHub, Behance, Medium, etc.)
- Preferred Format (One-on-one Coaching, Written Strategy, Action Plan, etc.)
- Any Challenges You’d Like to Address

You may reply to this email with your details or attach any supporting documents you
feel are relevant. If you need any assistance, please don’t hesitate to ask.

Once I receive your information, I will complete your first draft outline within 10–12
business days. Your package includes eight rounds of edits after the first draft outline
review, each completed within 3 business days after feedback.

Thank you again, I am looking forward to helping you advance your career!

Best regards,  
India

India Rolfe | Founder, EastWest Solutions  
India@EastWestSolutions.us | (509) 592-5381  
www.EastWestSolutions.us
`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Professional Positioning - Premium Response</title>
</head>
<body style="font-family: Arial, sans-serif; color: #000000; line-height: 1.6;">
  <p>Thank you for choosing <strong>EastWest Solutions</strong> for your professional positioning needs!
  My name is India, and I will be working with you to support your career growth. To tailor
  the experience to your needs, please provide the following details:</p>

  <ul>
    <li>Your Current Resume</li>
    <li>Your Career Goals &amp; Areas of Improvement</li>
    <li>Specific Skills or Topics You Want to Highlight (e.g. leadership, public speaking, negotiation)</li>
    <li>Up to Five Position-Specific Job Postings to Tailor Your Resumes and Cover Letters</li>
    <li>LinkedIn Profile Link + One Other Business Social Media Profile (Twitter, GitHub, Behance, Medium, etc.)</li>
    <li>Preferred Format (One-on-one Coaching, Written Strategy, Action Plan, etc.)</li>
    <li>Any Challenges You’d Like to Address</li>
  </ul>

  <p>You may reply to this email with your details or attach any supporting documents you
  feel are relevant. If you need any assistance, please don’t hesitate to ask.</p>

  <p>Once I receive your information, I will complete your first draft outline within <strong>10–12
  business days</strong>. Your package includes <strong>eight rounds of edits</strong> after the first draft outline
  review, each completed within <strong>3 business days</strong> after feedback.</p>

  <p>Thank you again, I am looking forward to helping you advance your career!</p>
  <p>Best regards,</p>
  <p>India</p>

  <br/><br/>
  <img src="cid:signatureImage" style="max-width: 50px; margin-top: 10px;" alt="Signature" />
  <p><strong>India Rolfe</strong> | Founder, EastWest Solutions</p>
  <p><a href="mailto:India@EastWestSolutions.us">India@EastWestSolutions.us</a> | <a href="tel:+15095925381">(509) 592-5381</a></p>
  <p><a href="https://www.EastWestSolutions.us" target="_blank">www.EastWestSolutions.us</a></p>
</body>
</html>
`;

  return { text, html };
}

