import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { IDashboardMonthly } from './Interface/Interface';
import Utils from '@/utils/helper';
import axios from 'axios';
import { toast } from 'react-toastify';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export default function LineChart() {

    const init: IDashboardMonthly = {
        _id: "",
        avg_rate: 0
    }

    const [resData, setResData] = useState<IDashboardMonthly[]>([init])

    const resId = typeof window !== "undefined" ? localStorage.getItem("id") : "";
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${Utils.API_URL}/dashboardmonthlyresrate?id=${resId}`);
                const nestedArray = response.data.weekRate;
                const flattenedArray = nestedArray.flat(); // Flatten the nested array
                const data = flattenedArray.map((item: { _id: any; avg_rate: any; }) => ({
                    _id: item._id,
                    avg_rate: item.avg_rate
                }));
                setResData(data);
            } catch (error) {
                toast('Failed to get data');
            }
        };

        fetchData();
    }, [resId]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Weekly rating',
            },
        },
    };

    const getWeeklyDates = () => {
        const today = new Date(); // Get the current date
        const labels: string[] = [];
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            labels.push(`${year}-${month}-${day}`);
        }
        return labels;
    };
    const weeklyDates = getWeeklyDates()


    const datasets = [
        {
            label: 'Average rate by day',
            data: weeklyDates.map((date) => {
                const matchingData = resData.find((e) => e._id.substring(0, 10) === date);
                return matchingData ? matchingData.avg_rate : 0;
            }),
            borderColor: 'rgb(131, 56, 236)',
            backgroundColor: 'rgba(131, 56, 236, 0.5)',
        },
    ];
    const data = {
        labels: weeklyDates,
        datasets
    }

    return (
        <div className=' bg-white rounded-lg p-10 w-full h-[95%]'>
            <Line options={options} data={data} />
        </div>)
}
