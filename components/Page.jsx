import Footer from './Footer/Index';
import NavBar from './NavBar/Index';

export default function Page({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
