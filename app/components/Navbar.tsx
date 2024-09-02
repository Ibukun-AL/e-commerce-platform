// app/components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" legacyBehavior>
          <a className="text-white text-xl font-bold">E-Commerce</a>
        </Link>
        <div className="space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-gray-300 hover:text-white">Home</a>
          </Link>
          <Link href="/add" legacyBehavior>
            <a className="text-gray-300 hover:text-white">Add Product</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;