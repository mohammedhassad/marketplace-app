const Footer = () => {
  return (
    <footer className="py-5 mx-auto mt-10 font-sans">
      <p className="text-sm capitalize font-semibold text-dark">
        COPYRIGHT © {new Date().getFullYear() + ' '}
        <a
          href="https://ma.linkedin.com/in/mohamedhassad"
          className="transition hover:underline"
        >
          MOHAMED HASSAD
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
