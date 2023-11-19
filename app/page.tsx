import { Main } from '@/components/Main';
import { Setup } from '@/components/Setup';


export default function Home() {
  return (
    <main className="flex flex-col w-full p-0 m-0">

      <Main />
      <div className='h-8 bg-blue-900 backdrop-blur-lg z-10 blur-sm -mt-4 bg-opacity-30 shadow-lg '></div>
      <Setup />

    </main>
  );
}
