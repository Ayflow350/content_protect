import { FaHand } from "react-icons/fa6";
import image1 from "@/images/image1.webp";
import image2 from "@/images/image2.webp";
import image3 from "@/images/image3.webp";
import image4 from "@/images/blog2.webp";
import image5 from "@/images/blog2[1].webp";
import image6 from "@/images/blogAi.webp";
import image7 from "@/images/blogai2.webp";

const Blogs = [
  {
    name: "Tari Ibaba",
    channel: "Coding Beauty",
    topic: "This new JavaScript operator is an absolute game changer",
    description:
      "This new JavaScript operator is transforming how developers write and optimize code. Designed to make complex expressions simpler and more readable, it enhances performance and minimizes errors, allowing for faster debugging and cleaner logic. Whether you’re handling conditionals, dealing with null values, or optimizing data flow, this operator is set to streamline JavaScript development, making coding in JavaScript more efficient than ever!",
    date: Date.now(),
    icon: FaHand,
    blog_image1: image1,
    blog_image2: image2,
    blog_image3: image3,
  },

  {
    name: "Victor Moreno",
    channel: "",
    topic: "Why NextJS Sucks",
    description:
      "I’ve used NextJS for static websites because the experience with amplify hosting is so insanely easy. The fact that I go on the AWS console and connect a github repo and it just works, and runs with lambda, and is super cheap (unless I get DDOS’d)… that’s just too good to say no to in some cases.",
    date: "Jul 23, 2024",
    icon: FaHand,
    blog_image1: image4,
    blog_image2: image5,
  },
  {
    name: "Austin Starks",
    channel: "DataDrivenInvestor",
    topic:
      "I used OpenAI’s o1 model to develop a trading strategy. It is DESTROYING the market",
    description:
      "When I first tried the new OpenAI o1 (“strawberry”) model, I wasn’t initially impressed. Unlike traditional large language models where we can expect a response instantly, the new OpenAI models take longer to process and generate responses — a process we might metaphorically call “thinking”. And, it takes forever.",
    date: "Sep 15, 2024",
    icon: FaHand,
    blog_image1: image6,
    blog_image2: image7,
  },
];

export default Blogs;
