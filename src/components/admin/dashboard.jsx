import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
    const history = useHistory();

    useEffect(() => {
        const localStorageKey = localStorage.getItem('AdminKey');
        if (!localStorageKey) {
            history.push('/admin/Login');
        }
    })

    return (
        <div class="mt-12">
            <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="p-4 text-right">
                        <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Today's Users</p>
                        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">2,300</h4>
                    </div>
                    <div class="border-t border-blue-gray-50 p-4">
                        <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong class="text-green-500">+3%</strong>&nbsp;than last month
                        </p>
                    </div>
                </div>
                <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
                            <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
                        </svg>
                    </div>
                    <div class="p-4 text-right">
                        <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">New Clients</p>
                        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">3,462</h4>
                    </div>
                    <div class="border-t border-blue-gray-50 p-4">
                        <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong class="text-red-500">-2%</strong>&nbsp;than yesterday
                        </p>
                    </div>
                </div>
                <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                    <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
                            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
                        </svg>
                    </div>
                    <div class="p-4 text-right">
                        <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Experience</p>
                        <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">80</h4>
                    </div>
                    <div class="border-t border-blue-gray-50 p-4">
                        <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                            <strong class="text-green-500">+5%</strong>&nbsp;than yesterday
                        </p>
                    </div>
                </div>
            </div>
                        
            <div class="mb-4 grid grid-cols-1 gap-4 xl:grid-cols-3">
                <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
                    <div class="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                        <div>
                            <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">Test</h6>
                        </div>
                    </div>
                    <div class="p-6 overflow-x-scroll px-0 pt-0 pb-2">
                        <table class="w-full min-w-[640px] table-auto">
                            <thead>
                                <tr>
                                    <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                                        <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">jenis tes</p>
                                    </th>
                                    <th class="border-b border-blue-gray-50 py-3 px-6 text-center">
                                        <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">total</p>
                                    </th>
                                    <th class="border-b border-blue-gray-50 py-3 px-6 text-left">
                                        <p class="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">rata-rata</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <div class="flex items-center gap-4">
                                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Tes Depresi</p>
                                        </div>
                                    </td>
                                    
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$14,000</p>
                                    </td>
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <div class="w-10/12">
                                            <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">60%</p>
                                            <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                <div class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white w-60"></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <div class="flex items-center gap-4">
                                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Tes Cemas</p>
                                        </div>
                                    </td>
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$3,000</p>
                                    </td>
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <div class="w-10/12">
                                            <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">10%</p>
                                            <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                <div class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white w-10"></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <div class="flex items-center gap-4">
                                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Tes Bunuh Diri</p>
                                        </div>
                                    </td>
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">Not set</p>
                                    </td>
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <div class="w-10/12">
                                            <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">100%</p>
                                            <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                <div class="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white"></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <div class="flex items-center gap-4">
                                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Tes Stress</p>
                                        </div>
                                    </td>
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$20,500</p>
                                    </td>
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <div class="w-10/12">
                                            <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">100%</p>
                                            <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                <div class="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white"></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <div class="flex items-center gap-4">
                                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Tes Kepribadian</p>
                                        </div>
                                    </td>
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$500</p>
                                    </td>
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <div class="w-10/12">
                                            <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">25%</p>
                                            <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                <div class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <div class="flex items-center gap-4">
                                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Tes Burnout</p>
                                        </div>
                                    </td>
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <p class="block antialiased font-sans text-xs font-medium text-blue-gray-600">$500</p>
                                    </td>
                                    <td class="py-3 px-5 border-b border-blue-gray-50">
                                        <div class="w-10/12">
                                            <p class="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">25%</p>
                                            <div class="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                                                <div class="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;