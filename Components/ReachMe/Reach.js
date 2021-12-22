export default function Reach() {
  return (
    <div className="z-10">
      <div className="hp:mx-8 tablet:mx-20 hp:mt-16 flex hp:flex-col">
        <p className="hp:text-2xl hp:mb-4 font-semibold uppercase">
          Reach me on
        </p>
        <div className="grid hp:grid-cols-5 w-1/2 hp:text-start hp:mt-6">
          <div className="flex flex-col group text-center">
            <a
              className="fab fa-instagram"
              href="https://www.instagram.com/pieterdamiann/"
              target="_blank"
            />
            <a
              className="hp:text-xsm opacity-0 group-hover:opacity-100 group-hover:duration-500"
              href="https://www.instagram.com/pieterdamiann/"
              target="_blank"
            >
              Instagram
            </a>
          </div>
          <div className="flex flex-col group text-center">
            <a
              className="fab fa-linkedin"
              href="https://www.linkedin.com/in/pieter-damian-b75813223/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADgu-8kBxlEi_Rn4PtjwFwvkFwzQpB3cO5s"
              target="_blank"
            />
            <a
              className="hp:text-xsm opacity-0 group-hover:opacity-100 group-hover:duration-500"
              href="https://www.linkedin.com/in/pieter-damian-b75813223/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADgu-8kBxlEi_Rn4PtjwFwvkFwzQpB3cO5s"
              target="_blank"
            >
              Linked in
            </a>
          </div>
          <div className="flex flex-col group text-center">
            <a
              className="fab fa-twitter"
              href="https://twitter.com/pieterdamiann"
              target="_blank"
            />
            <a
              className="hp:text-xsm opacity-0 group-hover:opacity-100 group-hover:duration-500"
              href="https://twitter.com/pieterdamiann"
              target="_blank"
            >
              Twitter
            </a>
          </div>
          <div className="flex flex-col group text-center">
            <a
              className="fab fa-whatsapp"
              href="https://wa.me/+6281296932803"
              target="_blank"
            />
            <a
              className="hp:text-xsm opacity-0 group-hover:opacity-100 group-hover:duration-500"
              href="https://wa.me/+6281296932803"
              target="_blank"
            >
              Whatsapp
            </a>
          </div>
          <div className="flex flex-col group text-center">
            <a
              className="fas fa-envelope-open"
              href="mailto:pieterlie0218@gmail.com"
              target="_blank"
            />
            <a
              className="hp:text-xsm opacity-0 group-hover:opacity-100 group-hover:duration-500"
              href="mailto:pieterlie0218@gmail.com"
              target="_blank"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
