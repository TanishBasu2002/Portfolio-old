import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            This Page is Created by me using React,Typescript and Tailwind Css.
          </p>
          <p>© Tanish All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5"><a href="https://www.linkedin.com/in/tanish-basu-274b33228/">Linkdin</a></p>
          <p className="my-5"><a href="https://github.com/TanishBasu2002">GitHub</a></p>
          <p className="my-5"><a href="https://www.instagram.com/tanishbasu/">Instagram</a></p>
          <p><a href="https://www.codechef.com/users/tanishbasu">CodeChef</a></p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Email - tanishbasu50@gmail.com</p>
          <p>Phone - +91 9330610914</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
