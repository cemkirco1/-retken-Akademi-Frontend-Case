import React from 'react'


const DataList = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <div>
            <div className='flex items-center h-24 border-b w-full'>
                <div className='flex flex-col items-center justify-between pr-6 '>
                    <div className='flex'>
                    <img className="w-10 h-10 mr-3" src={image} alt="crypto" />
                    <h1 className="text-base w-36">{name}</h1>
                    <p className="uppercase">{symbol}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between w-full">
                    <div className='flex'>
                    <p className='w-28'>${price}</p>
                    <p className='w-32'>${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className='text-red-700 mr-5 '>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className='text-green-700 mr-5'>{priceChange.toFixed(2)}%</p>
                    )}
                    
                    <p className="w-50 ">
                        Pazar Değeri: ${marketcap.toLocaleString()} 
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataList