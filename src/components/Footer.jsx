const Footer = () => {
  return (
    <div className="">
      <footer className="shadow bg-neutral/20 ">
        <div className="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-700 sm:text-center">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-700 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
