"use client";

import { select } from "@material-tailwind/react";
import { useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import Select from "react-select";
import SearchJobButton from "../componentes/searchJobButton";

export default function JobInjection() {
    // const [job, setJob] = useState({ position: '', seniority: '', modality: 0, period: '' });
    const { register, control } = useForm({
        defaultValues: {
            position: '',
            seniority: '',
            modality: 0,
            period: '',
        },
    });
    const formValues = useWatch({ control }) || {
        position: '',
        seniority: '',
        modality: 0,
        period: '',
    };
    
    const isFormValid = 
        formValues.position && 
        formValues.seniority && 
        formValues.modality && 
        formValues.period;

    const optionsModality = [
        { value: 1, label: "Híbrido" },
        { value: 2, label: "Remoto" },
        { value: 3, label: "Presencial" },
    ]

    const optionsData = [
        { value: "r86400", label: "24 Horas" },
        { value: "r604800", label: "Última Semana" },
        { value: "r2592000", label: "Último Mês" },
    ]

    const optionsSeniority = [
        { value: "Estagio", label: "Estagio" },
        { value: "Junior", label: "Junior" },
        { value: "Pleno", label: "Pleno" },
        { value: "Senior", label: "Senior" },
    ]

    return (
        <div className="bg-[#1e293b] w-full h-screen">
            <div className="flex items-center justify-center pt-14 pb-5 gap-3 flex-col">
                <h1 className="text-4xl text-white font-mono">Job Injection</h1>
                <form
                    action=""
                    // onChange={handleSubmit(onSubmiData)}
                    className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                        <div className="w-full">
                            <label className="block mb-2 text-sm font-mono text-gray-900 dark:text-white">Cargo:</label>
                            <input type="text" id="first_name" {...register("position")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" required autoFocus/>
                        </div>
                        <div className="w-3/4">
                            <label className="block mb-2 text-sm font-mono text-gray-900 dark:text-white">Senioridade:</label>
                            <Controller
                                control={control}
                                {...register("seniority")}
                                render={({ field }) => (
                                    <Select
                                    placeholder="Selecione"
                                        options={optionsSeniority}
                                        value={optionsSeniority.find(option => option.value === field.value) || null}
                                        onChange={selectedOption => field.onChange(selectedOption?.value)}

                                    />
                                )}
                            />
                        </div>

                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-mono text-gray-900 dark:text-white">Modalidade:</label>
                        <Controller
                            control={control}
                            {...register("modality")}
                            render={({ field }) => (
                                <Select
                                placeholder="Selecione"
                                    options={optionsModality}
                                    value={optionsModality.find(option => option.value === field.value) || null}
                                    onChange={selectedOption => field.onChange(selectedOption?.value)}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-mono text-gray-900 dark:text-white">Data do anúncio:</label>
                        <Controller
                            control={control}
                            {...register("period")}
                            render={({ field }) => (
                                <Select
                                placeholder="Selecione"
                                    options={optionsData}
                                    value={optionsData.find(option => option.value === field.value) || null}
                                    onChange={selectedOption => field.onChange(selectedOption?.value)}
                                />
                            )}
                        />
                    </div>
                </form>
                <div className="flex items-center justify-center p-4">
                    
                    {isFormValid? 
                    ( <SearchJobButton
                        position={formValues.position}
                        seniority={formValues.seniority}
                        modality={formValues.modality}
                        period={formValues.period}
                        /> ) : (
                        <button disabled className="px-2 flex font-mono">
                                    Prencha os dados
                                </button>
                    )}
                </div>
            </div>
        </div>
    );
}