import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from './styles'
import { formatNombreAvecEspaces } from "./utils.js";

function Form ({handleForm, setValues}) {
   let schema = yup.object().shape({
      fullname: yup.string().min(6, "- Please enter a valid name (6 characters min).").required().typeError('- Please enter a valid name (6 characters min).'),
      cardNumber: yup.number().positive().required().test('number', '- Please enter a valid card number (16 numbers).', number => String(number).length == 16).typeError('- Please enter a valid card number (16 numbers).'),
      cvc: yup.number().positive().required().test('cvc', '- Please enter a valid cvc (3 numbers)', number => String(number).length == 3).typeError(`- Please can you enter a valid cvc - - (3 numbers) -`),
      month: yup.string().matches(/^(0[1-9]|1[0-2])$/, 'Not valid').typeError('- Not Valid'),
      year: yup.number().moreThan(23, '- Not Valid').lessThan(100, '- Not Valid').required().typeError('- Not Valid'),
   })

   const {register, handleSubmit, formState, getValues, setValue} = useForm({
      mode: 'onChange',
      resolver: yupResolver(schema)
   })
   let {isSubmitting ,isValid, errors} = formState

   const handleChange = () => {
      setValues(getValues())

   }


   return (
      <form onChange={handleChange} onSubmit={handleSubmit(handleForm)} className={'flex flex-col w-[440px] ml-24 desktop:ml-0 desktop:bg-white desktop:p-6 desktop:rounded-[6px] desktop:border-gray-200 desktop:border-2 mobile:w-full mt-16 desktop:-mt-8'}>

         <div className={'flex flex-col mb-8'}>
            <label htmlFor="fullname" className={styles.labels}>CARDHOLDER NAME</label>
            <input id={'fullname'} type="text" {...register('fullname')} className={`${styles.inputs} ${errors.fullname ? 'border-custom4' : ''}`} placeholder={'e.g. John Doe'} />
            {errors.fullname && <span className={'text-red-700 text-xs'}>{errors.fullname.message}</span>}
         </div>


         <div className={'flex flex-col mb-8'}>
            <label htmlFor="cardNumber" className={styles.labels}>CARD NUMBER</label>
            <input id="cardNumber" type="text"{...register('cardNumber')} className={`${styles.inputs} ${errors.cardNumber ? 'border-custom4' : ''}`} placeholder="e.g. XXXX XXXX XXXX XXXX" onChange={(e) => {
                  const formattedValue = formatNombreAvecEspaces(e.target.value);
                  setValue("cardNumber", formattedValue, { shouldValidate: true });
               }} onKeyDown={(e) => {
               const input = e.target;
               if (e.key === 'Backspace') {
                  const cursorPosition = input.selectionStart;
                  const isDeletingSpace = input.value[cursorPosition - 1] === ' ';
                  if (isDeletingSpace) {
                     const valueWithoutSpace = input.value.replace(/ /g, '');
                     setValue("cardNumber", valueWithoutSpace, { shouldValidate: true });
                  }
               }
            }}
            />
            {errors.cardNumber && <span className={'text-red-700 text-xs'}>{errors.cardNumber.message}</span>}
         </div>


         <div className="flex mb-8">
            <div className="flex flex-col w-[50%] mr-4">
               <label htmlFor="month" className={styles.labels}>EXP. DATE (MM/YY)</label>
               <div className={'flex mr-4'}>
                  <div>
                     <input id={'month'} type="text" {...register('month')} className={`${styles.inputs} max-w-[70%] desktop:max-w-[100%] ${errors.month ? 'border-custom4' : ''}`} placeholder={'MM'} />
                     {errors.month && <span className={'text-red-700 text-xs block'}>{errors.month.message}</span>}
                  </div>
                  <div>
                     <input id={'year'} type="text" {...register('year')} className={`${styles.inputs} max-w-[70%] desktop:max-w-[100%] ${errors.year ? 'border-custom4' : ''}`} placeholder={'YY'} />
                     {errors.year && <span className={'text-red-700 block text-xs'}>{errors.year.message}</span>}
                  </div>
               </div>
            </div>

            <div className={'flex flex-col w-[47%]'}>
               <label htmlFor="cvc" className={`xs-mobile:mt-4 ${styles.labels}`}>CVC</label>
               <input id={'cvc'} type="text" {...register('cvc')} className={`${styles.inputs} ${errors.cvc ? 'border-custom4' : ''}`} />
               {errors.cvc && <span className={'text-red-700 text-xs'}>{errors.cvc.message}</span>}
            </div>


         </div>

         <input type="submit" value={'Confirm'} disabled={isSubmitting || !isValid} className={`text-custom1 py-[10px] font-grotesk font-semibold text-custom1 cursor-pointer rounded-lg ${isSubmitting || !isValid ? 'bg-custom3/75' : 'bg-custom3'}`} />
      </form>
   )
}

export default Form;