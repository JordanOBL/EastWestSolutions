'use client'
import {useForm } from "react-hook-form";
import React from "react";
import {handleSubmitQuoteForm} from '../../utils/api.ts'
import {submitFormData} from '../../actions/actions.ts'
const LeadershipStrategyBasic = () =>
{ 
   const {register, handleSubmit, formState: {errors}, watch} = useForm({
      defaultValues: {
         fullName: '',
         email: '',
         phone: '',
         companyName: '',
         companyWebsite: '',
         industry: '',
         businessYears: '',
         employeeCount: '',
         leadershipCount: '',
         leadershipStructure: '',
         leadershipDevelopmentProgram: '',
         leadershipProgramDetails: '',
         leadershipChallenges: [],
         decisionMakingProcess: '',
         leadershipCulture: '',
         communicationEffectiveness: '',
         leadershipMeetingFrequency: '',
         leadershipOutcomes: [],
         openToTraining: '',
         goalSettingFramework: '',
         packageInterest: '',
         preferredStartDate: '',
         additionalDetails: '',

      }});
   //   const [formData, setFormData] = React.useState({
   //      fullName: '',
   //      email: '',
   //      phone: '',
   //      companyName: '',
   //      companyWebsite: '',
   //      industry: '',
   //      businessYears: '',
   //      employeeCount: '',
   //      leadershipCount: '',
   //      leadershipStructure: '',
   //      leadershipDevelopmentProgram: '',
   //      leadershipProgramDetails: '',
   //      leadershipChallenges: [],
   //      decisionMakingProcess: '',
   //      leadershipCulture: '',
   //      communicationEffectiveness: '',
   //      leadershipMeetingFrequency: '',
   //      leadershipOutcomes: [],
   //      openToTraining: '',
   //      goalSettingFramework: '',
   //      packageInterest: '',
   //      preferredStartDate: '',
   //      additionalDetails: '',
   //   });
   //
   //   // Handle Input Changes for Text Fields
   //   const handleChange = (e) => {
   //      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   //   };
   //
   //   // Handle Multi-Select Checkboxes
   //   const handleCheckboxChange = (e) => {
   //      const { name, value, checked } = e.target;
   //      setFormData((prev) => ({
   //         ...prev,
   //         [name]: checked
   //            ? [...prev[name], value]
   //            : prev[name].filter((item) => item !== value),
   //      }));
   //   };
   //
   const leadershipDevelopmentProgram = watch("leadershipDevelopmentProgram")

   return (
      <form  onSubmit={handleSubmit(data => {
         console.log(data)
         handleSubmitQuoteForm(data)
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
            <label>Years in Business</label>
            <input {...register("businessYears", {required: 'Business years is required'})} type="number" className="input w-16"  />
            <label>Number of Employees</label>
            <input {...register("employeeCount", {required: 'Employee count is required'})} type="number" className="input w-16"  />
            <label>Leadership Positions</label>
            <input {...register("leadershipCount", {required: 'Leadership count is required'})} type="number" className="input w-16" />
            <label>Describe Your Leadership Structure</label>
            <textarea {...register("leadershipStructure", {required: 'Leadership structure description is required'})} className="input" />
            <p className="text-red-500">{errors.leadershipStructure?.message}</p>

            {/* Leadership Development Program */}
            <label>Do you have a leadership development or training program?</label>
            <select {...register("leadershipDevelopmentProgram", {required: true})} className="input" >
               <option value="">Select</option>
               <option value="yes">Yes</option>
               <option value="no">No</option>
            </select>

            {leadershipDevelopmentProgram === 'yes' &&(  <div className="flex flex-col">
               <label>If Yes, Describe Your Leadership Development Program</label>
               <textarea {...register("leadershipProgramDetails")} rows={3}  />
            </div> )}
         </div>

         {/* Leadership Challenges */}
         <div className="mb-8">
            <h3 className="text-lg font-semibold text-primary">Leadership Challenges</h3>
            {[
               'Lack of strategic alignment',
               'Poor communication',
               'Slow decision-making',
               'Lack of accountability',
               'Conflict among leaders',
               'Lack of succession planning',
            ].map((challenge) => (
                  <label key={challenge} className="block">
                     <input type="checkbox" {...register("leadershipChallenges", {required: true, minLength: 1})} value={challenge}  /> {challenge}
                  </label>
               ))}
         </div>

         {/* Package Selection */}
         <div className="mb-8">
            <label>Select the package you are interested in:</label>
            <p className="text-red-500">{errors.packageInterest?.message}</p>
            <select {...register("packageInterest", {required: 'Package is required'})} className="input" >
               <option value="">Select</option>
               <option value="basic">$1,250 - $1,750 (Basic)</option>
               <option value="plus">$2,000 - $3,000 (Plus)</option>
               <option value="premium">$3,500 - $5,000 (Premium)</option>
            </select>
         </div>

         {/* Preferred Start Date */}
         <div className="mb-8">
            <label>Preferred Start Date</label>
            <input {...register("preferredStartDate")} type="date" className="input"  />
         </div>

         {/* Additional Information */}
         <div className="mb-8">
            <label>Any other details you wish to provide?</label>
            <textarea {...register("additionalDetails")} className="input"  />
         </div>

         <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition">
            Request Quote
         </button>
      </form>
   );
};
export default LeadershipStrategyBasic;
