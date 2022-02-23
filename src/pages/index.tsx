import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { RootStateOrAny, useSelector } from 'react-redux';
import { RiArrowDownSLine, RiTicket2Fill } from 'react-icons/ri';
import Navigation from '../components/Navigation';
import Statistic from '../components/Statistic';
import Footer from '../components/Footer';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [values, handleChange] = useForm({ email: '' });
  const theme = useSelector((state: RootStateOrAny) => state.theme.theme);

  useEffect(() => {
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 100));
  }, []);

  return (
    <html className={theme}>
      <Head>
        <title>Fanfluence</title>
      </Head>

      <header className="fixed top-0 z-10 w-full shadow">
        <Navigation />
      </header>

      {!scrolled && (
        <div className="fixed bottom-6 z-10 flex w-full justify-center">
          <span className="rounded-full bg-blue-100 p-3 text-blue-400">
            <RiArrowDownSLine size={30} />
          </span>
        </div>
      )}

      <main>
        <section className="bg-white">
          <div className="container mx-auto flex flex-col items-center py-20 lg:flex-row lg:justify-around">
            <div className="flex w-[27rem] flex-col p-5 py-32 text-center lg:text-left">
              <span className="font-semibold text-blue-600">
                CREATE CONNECTIONS
              </span>
              <span className="leading-tighter text-6xl font-black text-gray-800">
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
              <Image
                alt="test"
                width="840"
                height="980"
                src="/ImagePhone.png"
              />
            </div>
          </div>
        </section>

        <section className="">
          <div className="container mx-auto w-2/3">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Our Platform
              </h2>

              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                Fanfluence is a platform that connects fans and creators. We are
                building a community of fans and creators that are passionate
                about what they do.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
              <Statistic title="Downloads" value="0" />
              <Statistic title="Giveaways" value="0" />
              <Statistic title="Creators" value="0" />
              <Statistic title="Users" value="0" />
            </div>
          </div>
        </section>
      </main>

      <footer className="">
        <Footer />
      </footer>
    </html>
  );
}
