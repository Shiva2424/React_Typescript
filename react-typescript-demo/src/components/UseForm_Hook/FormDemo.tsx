import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { DevTool} from "@hookform/devtools"


type Formdata = {
  email: string;
  channel: string;
  username: string;
  phonenumbers: string[];
  phnumbers: {number:string}[];
  age: number;
  dob: Date;
}

function FormDemo() {
  // we can also assign  function to set dynamic data
 const form = useForm<Formdata>({
  defaultValues: {
    email:"",
    channel:"",
    username:"Shiva",
    phonenumbers:["",""],
    phnumbers: [{number:""}],
    age:0,
    dob: new Date(),
  }
 });
 const { register, control, handleSubmit, formState,watch, getValues, setValue} = form;
 const { errors, touchedFields, dirtyFields } = formState

 const {fields, append, remove} = useFieldArray({
  name: "phnumbers",
  control
 })
 const onSubmit = (data: Formdata) => {
  console.log("Form Submitted",data);
 }
 console.log(errors);

 const handleGetValues = () => {
  console.log("get values", getValues())
 }

 const handleSetValue = () => {
  setValue("username","");
 }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>FormDEmo</div>
    <div style={{display:"flex", flexDirection:"column",width:'100vw',alignItems:"center",marginTop:"20vh"}}>
    <label htmlFor="email">Email</label>
    <input type="text" id="email" 
   {...register("email", {
    pattern: {
      value:/[^\s@]+@[^\s@]+\.[^\s@]+/gi,
      message: "Invalid email address",
    },
    validate: {
      notAdmin: (value) => {
        return (
          value !== "admin@example.com" || "Enter a different email address"
        );
      },
      notBlackListed: (value) => {
        return (
          !value.endsWith("baddomain.com") || "This domain is not supported"
        );
      }
    }
   })}
    />
<p className='errors'>{errors.email?.message }</p>
    <label htmlFor="username">Username</label>
    <input type="text" id="username" 
    {...register("username",{required: "Username is required"})}/>
    <p className='errors'>{errors.username?.message }</p>

    <label htmlFor="channel">Channel</label>
    <input type="text" id="channel"  
    {...register("channel",{required:{value: true, message:"Channel is required"}})}/>
    <p className='errors'>{errors.channel?.message }</p>

    <label htmlFor="primary-phone">Primary Phone no:</label>
    <input type="number" id="primary-phone"  
    {...register("phonenumbers.0",{required:"Primary contact is required",
    validate: (value) => {
      return value.length === 10 || "Invalid mobile number"
    }
    })}/>
    <p className='errors'>{errors.phonenumbers && errors.phonenumbers[0]?.message }</p>

    <label htmlFor="secondary-phone">Secondary Phone no:</label>
    <input type="number" id="secondary-phone"  
    {...register("phonenumbers.1", { required: "Secondary contact required",
    validate: (value) => {
      return value.length === 10 || "Invalid mobile number"
    }
    })}/>
    <p className='errors'>{errors.phonenumbers && errors.phonenumbers[1]?.message }</p>
    </div>
    <div>
      <label> List of phone numbers</label>
      <div>
        {
          fields.map((field, index) => {
            return (
              <div className='form-control' key={field.id}>
                <input type='text' 
                {...register(`phnumbers.${index}.number` as const)}
                />
                {
                  index > 0 && (
                    <button type='button' onClick={ () => remove(index)}>Remove</button>
                  )
                }
              </div>
            )
          })
        }
        <button type='button' onClick={ () => append({number: ""})}>Add phone number</button>
      </div>
    </div>

    <label htmlFor="age">Age</label>
    <input type="number" id="age"  
    {...register("age",{ valueAsNumber: true,required:{value: true, message:"Age is required"}})}/>
    <p className='errors'>{errors.age?.message }</p>

    <label htmlFor="dob">DOB</label>
    <input type="date" id="dob"  
    {...register("dob",{ valueAsDate: true,required:{value: true, message:"DOB is required"}})}/>
    <p className='errors'>{errors.dob?.message }</p>

    <button>Submit</button>
    <button onClick={handleGetValues}>Get Values</button>
    <button onClick={handleSetValue}>Set Values</button>
    </form>
    <DevTool control={control}/>
    </>
  )
}

export default FormDemo