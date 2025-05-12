import displayRazorpay from "../../Payment/RecdirectToRazorpay"

const HandlePlanClick=async (payment_amount:number,userid:string | undefined)=>{
    await displayRazorpay(payment_amount,userid)
    
}

export default HandlePlanClick