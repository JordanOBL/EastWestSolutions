'use client'
import {useForm } from "react-hook-form";
import React from "react";

import {handleSubmitQuoteForm} from '../../utils/sendEmails/handleSubmit.ts'

const LeadershipStrategy = () =>
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
         leadershipCount: '',
         leadershipDevelopmentProgram: '',
         leadershipChallenges: [],
         leadershipGoals: [],
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
      <form  onSubmit={handleSubmit(async ( data  )=> {
         const response = await handleSubmitQuoteForm(data, 'leadership_strategy')
         if (response?.status === 200) {
            alert('Form submitted successfully!')
            reset()
         } else {
            alert('Form submission failed!')
         }
      })} className="p-6 m-6 md:p-10 w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg">
         <h2 className="text-3xl font-bold mb-6 text-primary">Leadership Strategy Consultation</h2>

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
            <input {...register("industry", {required: 'Industry is required'})} type="text" className="input"  />
            <p className="text-red-500">{errors.industry?.message}</p>
            <label>Business Stage</label>
            <p role="alert" className="text-red-500">{errors.businessStage?.message}</p>
            <select {...register("businessStage", {required: 'Business Stage is required'})}  className="input w-16"  >
               <option value="">Select</option>
               <option value="Pre-Launch">Pre-Launch</option>
               <option value="Early Growth">Early Growth</option>
               <option value="Scaling">Scaling</option>
               <option value="Established">Established</option>
            </select>
            <label>How many members are in your leadership team?</label>
            <p role="alert" className="text-red-500">{errors.leadershipCount?.message}</p>
            <input {...register("leadershipCount", {required: 'Leadership count is required'})} type="number" className="input w-16"  />
            {/* Leadership Challenges */}
            <div className="mb-8">
               <h3 className="text-lg font-semibold text-primary">Leadership Challenges</h3>
               <p role="alert" className="text-red-500">{errors.leadershipChallenges?.message}</p>
               {[
                  'Lack of strategic alignment',
                  'Poor communication',
                  'Slow decision-making',
                  'Lack of accountability',
                  'Conflict among leaders',
                  'Lack of succession planning',
               ].map((challenge) => (
                     <label key={challenge} className="block">
                        <input type="checkbox" {...register("leadershipChallenges", {required: 'At least one challenge is required', minLength: 1})} value={challenge}  /> {challenge}
                     </label>
                  ))}
            </div>

            {/* Package Selection */}
            <div className="mb-8 flex flex-col"> 
               <h3 className="text-lg font-semibold text-primary">Package Selection</h3>
               <label>Select the package you are interested in:</label>
               <p className="text-red-500">{errors.packageInterest?.message}</p>
               <select {...register("packageInterest", {required: 'Package is required'})} className="input" >
                  <option value="">Select</option>
                  <option value="basic">$1,250 - $1,750 (Basic)</option>
                  <option value="plus">$2,000 - $3,000 (Plus)</option>
                  <option value="premium">$3,500 - $5,000 (Premium)</option>
               </select>
                <label>Do you need additional customization?</label>
               <p className="text-red-500">{errors.additionalPackageDetails?.message}</p>
               <select {...register("additionalPackageDetails", {required: 'Please select one option'})} className="input" >   
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
               </select>
               <p role="alert" className="text-red-500">{errors.additionalPackageDetailsMessage?.message}</p>
               { additionalPackageDetails === 'yes' &&
                  <textarea {...register("additionalPackageDetailsMessage", {required: 'Additional package details are required for your selection', minLength: 10}))} className="input" />
               }

            </div>

            <div className="mb-8">
               <h3 className="text-lg font-semibold text-primary">What are the key leadership goals you want to achieve? (Select all that apply)</h3>
               <p role="alert" className="text-red-500">{errors.leadershipGoals?.message}</p>
               {[
                  'Better leadership alignment &amp; communication',
                  'Identifying leadership gaps &amp; development opportunities',
                  'Creating a structured leadership training program',
                  'Developing a leadership succession plan',
                  'Executive coaching for key leaders',
                  'Setting clear leadership performance goals',
               ].map((goal) => (
                     <label key={goal} className="block">
                        <input type="checkbox" {...register("leadershipGoals", {required: 'At least one goal is required', minLength: 1})} value={goal}  /> {goal}
                     </label>
                  ))}
            </div>

            {/* Leadership Development Program */}
            <label>Do you currently have any leadership development programs in place?</label>
            <p role="alert" className="text-red-500">{errors.leadershipDevelopmentProgram?.message}</p>
            <select {...register("leadershipDevelopmentProgram", {required: 'Please select one option'})} className="input" >
               <option value="">Select</option>
               <option value="yes">Yes</option>
               <option value="no">No</option>
            </select>

         </div>


         {/* Preferred Start Date */}
         <div className="mb-8">
            <label>Is there a hard deadline for your leadership strategy?</label>
            <p role="alert" className="text-red-500">{errors.deadline?.message}</p>
            <select {...register("deadline", {required: 'Please select one option'})}  className="input">
               <option value="">Select</option>
               <option value="yes">Yes</option>
               <option value="no">No</option>
            </select>
            { deadline === 'yes' && (

               <div>
                  <label>Please enter hard deadline:?</label>
                  <p role="alert" className="text-red-500">{errors.deadlineDate?.message}</p>
                  <input {...register("deadlineDate", {required: 'Deadline is required for your selected option'})} type="date" className="input"  />
               </div>)
            }

         </div>

         {/* Additional Information */}
         <div className="mb-8">
            <label>Any other relevant details or specific requirements for your leadership strategy?</label>
            <textarea {...register("additionalDetails")} className="input"  />
         </div>

         <button type="submit" className="w-full bg-primary text-white py-4 px-4 rounded-lg hover:bg-secondary hover:text-primary hover:cursor-pointer transition">
            Request Quote
         </button>
      </form>
   );
};
export default LeadershipStrategy;
