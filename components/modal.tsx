'use client'

import { useRouter } from "next/navigation";
function Modal() {
    const router = useRouter()
    return (
        <>
            <dialog
                className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="bg-gray-200  m-auto p-8">
                <button type="button" onClick={router.back} className="bg-orange-500 mt-5 rounded-md text-white p-2 ">x</button>
                    <div className="flex flex-col  items-center">
                        <label className="text-gray-700 font-medium">Email</label>
                        <input className="w-280 p-2 rounded-md text-sm font-normal" />
                        <label className="text-gray-700 font-medium">password</label>
                        <input  className="w-280 p-2 rounded-md text-sm font-normal"/>
                        <button type="button" className="bg-orange-500 mt-5 rounded-md text-white p-2 ">login</button>
                    </div>

                </div>
            </dialog>
        </>
    );
}

export default Modal;