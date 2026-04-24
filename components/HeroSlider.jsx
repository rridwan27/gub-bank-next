"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Rewards. Flexibility. Priceless",
    title1: "Card",
    title2: "Benefits",
    description:
      "Peace of mind for cardholders whether at home, travelling abroad, or making everyday purchases.",
    primary: "Grab Your Card",
    image: "/card1.jpeg",
  },
  {
    eyebrow: "Convenience. Accessibility. Reliability",
    title1: "24/7 ATM",
    title2: "Service",
    description:
      "Enjoy 24/7 ATM access—banking convenience whenever you need it, day or night.",
    primary: "Open Account",
    image: "/card2.png",
  },
  {
    eyebrow: "Cross-border. Transferability. Dependability",
    title1: "Remittance",
    title2: "Services",
    description:
      "Send money home quickly, securely, and affordably with our trusted remittance services.",
    primary: "Send Remittance",
    image:
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <section className="bg-[#eef4fb]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:px-6 lg:grid-cols-2 lg:py-16">
        <div>
          <p className="text-lg font-semibold text-green-600">
            {current.eyebrow}
          </p>

          <h2 className="mt-4 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            {current.title1}{" "}
            <span className="text-green-600">{current.title2}</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-9 text-slate-600">
            {current.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow hover:bg-green-700">
              {current.primary}
            </button>
            <button className="rounded-full border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-800 hover:bg-slate-50">
              Get in touch
            </button>
          </div>

          <div className="mt-8 flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-10 rounded-full ${index === i ? "bg-green-600" : "bg-slate-300"}`}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute right-0 top-8 h-60 w-60 rounded-full bg-blue-100 blur-3xl" />
          <img
            src={current.image}
            alt="GUB Bank service"
            className="relative h-105 w-full rounded-[28px] object-cover shadow-xl"
          />

          <div className="absolute right-0 top-0 w-50 rounded-3xl bg-white p-5 shadow-xl">
            <p className="text-2xl font-bold text-green-600">
              Fast & Secure Banking
            </p>
            <p className="mt-1 text-lg text-slate-600">
              Reliable service for cards, transfers, and daily banking
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-52.5 rounded-tr-3xl rounded-bl-3xl bg-green-600 p-5 text-white shadow-xl">
            <p className="text-3xl font-bold">24/7 Support</p>
            <p className="mt-1 text-lg text-blue-100">Always ready to help</p>
          </div>
        </div>
      </div>
    </section>
  );
}
