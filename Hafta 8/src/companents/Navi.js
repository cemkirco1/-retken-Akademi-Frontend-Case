import React from 'react'


const Navi = ({handleChange}) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
         <div className='flex justify-center flex-col mb-16 items-center'>
          <h1 className='text-center text-3xl font-mono pt-3'>Hızlı Coin Arama</h1>
          <form className="pt-6">
            <input type="text" placeholder="Coin Search" className='rounded text-center' onChange={handleChange} />
          </form>
         </div>
         <table className="table-fixed items-start border-b">
                 <tr>
                     <td className="pl-7">
                         İsim
                     </td>
                     <td className="pl-20 ">
                         Sembol
                     </td>
                     <td className="pl-11">
                         Fiyat
                     </td>
                     <td className="pl-20">
                         Hacim
                     </td>
                     <td className="pl-16 pr-12">
                         Değişim
                     </td>
                     <td className="pl-20 pr-11">
                         Pazar Değeri
                    </td>
                 </tr>
             </table>
        </div>
    );
};

export default Navi