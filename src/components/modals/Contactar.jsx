import { forwardRef } from "react";
import ButtonContactar from "./ButtonContactar";

const Contactar = forwardRef(({ closeDialog }, ref) => {
  return (
    <dialog
      ref={ref}
      className="p-3 sm:p-8 bg-white rounded-3xl place-self-center text-center"
      closedby="any"
    >
      <div className="flex flex-col place-items-center">
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>

        <stripe-buy-button
          buy-button-id="buy_btn_1R9V1II5g85vdJzPxKf3yRz6"
          publishable-key="pk_test_51R9UkxI5g85vdJzPtDa7NcDxKchlsLZqyzOHweCLFVzmyF0181NOoUArMYMngXU1JCD556ErjORCrKQFCoYX1ZzT00IivkFlSs"
        ></stripe-buy-button>

        <div className="flex items-center gap-2">
          <hr className="border-t border-[#908b85] w-[50px]" />
          <span className="text-[#908b85]">y/o</span>
          <hr className="border-t border-[#908b85] w-[50px]" />
        </div>

        <ButtonContactar closeDialog={closeDialog} />
        <button className="font-[900]" onClick={closeDialog}>
          Cerrar
        </button>
      </div>
    </dialog>
  );
});

export default Contactar;
