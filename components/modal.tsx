'use client'

import { loginApi } from "@/actions/api/dataget";
import { redirect, useRouter } from "next/navigation";
import { useFormState } from "react-dom";

let initialState = {
    message: '',
    error: null
}
function Modal() {
    const router = useRouter()
    const sellYourItemAction = (prevState: any, formData: FormData) => {
      const email =  formData.get('email')
        const password =formData.get('password')
        loginApi({ "email": email, "password": password }).then((res) => {
            router.push("/profile/dashboard");
        })
    }
    const [state, formAction] = useFormState<any>(
        sellYourItemAction as any,
        initialState
      );
   
    return (
        <>
            <dialog
                className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="bg-gray-200  m-auto p-8">
                <button type="button" onClick={router.back} className="bg-orange-500 mt-5 rounded-md text-white p-2 ">x</button>
                    <form className="flex flex-col  items-center" action={formAction}>
                        <label className="text-gray-700 font-medium">Email</label>
                        <input className="w-280 p-2 rounded-md text-sm font-normal" name="email" type="text"  required />
                        <label className="text-gray-700 font-medium">password</label>
                        <input  className="w-280 p-2 rounded-md text-sm font-normal" name="password" type="password" required/>
                        <button type="submit" className="bg-orange-500 mt-5 rounded-md text-white p-2">login</button>
                    </form>

                </div>
            </dialog>
        </>
    );
}

export default Modal;