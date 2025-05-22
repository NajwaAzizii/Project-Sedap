import { Outlet } from 'react-router-dom';
import HeaderGuest from '../components/HeaderGuest';
import Footer from '../components/Footer';

const GuestLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderGuest />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default GuestLayout;