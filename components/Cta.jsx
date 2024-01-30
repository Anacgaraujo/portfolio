import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h4 className="h4 max-w-xl text-center mb-5">
            Ready to elevate your project with expert-level skills in web and
            app development? Don't miss the opportunity to bring my proven track
            record of success and innovation to your team. 
          </h4>
          <Link href="mailto:anagwebdeveloper@gmail.com">
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
