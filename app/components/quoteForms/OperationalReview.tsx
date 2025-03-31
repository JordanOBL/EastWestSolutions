'use client'
import {useForm } from "react-hook-form";
import React from "react";

import {handleSubmitQuoteForm} from '../../utils/sendEmails/handleSubmit.ts'

const  OperationalReview = () =>
{ 
   const {register, reset, handleSubmit, formState: {errors}, watch} = useForm({
      defaultValues: {
         fullName: '',
         email: '',
         phone: '',
         companyName: '',
         companyWebsite: '',
         industry: '',
         businessStage: '',
         operationalChallenges : [],
         primaryObjectives: [],
         kpiMetrics: [],
         packageInterest: '',
         additionalPackageDetails: '',
         additionalPackageDetailsMessage: '',
         deadline: '',
         deadlineDate: '',
         additionalDetails: '',

      }});
   const deadline = watch("deadline")
   const additionalPackageDetails = watch("additionalPackageDetails")

   return (
      <form  onSubmit={handleSubmit(async (data) => {
         const response = await handleSubmitQuoteForm(data, 'operational_review')
         if (response?.status === 200) {
            alert('Form submitted successfully!')
            reset()
         }else{
            alert('Form submission failed!') 
         }

      })} className="p-6 m-6 md:p-10 w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
         <h2 className="text-3xl font-bold mb-6 text-primary">Operational Consultation</h2>

         {/* Basic Information */}
         <div className="mb-8">
            <h3 className="text-lg font-semibold text-primary">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                  <label>Full Name</label>
                  <input {...register("fullName", {required: 'Name is required'})} type="text" className="input" aria-invalid={errors.fullName ? "true" : "false"}  />
                  <p role="alert" className="text-red-500">{errors.fullName?.message}</p>
               </div>
               <div>
                  <label>Email Address</label>
                  <input {...register("email", {required: 'Email is required', minLength: 6} )} type="email"  className="input" aria-invalid={errors.email ? "true" : "false"}/>
                  <p role="alert" className="text-red-500">{errors.email?.message}</p>
               </div>
               <div>
                  <label>Phone Number</label>
                  <input {...register("phone", {required: 'Phone number is required', minLength: 10})} type="tel"  className="input" aria-invalid={errors.phone ? "true" : "false"}  />
                  <p role="alert" className="text-red-500">{errors.phone?.message}</p>
               </div>
               <div>
                  <label>Company Name</label>
                  <input {...register("companyName")} type="text" className="input"  />
               </div>
               <div>
                  <label>Company Website (if applicable)</label>
                  <input {...register("companyWebsite")} type="text" className="input"  />
               </div>
            </div>
         </div>

         {/* Business Overview */} 
         <h3 className="text-lg font-semibold text-primary">Business Overview</h3>
         <div className="mb-8 flex flex-col grid grid-cols-1 gap-2 ">

            <label>Industry</label>
            <p className="text-red-500">{errors.industry?.message}</p>
            <input {...register("industry", {required: 'Industry is required'})} type="text" className="input"  />
            <label>Business Stage</label>
            <p className="text-red-500">{errors.businessStage?.message}</p>
            <select {...register("businessStage", {required: 'Business Stage is required'})} className="input w-16"  >
               <option value="">Select</option>
               <option value="Pre-Launch">Pre-Launch</option>
               <option value="Early Growth">Early Growth</option>
               <option value="Scaling">Scaling</option>
               <option value="Established">Established</option>
            </select>
            {/* Business Goals */}
            <div className="mb-8">
               <h3 className="text-lg font-semibold text-primary">What are the key operational challenges your business is facing? (Select all that
                  apply)</h3>
               <p className="text-red-500">{errors.operationalChallenges?.message}</p>
               {[
                  'Workflow inefficiencies',
                  'Bottlenecks in processes',
                  'Lack of standard procedures',
                  'High operational costs',
                  'Technology or automation gaps',
               ].map((challenge) => (
                     <label key={challenge} className="block">
                        <input type="checkbox" {...register("operationalChallenges", {required: 'At least one challenge is required', minLength: 1})} value={challenge}  /> {challenge}
                     </label>
                  ))}
            </div>

            {/* Package Selection */}
            <div className="mb-8 flex flex-col">
               <h3 className="text-lg font-semibold text-primary">Package Selection</h3>
               <p role="alert" className="text-red-500">{errors.packageInterest?.message}</p>
               <label>Select the package you are interested in:</label>
               <p className="text-red-500">{errors.packageInterest?.message}</p>
               <select {...register("packageInterest", {required: 'Package is required'})} className="input" >
                  <option value="">Select</option>
                  <option value="basic">$800 - $1,200 (Basic)</option>
                  <option value="plus">$1,500 - $2,000 (Plus)</option>
                  <option value="premium">$2,500 - $3,500 (Premium)</option>
               </select>

               <label>Do you need additional customization or services beyond the selected package?</label>
               <p className="text-red-500">{errors.additionalPackageDetails?.message}</p>
               <select {...register("additionalPackageDetails", {required: 'Please select an option'})} className="input" >   
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
               </select>
               <p role="alert" className="text-red-500">{errors.additionalPackageDetailsMessage?.message}</p>
               { additionalPackageDetails === 'yes' &&
                  <textarea {...register("additionalPackageDetailsMessage", {required: 'Please provide additional details'})} className="input" />
               }

            </div>

            {/* Leadership Challenges */}
            <div className="mb-8">
               <h3 className="text-lg font-semibold text-primary">What are your primary objectives for this operational review? (Select all that
                  apply)</h3>
               <p role="alert" className="text-red-500">{errors.primaryObjectives?.message}</p>
               {[
                  'Identifying inefficiencies in processes and workflows',
                  'Improving productivity and reducing costs',
                  'Streamlining operations for scalability',
                  'Implementing key performance indicators (KPIs)',
                  'Redesigning processes for greater efficiency',
                  'Risk mitigation and contingency planning',
               ].map((objective) => (
                     <label key={objective} className="block">
                        <input type="checkbox" {...register("primaryObjectives", {required: 'At least one objective is required', minLength: 1})} value={objective}  /> {objective}
                     </label>
                  ))}
            </div>

            {/* Leadership Development Program */}
            <label>Do you currently track operational performance metrics or KPIs?</label>
            <p role="alert" className="text-red-500">{errors.kpiMetrics?.message}</p>
            <select {...register("kpiMetrics", {required: 'Please select an option'})} className="input" >
               <option value="">Select</option>
               <option value="yes">Yes</option>
               <option value="no">No</option>
            </select>

         </div>


         {/* Preferred Start Date */}
         <div className="mb-8">
            <label>Is there a hard deadline for your Operational Review?</label>
            <p role="alert" className="text-red-500">{errors.deadline?.message}</p>
            <select {...register("deadline", {required: 'Please select an option'})} className="input">
               <option value="">Select</option>
               <option value="yes">Yes</option>
               <option value="no">No</option>
            </select>
            { deadline === 'yes' && (

               <div>
                  <label>Please enter hard deadline: </label>
                  <p role="alert" className="text-red-500">{errors.deadlineDate?.message}</p>
                  <input {...register("deadlineDate", {required: 'Deadline date is required for your selection'})} type="date" className="input"  />
               </div>)
            }

         </div>

         {/* Additional Information */}
         <div className="mb-8">
            <label>Any other relevant details or specific requirements for your Operational Review
               ?</label>
            <textarea {...register("additionalDetails")} className="input"  />
         </div>

         <button type="submit" className="w-full bg-primary text-white py-4 px-4 rounded-lg hover:bg-secondary hover:text-primary hover:cursor-pointer transition">
            Request Quote
         </button>
      </form>
   );
};
export default OperationalReview;
