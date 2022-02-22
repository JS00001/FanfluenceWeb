import Head from 'next/head';
import Image from 'next/image';
import { useForm } from '../hooks/useForm';
import { RootStateOrAny, useSelector } from 'react-redux';
import Navigation from '../components/Navigation';

export default function Home() {
  const [values, handleChange] = useForm({ email: '' });
  const theme = useSelector((state: RootStateOrAny) => state.theme.theme);

  return (
    <html className={theme}>
      <div className="container mx-auto bg-white">
        <Navigation />

        <div className="flex flex-col items-center py-10 lg:flex-row lg:justify-around">
          <div className="flex w-[27rem] flex-col p-5 py-32 text-center lg:text-left">
            <span className="font-semibold text-blue-600">
              CREATE CONNECTIONS
            </span>
            <span className="leading-tighter text-6xl font-bold text-gray-800">
              The best app for fans and creators.
            </span>
            <span className="mt-20 font-semibold text-gray-800">
              Join the waitlist to recieve updates
            </span>

            <div className="mt-5 flex items-center rounded-xl focus-within:ring-4 focus-within:ring-blue-300">
              <input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full rounded-l-xl border-l border-b border-t p-3 outline-none"
              />
              <div className="rounded-r-xl border-t border-r border-b p-1">
                <button className="rounded-lg bg-blue-600 py-2 px-8 text-white hover:bg-blue-700">
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="pointer-events-none hidden select-none items-center justify-center lg:flex ">
            <Image alt="test" width="600" height="700" src="/ImagePhone.png" />
          </div>
        </div>
      </div>
    </html>
  );
}
