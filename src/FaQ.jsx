import { useState } from "react";
import FaQNPC from "./assets/images/FaQ/FAQ npc.svg";

const FaQ = ({ displayToast }) => {
  const faqs = [
    {
      title: "What are recycled products?",
      content:
        "Recycled products are items that have been made from materials that have been processed or transformed from their original form. They help reduce waste and conserve resources.",
    },
    {
      title: "Why should I use recycled products?",
      content:
        "Using recycled products helps protect the environment by reducing the need for new raw materials. It also helps conserve energy and reduce pollution.",
    },
    {
      title: "How can I recycle products?",
      content:
        "You can recycle products by sorting them into appropriate recycling bins, following local recycling guidelines, and supporting recycling programs in your community.",
    },
    {
      title: "Are recycled products of good quality?",
      content:
        "Yes, recycled products can be of high quality. Many manufacturers use advanced recycling processes to create durable and reliable products.",
    },
    {
      title: "Where can I buy recycled products?",
      content:
        "You can buy recycled products from various retailers, both online and offline. Look for eco-friendly labels or certifications to ensure the products are truly recycled.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div
      id="FaQ"
      className="flex flex-col justify-center items-center gap-5 px-10 pt-10"
    >
      <div className="scale-105">
        <h1 className="font-bold text-black text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Frequently Asked Questions
        </h1>
        <p>
          Find answers to common questions about recycled products, their usage,
          and benefits.
        </p>
      </div>

      {faqs.map((faq, index) => (
        <div key={index} className="collapse collapse-arrow bg-base-200">
          <input
            type="radio"
            name={`my-accordion-${index}`}
            checked={index === openIndex}
            onChange={() => setOpenIndex(index)}
          />
          <div className="collapse-title text-xl font-medium">{faq.title}</div>
          <div className="collapse-content">
            <p>{faq.content}</p>
          </div>
        </div>
      ))}

      <div className="flex flex-row items-start my-5 w-full ">
        <div className="space-y-5">
          <h1 className="font-extrabold text-black text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
            Still have questions?
          </h1>
          <p>Contact us for more details</p>
          <button
            onClick={() => displayToast()}
            className="hover:outline-primary hover:font-bold hover:border-secondary hover:outline outline-offset-4 transition-all ease-in-out duration-300  px-2 py-2 md:px-4 md:py-4 border bg-secondary border-black/50 text-black rounded-lg text-xs md:text-sm lg:text-lg"
          >
            Contact
          </button>
        </div>
        <img
          src={FaQNPC}
          className="w-1/6 md:w-1/12 h-1/6 md:h-1/12 ml-auto"
          alt="About Us Image"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default FaQ;
