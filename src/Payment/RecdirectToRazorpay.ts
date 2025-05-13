import loadScript from "./RazorpayScriptLoader";
import axios from "axios";
import Database from "../Supabase/Database";


declare global {
    interface Window {
        Razorpay: any;
    }
}

async function displayRazorpay(payment_amount:number,userid:string |undefined) {
        

        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // creating a new order
        const result = await axios.post(import.meta.env.VITE_RAZORPAY_CREATEORDER_ROUTE,{amount:payment_amount});
        
        if (!result) {
            alert("Server error. Are you online?");
            return;
        }


        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: import.meta.env.VITE_RAZORPAY_TEST_KEY,
            amount: amount.toString(),
            currency: currency,
            description: "Test Transaction",
            order_id: order_id,
            handler: async function (response:any) {
                
                const data = {
                    orderCreationId: order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature,
                };

                const result:any = await axios.post(import.meta.env.VITE_RAZORPAY_VERIFY_PAYMENT_ROUTE, data)
                .then(async (res:any)=>{
                    if(res.status == 200){
                        
                        //add credits in supbase 
                        if(userid && payment_amount == 29 ){
                            
                            const creditsdata=await Database.getcredit(userid)
                            const previouscredit=creditsdata.data?.credits
                            
                         

                                data&&  await Database.updateCredits(userid,previouscredit?previouscredit:0 + 15)
                                .then((res)=>console.log(res,'payment hogaya'))
                     
                           
                            
                        }
                        if(userid && payment_amount==499){
                            const creditsdata=await Database.getcredit(userid)
                            const previouscredit=creditsdata.data?.credits
                          


                                data&&  await Database.updateCredits(userid,previouscredit?previouscredit:0 + 250)
                                .then((res)=>console.log(res,'payment hogaya'))
                                
                          
                        }
                    }   
                })
        

            },

            
           
            
            
        };
        
        const paymentObject:any =new window.Razorpay (options);
    
        paymentObject.open();
}

export default displayRazorpay