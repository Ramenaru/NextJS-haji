import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Haji App | Bayar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <script src="/script.js"></script>
      <main>
        <body>
        <div className="px-8 py-12">
        <img src="/bayar.png" className='mx-auto' alt="" />
        <img src="/info.png" alt="tenangnya text" className="scale-140 mx-auto mt-12" />
        <img src="/cheat.png" alt="info text" className="scale-140 mx-auto mt-5" />
        <img src="/time.png" alt="tenangnya text" className="mx-auto scale-140 mt-5" />
        <img src="/qris.png" alt="tenangnya text" className="mx-auto scale-140 mt-5" />
        <div className="flex">
        <Link href="/" class="mt-2 inline-flex  mx-auto items-center px-6 py-4 text-sm font-bold object-center text-center text-white bg-[#CB3A31] rounded-lg">Simpan Kode QR</Link>
        </div>
        <img src="/alert.png" alt="tenangnya text" className="mx-auto scale-140 mt-5" />
        </div>
        <footer>
          <div class="text-center p-6 mt-10 bg-[#404040]">
            <span className='text-white'>© 2021 Copyright: </span>
            <div class="text-white" href="https://tailwind-elements.com/">LontarLab</div>
          </div>
          </footer>   
        </body>
      </main>
    </div>
  );
}
