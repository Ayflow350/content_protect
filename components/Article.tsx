import Image from "next/image";
import { useEffect } from "react";

import tourist from "@/images/tourist.jpg";
import blog from "@/images/Nextai.webp";
import comments from "@/images/comments.webp";

const Article = () => {
  useEffect(() => {
    const disableCopy = (e: ClipboardEvent) => e.preventDefault();
    const disableKeyboardShortcuts = (e: KeyboardEvent) => {
      if (
        ((e.ctrlKey || e.metaKey) && ["c", "p", "s"].includes(e.key)) ||
        e.ctrlKey ||
        (e.metaKey && e.shiftKey && ["I", "J"].includes(e.key)) ||
        e.key === "F12"
      ) {
        e.preventDefault();
        alert("Subscribe - this is membership only");
      }
    };
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
      alert("Subscribe - this is membership only");
    };
    const detectDevTools = () => {
      if (
        window.outerWidth - window.innerWidth > 160 ||
        window.outerHeight - window.innerHeight > 160
      ) {
        alert("Developer Tools is not allowed!");
      }
    };

    if (window.innerWidth >= 768) {
      // Only run on larger screens
      document.addEventListener("copy", disableCopy);
      document.addEventListener("keydown", disableKeyboardShortcuts);
      document.addEventListener("contextmenu", disableRightClick);
      window.addEventListener("resize", detectDevTools);
    }

    return () => {
      document.removeEventListener("copy", disableCopy);
      document.removeEventListener("keydown", disableKeyboardShortcuts);
      document.removeEventListener("contextmenu", disableRightClick);
      window.removeEventListener("resize", detectDevTools);
    };
  }, []);
  return (
    <div className="container mx-auto max-w-[650px]  text-center justify-center pt-10 ">
      <div className="text-left">
        <div className="mb-4">
          <h1 className="font-light  text-gray-500 text-base">
            ⚡️ Member-only story
          </h1>
          <h1 className="pt-5 font-extrabold text-5xl">
            The Real Reason OpenAI Abandoned Next.js for Remix
          </h1>
          <h1 className="pt-3  text-gray-500 text-xl">
            The surprising reasons behind OpenAI’s move and what it means for
            the future of web development
          </h1>
        </div>

        <div className="flex flex-row gap-x-3 items-center mb-10">
          <Image
            src={tourist}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col gap-y-1 ">
            <div className="flex flex-row gap-x-1">
              <h1>Vlad Shostak .</h1>
              <h1 className="text-[#369331]"> Follow</h1>
            </div>
            <div className="flex flex-row gap-x-1">
              <h1 className="text-sm font-normal text-gray-500">
                5 min read .
              </h1>
              <h1 className="text-sm font-normal text-gray-500">Sep 8, 2024</h1>
            </div>
          </div>
        </div>

        <div>
          <Image src={blog} alt="" />
        </div>

        <div>
          <h1 className="pt-5 font-bold text-2xl text-[#242424]">
            Introduction to the Transition
          </h1>
          <div className="private-content">
            <h1 className="pt-5 font-bold text-2xl text-[#242424]">
              Introduction to the Transition
            </h1>
            <p className="leading-[60px] text-xl text-[#3C3C3C]">
              OpenAI recently caused a stir in the developer community by moving
              <br />
              <span className="font-bold text-black">
                from Next.js to Remix.
              </span>
              <br />
              <span className="italic">WHAT THE HECK !? (I know)</span>
              <br /> This sudden move left many wondering:
              <br /> What in the actual f*** were they thinking?
            </p>

            <div className="overlay">Content hidden in print view.</div>
          </div>
        </div>
        <div className="relative left-1/2 -ml-[30vw] right-1/2 -mr-[50vw] max-w-none">
          <Image src={comments} alt="" className="w-[70vw]" />
        </div>
        <div className="relative ">
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white opacity-100 transition-opacity duration-300"></div>

          <p className="leading-[60px] text-xl text-[#3C3C3C]">
            {/* This line will be fully visible */}
            <span className="opacity-30 transition-opacity duration-300">
              That’s rough
            </span>
            <br />
            {/* Other lines will be completely hidden */}
            <span className="opacity-100 transition-opacity duration-300">
              But
            </span>
            <br />
            <span className="opacity-100 transition-opacity duration-300 italic">
              I also asked builders on X, and they had different opinions
            </span>
            <br />
            <span className="opacity-0 transition-opacity duration-300">
              This sudden move left many wondering:
            </span>
            <br />
            <span className="opacity-0 transition-opacity duration-300">
              What in the actual f*** were they thinking?
            </span>
          </p>
        </div>
        <div>
          <button className="bg-blue-400 rounded-lg px-4 py-2 z-10 text-white mb-10">
            subscribe to read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Article;
