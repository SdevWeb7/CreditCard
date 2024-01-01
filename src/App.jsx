import Form from "./Form.jsx"
import { useState } from "react";

function App() {
   const [values, setValues] = useState({})
   const [validated, setValidated] = useState(false)


   const handleForm = (data) => {
      //fetchAPI(data)
      setValidated(true)
   }

   return (
    <div className={"container-2xl min-h-[100vh] bg-[url('../public/images/bg-main-desktop.png')] bg-no-repeat flex justify-center items-center font-grotesk desktop:flex-col relative mobile:bg-none desktop:pb-[60px] pb-[120px]"}>

       <div className={"mobile:block hidden absolute top-0 left-0 right-0 h-[40%] bg-[url('../public/images/bg-main-mobile.png')] bg-contain"}></div>

       <div className={"desktop:pb-0 desktop:flex desktop:flex-col-reverse mobile:ml-[0%]"}>
          <div className="relative z-1 desktop:-translate-y-28 -translate-x-4 mobile:translate-x-0" style={{zIndex: 10}}>
             <img src="../public/images/bg-card-front.png" alt="a" className={'mt-32 mb-8 -translate-x-20 desktop:m-0 mobile:translate-x-0 mobile:translate-y-16'} />
             <img src="../public/images/card-logo.svg" alt="a" className={'absolute top-7 -left-11 mobile:left-4 xs-mobile:top-[50%] mobile:top-[40%]'} />
             <p className={'absolute bottom-20 -left-11 text-custom1 text-[28px] tracking-[4px] font-semibold ml-2 mobile:left-[5%] mobile:top-[80%] xs-mobile:top-[95%] xs-mobile:text-sm'}>{Object.keys(values).length > 0 && values.cardNumber.length > 0 ? values.cardNumber : '0000 0000 0000 0000'}</p>
             <p className={'absolute bottom-6 -left-11 text-custom1/85 font-semibold text-sm mobile:left-4 mobile:-bottom-12 xs-mobile:-bottom-14'}>{Object.keys(values).length > 0 && values.fullname.length > 0 ? values.fullname.toUpperCase() : 'JOHN DOE'}</p>
             <p className={'absolute bottom-6 text-custom1/85 text-sm font-semibold tracking[1.2px] right-28 mobile:right-4 xs-mobile:-bottom-14 mobile:-bottom-12'}>{Object.keys(values).length > 0 && values.month.length > 0 ? values.month : '00'}/{Object.keys(values).length > 0 && values.year.length > 0 ? values.year : '00'}</p>
          </div>

          <div className="relative desktop:mt-8">
            <img src="../public/images/bg-card-back.png" alt="a" style={{zIndex: 1}} />
            <p className={'absolute top-[107px] right-14 text-white/90 font-semibold tracking-[2px] mobile:top-[43%] -z-50 xs-mobile:right-12'} style={{zIndex: 1000}}>{Object.keys(values).length > 0 && values.cvc.length > 0 ? values.cvc : '000'}</p>
          </div>
       </div>


       {validated ?
          <div className={'flex flex-col items-center desktop:bg-white desktop:p-8 desktop:-mt-12 rounded-[6px] desktop:border-2 desktop:border-gray-300 ml-32 mobile:ml-0 mobile:border-none'}>
             <img className={'mb-6'} src="../public/images/icon-complete.svg" alt="a" />
             <h1 className={"font-bold text-xl tracking-[1.5px]"}>THANK YOU!</h1>
             <p className={'text-sm text-custom2 mt-2'}>we-ve added your card details</p>
             <button onClick={() => setValidated(false)} className={'text-custom1 bg-custom3 rounded-[4px] py-2 text-sm font-bold px-10 mt-6 mb-12'}>Continue</button>
          </div> :
          <Form handleForm={handleForm} setValues={setValues} />}


    </div>
  )
}

export default App;
