import React, { useEffect, useState } from 'react';
import './Follow.css'

const Follow = () => {
    const countersInfo = [
        { count: 0, limit: 300, text: 'Proyectos implementados en los últimos quince años' },
        { count: 0, limit: 70, text: 'Marcas en nuestro portfolio' },
        { count: 0, limit: 90, text: 'Clientes con contrato servicio de soporte mensual' },
        { count: 0, limit: 400, text: 'Clientes atendidos por año' },
    ];

    const [counters, setCounters] = useState(countersInfo);

    useEffect(() => {
        const intervals = counters.map((counter, index) => {
            return setInterval(() => {
                setCounters(prevCounters => {
                    const newCounters = [...prevCounters];
                    newCounters[index].count =
                        newCounters[index].count < newCounters[index].limit
                            ? newCounters[index].count + 1
                            : newCounters[index].count;
                    return newCounters;
                });
            }, 10);
        });

        return () => {
            intervals.forEach(interval => clearInterval(interval));
        };
    }, [counters]);

    return (
        <div className="w-full h-500px flex justify-between items-center contenedor-follow">
            {counters.map((counter, index) => (
                <div key={index} className="flex flex-col justify-center items-center w-1/4 mobileCards">
                    <div className="text-6xl font-bold text-white">+{counter.count}</div>
                    <div className="mt-2 text-center font-bold text-white text-xl mt-5">{counter.text}</div>
                </div>
            ))}
        </div>
    );
};

export default Follow;
