import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Haji App | Konfirmasi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
        <body>
        <div className="px-8 py-12">
           <img src="/konfirmasi.png" className='mx-auto' alt="" />
           <h2 className="font-bold text-l mt-12">Paket yang dipilih :</h2>   
           <a href="#" className="flex items-center bg-white border border-gray-200 rounded-lg shadow-lg mt-3 flex-row max-w-xl dark:border-gray-700 dark:bg-gray-800">
                <img src="/petugas.png" className='ml- scale-130 object-cover ml-3' alt="" />
                <div className="flex flex-col justify-between p-1 leading-normal">
                    <h5 className="mb-1 text-l font-bold tracking-tight text-gray-900 dark:text-white">Internet RoaMax
                    Petugas Haji</h5>
                    <p className="font-bold text-3xl text-[#CB3A31]">15 GB | <span className='font-medium text-xl text-[#CB3A31]'> 50 Hari</span></p>
                </div>
            </a>
                <h2 className="font-bold text-l mt-7 text-center">Konfirmasi data anda!</h2>                  
            <a href="#" className="flex items-center bg-white border border-gray-200 rounded-lg shadow-lg mt-2 flex-row max-w-xl dark:border-gray-700 dark:bg-gray-800">
                <div class="mb-6 mt-3">
                    <p className='mt-2 px-5'>Nomor anda: <span className='font-bold text-[#CB3A31] px-9'>085156214511</span></p>
                    <p className='mt-2 px-5'>Nama: <span className='font-bold text-[#CB3A31] text-right px-7'>Muhammad Ramenaru</span></p>
                    <p className='mt-2 px-5'>No Whatsapp: <span className='font-bold text-[#CB3A31] text-right px-7'>+62838197551</span></p>
                    <p className='mt-2 px-5'>Email: <span className='font-bold text-[#CB3A31] text-right px-4'>ramenarudev@gmail.com</span></p>
                    <p className='mt-2 px-5'>Dokumen:</p>
                    <div div class="flex items-center justify-center w-full ml-3 px-9  mt-4">
                  <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <img src="/dokumen.png" width={100} height={100} alt="" />    
                          </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                  </label>
              </div> 
              </div>
            </a>
            <a href="#" className="flex items-center mb-2 bg-white border border-gray-200 rounded-lg shadow-lg mt-3 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex flex-col justify-between p-1 leading-normal">
                    <h5 className="mb-1 text-l mt-2 ml-3 font-medium tracking-tight text-gray-900 dark:text-white">Total Harga</h5>
                    <h5 className="mb-1 text-2xl mt-2 ml-3 font-bold tracking-tight text-gray-900 dark:text-white">Rp. 750.000<Link href="/bayar" className='text-medium ml-12 inline-flex items-center px-10 py-3 text-sm font-medium text-center text-white bg-[#CB3A31] rounded-lg mb-2'>Bayar</Link></h5>
                </div>
            </a> 
          </div>
          
          <footer>
          <div class="text-center p-6 mt-10 bg-[#404040]">
            <span className='text-white'>© 2021 Copyright: </span>
            <a class="text-white" href="https://tailwind-elements.com/">LontarLab</a>
          </div>
          </footer>
        </body>
      </main>
    </div>
  );
}
