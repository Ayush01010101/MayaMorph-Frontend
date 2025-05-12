import { IndianRupee, Loader2 } from "lucide-react";
import { ReactNode } from "react";
import { PuffLoader } from "react-spinners";
import { createPortal } from "react-dom";

const PaymentProcessingPopup = (): ReactNode => {
  return createPortal(
    <div className="h-[100vh] w-screen bg-black/60 flex flex-col justify-center items-center">
      <div className="flex flex-col w-full justify-center items-center">
        {/* Loader with Rupee icon in center */}
        <div className="relative w-[130px] h-[130px] flex justify-center items-center">
          <div className="absolute">
            <PuffLoader
            color="#b2d445"
            className="absolute"
            size={130}
          />
          </div>
          <IndianRupee color="white" size={40} className="z-10" />
        </div>

        <h3 className="text-[#b2d445] mt-4 text-xl font-bold uppercase">payment is processing</h3>
      </div>
    </div>,
    document.querySelector("#portal") as HTMLDivElement
  );
};

export default PaymentProcessingPopup;
