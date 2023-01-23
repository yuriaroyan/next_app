import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const navigation = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Posts", path: "/posts" },
    { id: 3, title: "Contacts", path: "/contacts" },
  ];
  const { pathname } = useRouter();
  return (
    <nav>
      <div className="navbar">
        {navigation.map((item) => (
          <Link key={item.id} href={item.path}>
            <h3 className={pathname === item.path ? "active" : ""}>
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default Navbar;
