"use client";

import { useEffect, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import Select from "react-select";
import Link from "next/link";

export default function Write4Me() {
    const { register, control } = useForm({
        defaultValues: {
            name: '',
            describe: '',
            framework: ''
        },
    })
    const [seeSelect, setSeeSelect] = useState(false);
    const [framework, setFramework] = useState(false);

    const formValues = useWatch({ control }) || {
        name: '',
        describe: '',
        framework: ''
    }

    const isFormValid =
        formValues.name &&
        formValues.describe &&
        formValues.framework;

    const frameworksOptions = [
        { value: 'Flutter', label: 'Flutter' },
        { value: 'Next.js', label: 'Next.js' },
        { value: 'React Native', label: 'React Native' },
        { value: 'React', label: 'React' },
        { value: 'Vue.js', label: 'Vue.js' },
        { value: 'Angular', label: 'Angular' },
        { value: 'Svelte', label: 'Svelte' },
        { value: 'Ember', label: 'Ember' },
        { value: 'Laravel', label: 'Laravel' },
        { value: 'Django', label: 'Django' },
        { value: 'Express.js', label: 'Express.js' },
        { value: 'Spring Boot', label: 'Spring Boot' },
        { value: 'Nest.js', label: 'Nest.js' },
        { value: 'Symfony', label: 'Symfony' },
        { value: 'Flask', label: 'Flask' },
        { value: 'FastAPI', label: 'FastAPI' },
        { value: 'Ruby on Rails', label: 'Ruby on Rails' }
    ]

    const noFrameworksOptions = [
        { value: 'PHP Puro', label: 'PHP Puro' },
        { value: 'Python Puro', label: 'Python Puro' },
        { value: 'Java Puro', label: 'Java Puro' },
        { value: 'C# Puro', label: 'C# Puro' },
        { value: 'C++ Puro', label: 'C++ Puro' },
        { value: 'C Puro', label: 'C Puro' },
    ]

    const handleClick = (isFramework: boolean) => {
        setFramework(isFramework);
        setSeeSelect(true);
    };

    return (
        <div className="bg-white w-full min-h-screen">
            <div className="flex items-center justify-center pt-10 pb-5 gap-3 flex-col">
                <h1 className="text-4xl text-white font-lewis bg-black p-2 font-bold dark:text-white">WRITE 4 ME</h1>
                <form action=""
                    className="flex flex-col gap-3 w-full max-w-xl">
                    <div className="w-full">
                        <label className="block mb-2 text-xl font-nuno font-bold text-white dark:text-black">
                            Nome do Projeto:<span className="text-sm text-gray-600 font-normal ml-2">(dica: mesmo nome do repo!)</span>
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            {...register("name")}
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-neutral-700 dark:hover:bg-neutral-800"
                            required
                            autoFocus
                        />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2 text-xl font-nuno font-bold text-white dark:text-black">
                            Descricao:<span className="text-sm text-gray-600 font-normal ml-2">(descreva em 2 linhas no máx!)</span>
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            {...register("describe")}
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-neutral-700 dark:hover:bg-neutral-800"
                            required
                            autoFocus
                        />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2 text-xl font-nuno font-bold text-white dark:text-black">
                            Usando Framework?
                        </label>
                    </div>
                    <div className="flex justify-around">
                        <button
                        type="button"
                            onClick={() => handleClick(true)}
                            className="px-4 pb-2 pt-2 border rounded-lg bg-black">
                            Sim
                        </button>
                        <button
                        type="button"
                            onClick={() => handleClick(false)}
                            className="px-4 pb-2 pt-2 border rounded-lg bg-black">
                            Não
                        </button>
                    </div>
                    <div>
                        {seeSelect ? (
                            <div>
                                {
                                    framework ? (
                                        <div className="w-full" >
                                            <label className="block mb-2 text-xl font-nuno font-bold text-white dark:text-black">
                                                Qual framework?
                                            </label>
                                            <Controller
                                                control={control}
                                                {...register("framework")}
                                                render={({ field }) => (
                                                    <Select
                                                        className="my-react-select-container"
                                                        classNamePrefix="my-react-select"
                                                        placeholder="Selecione"
                                                        options={frameworksOptions}
                                                        value={frameworksOptions.find(option => option.value === field.value) || null}
                                                        onChange={selectedOption => field.onChange(selectedOption?.value)}
                                                    />
                                                )}
                                            />
                                        </div>
                                    ) :
                                        <div className="w-full" >
                                            <label className="block mb-2 text-xl font-nuno font-bold text-white dark:text-black">
                                                Qual tecnologia?
                                            </label>
                                            <Controller
                                                control={control}
                                                {...register("framework")}
                                                render={({ field }) => (
                                                    <Select
                                                        className="my-react-select-container"
                                                        classNamePrefix="my-react-select"
                                                        placeholder="Selecione"
                                                        options={noFrameworksOptions}
                                                        value={noFrameworksOptions.find(option => option.value === field.value) || null}
                                                        onChange={selectedOption => field.onChange(selectedOption?.value)}
                                                    />
                                                )}
                                            />
                                        </div>
                                }
                            </div>
                        ) :
                            (
                                <div></div>
                            )
                        }
                    </div>
                    {isFormValid ? (
                        <div className="w-full justify-center flex pt-3">
                            <Link
                                className="px-4 pt-2 pb-2 flex font-mono rounded-lg  bg-black text-black dark:text-white"
                                href={{
                                    pathname: 'write4me/result',
                                    query: { readme: JSON.stringify({ name: formValues.name, describe: formValues.describe, framework: formValues.framework }) }
                                }
                                }
                            >
                                Criar Readme
                            </Link>
                        </div>
                    ) : (
                        <div className="w-full justify-center flex pt-3">
                            <button disabled className="px-4 pt-2 pb-2 flex font-mono rounded-lg  bg-black text-black dark:text-white">
                                Prencha os campos
                            </button>
                        </div>
                    )}
                </form>
            </div >
        </div >
    );
}