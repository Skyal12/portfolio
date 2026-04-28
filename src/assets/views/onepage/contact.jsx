import github from "../../img/img-github.svg";
import linkedin from "../../img/img-linkedin.svg";
import Footer from "../../utils/footer";
import { useLanguage } from "../../utils/langue.jsx";
export default function Contact() {
  const { t } = useLanguage();
  return (
    <section
      id="contact"
      data-section="contact"
      className="h-auto xl:h-screen flex flex-col bg-primary relative overflow-hidden "
      data-theme="light"
    >
      {/* Partie haute — Contact + Social */}
      <div className="flex flex-col lg:flex-row items-start justify-between h-1/2 px-12 py-6 gap-12 xl:gap-0">
        {/* Contact */}
        <div className="contact-info flex flex-col h-auto relative top-1/5 w-full lg:w-2/3 xl:w-2/3">
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-ibm text-secondary mb-12">
            {t("contact.title")}
          </h3>
          <div className="flex flex-col xl:flex-row gap-12">
            <div className="flex flex-col gap-4">
              <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-ibm text-tertiary mb-2">
                {t("contact.email")}
              </p>
              <a
                href="mailto:alexis.salmon.ss@gmail.com"
                className="link underline font-syne text-md md:text-lg lg:text-2xl xl:text-3xl text-tertiary"
              >
                <div>alexis.salmon.ss@gmail.com</div>
                <div>alexis.salmon.ss@gmail.com</div>
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-ibm text-tertiary mb-2">
                {t("contact.phone")}
              </p>
              <a
                href="tel:0624440892"
                className="link underline font-syne text-lg md:text-xl lg:text-2xl xl:text-3xl text-tertiary"
              >
                <div>06 24 44 08 92</div>
                <div>06 24 44 08 92</div>
              </a>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="social-info flex flex-col h-auto xl:items-center relative top-0 xl:top-4/5 lg:w-1/3 xl:w-1/5">
          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-ibm text-secondary text-left xl:text-center mb-12">
            {t("contact.social")}
          </h3>
          <div className="flex flex-row gap-6 justify-center">
            <a
              href="https://github.com/Skyal12"
              target="_blank"
              className="size-12 xl:size-22"
            >
              <img loading="lazy" src={github} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/alexis-salmon12"
              target="_blank"
              className="size-12 xl:size-22"
            >
              <img loading="lazy" src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
