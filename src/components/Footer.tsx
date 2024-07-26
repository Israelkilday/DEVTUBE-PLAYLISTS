export function Footer() {
  return (
    <footer className="bg- px-5 lg:px-36">
      <div className="mb-6 py-4 xl:mb-0">
        <div className="container mx-auto h-full">
          <div className="h-full items-center justify-between text-left xl:flex">
            <section className="flex h-full w-full flex-col items-center justify-between gap-2 pb-3 lg:flex-row xl:w-auto xl:justify-normal xl:gap-10 xl:pb-0">
              <div className="text-muted-foreground flex items-center gap-2">
                <p>
                  &copy; {new Date().getFullYear()} GABRIELLE MEDEIROS.{" "}
                  <br className="xl:hidden" />
                  Todos os direitos reservados.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground">
                  <a
                    href="https://portfolioikdev-zeta-nine.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Desenvolvido por: &lt;/
                    <span className="font-logoGuys text-primary-foreground tracking-widest">
                      Israel Kilday
                    </span>
                    &gt;
                  </a>
                </p>
              </div>
            </section>

            <section> socials</section>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
