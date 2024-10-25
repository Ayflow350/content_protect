import Image from "next/image";
import { useEffect } from "react";

import tourist from "@/images/tourist.jpg";
import blog from "@/images/Nextai.webp";
import comments from "@/images/comments.webp";

const Article = () => {
  useEffect(() => {
    const disableCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    const disableKeyboardShortcuts = (e: KeyboardEvent) => {
      // Disable common shortcuts for copying, saving, printing, and opening dev tools
      if (
        ((e.ctrlKey || e.metaKey) &&
          (e.key === "c" || e.key === "p" || e.key === "s")) ||
        ((e.ctrlKey || e.metaKey) &&
          e.shiftKey &&
          (e.key === "I" || e.key === "J")) || // Dev Tools (Ctrl+Shift+I, Ctrl+Shift+J)
        e.key === "F12" // F12
      ) {
        e.preventDefault();
        alert("subscribe this is membership only");
      }
    };

    const disableRightClick = (e: MouseEvent) => {
      // Prevent the default context menu from showing
      e.preventDefault();
      alert("subscribe this is membership only");
    };

    // Detect when DevTools is open and try to close it (hacky, not 100% effective)
    const detectDevTools = () => {
      const threshold = 160;
      const devtools =
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold;
      if (devtools) {
        alert("Developer Tools is not allowed!");
        window.close(); // Attempt to close the window if DevTools is detected
      }
    };

    document.addEventListener("copy", disableCopy);
    document.addEventListener("keydown", disableKeyboardShortcuts);
    document.addEventListener("contextmenu", disableRightClick); // Disable right-click
    window.addEventListener("resize", detectDevTools); // Check if DevTools is opened by resizing

    return () => {
      document.removeEventListener("copy", disableCopy);
      document.removeEventListener("keydown", disableKeyboardShortcuts);
      document.removeEventListener("contextmenu", disableRightClick); // Clean up the right-click listener
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
        <div>
          <div>
            <p className="leading-[60px] text-xl text-[#3C3C3C]">
              That’s rough
              <br />
              But
              <br />
              <span className="italic">
                I also asked builders on X, and they had different opinions
              </span>
              <br /> This sudden move left many wondering:
              <br />
              What in the actual f*** were they thinking?
            </p>

            <div>
              <button className="bg-blue-400 rounded-lg px-4 py-2 text-white">
                subscribe to read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
