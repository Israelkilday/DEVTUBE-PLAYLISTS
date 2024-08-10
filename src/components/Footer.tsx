import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-zinc-950 px-5 pb-1 lg:pb-5">
      <div className="my-7 xl:mb-0">
        <div className="container mx-auto h-full">
          <div className="h-full items-center justify-between text-left xl:flex">
            <section className="flex h-full w-full flex-col justify-between gap-2 pb-3 lg:block lg:flex-row xl:w-auto xl:justify-normal xl:gap-10 xl:pb-0">
              <div className="flex items-center gap-2 text-neutral-400">
                <p>
                  &copy; {new Date().getFullYear()} DEVTUB PLAYLISTS.{" "}
                  <br className="xl:hidden" />
                  Todos os direitos reservados.
                </p>
              </div>

              <div className="border-b-[1px] border-b-zinc-500 pb-6 lg:border-none lg:pb-0">
                <p className="text-neutral-400">
                  <a
                    href="https://portfolioikdev-zeta-nine.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Desenvolvido por: &lt;/
                    <span className="brand tracking-widest text-white duration-150 hover:text-emerald-400">
                      Israel Kilday
                    </span>
                    &gt;
                  </a>
                </p>
              </div>
            </section>

            <section>
              <ul className="flex gap-4 pt-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/israeldevfrontend/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-[28px] text-neutral-400 duration-150 hover:text-emerald-400" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/Israelkilday"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-[28px] text-neutral-400 duration-150 hover:text-emerald-400" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=5585989295516"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="text-[28px] text-neutral-400 duration-150 hover:text-emerald-400" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/israelkilday/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-[28px] text-neutral-400 duration-150 hover:text-emerald-400" />
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
