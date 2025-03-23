import { useState } from "react";
import { useForm } from "react-hook-form";

export default function JobInjection() {
    const [job, setJob] = useState({ position: '', seniority: '', notWords: '' });
    const { register, handleSubmit, setValue, control } = useForm();



    return (
        <div className="bg-[#1e293b] w-full h-screen">
            <div className="flex items-center justify-center pt-16 gap-3">
                <h1 className="text-4xl text-white font-mono">Job Injection</h1>
                <form
                    action=""
                    // onChange={handleSubmit(onSubmiData)}
                    className="flex flex-col gap-2">

                </form>
            </div>
        </div>
    );
}