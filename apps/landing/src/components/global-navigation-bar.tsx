import { usePathname } from 'next/navigation';
import Link from 'next/link';

function GlobalNavigationBar() {
  const pathname = usePathname();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:suldak.official@gmail.com';
  };

  return (
    <>
      {/* 실제 네비게이션 바 */}
      <div className="fixed top-0 z-50å left-0 right-0 h-[60px] bg-suldak-mint-500 backdrop-blur-sm z-50">
        <nav className="h-full max-w-7xl mx-auto flex justify-end items-center pr-8">
          <div className="flex gap-8">
            <Link
              href="/"
              className={`text-lg text-white hover:opacity-80 transition-opacity ${
                pathname === '/' ? 'font-bold' : 'font-normal'
              }`}
            >
              HOME
            </Link>
            <Link
              href="/our-crew"
              className={`text-lg text-white hover:opacity-80 transition-opacity ${
                pathname === '/our-crew' ? 'font-bold' : 'font-normal'
              }`}
            >
              Our Crew
            </Link>
            <button onClick={handleContactClick} className="text-lg text-white">
              Contact
            </button>
          </div>
        </nav>
      </div>

      {/* 스페이서 div */}
      <div className="h-[60px]" />
    </>
  );
}

export default GlobalNavigationBar;
