import { Controls } from '@/components/Controls';
import { Main } from '@/components/Main';
import { Setup } from '@/components/Setup';


export default function Home() {
  return (
    <main className="flex flex-col w-full p-0 m-0">

      <Main />
      <div className='h-8 bg-blue-900 backdrop-blur-lg z-10 blur-sm -mt-4 -mb-2 bg-opacity-30  '></div>
      <Setup />
      <div className='h-8 bg-cyan-900 backdrop-blur-lg z-10 blur-sm -mt-4 -mb-2 bg-opacity-30  '></div>
      <Controls />

    </main>
  );
}
