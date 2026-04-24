import Image from "next/image";
import {
  Landmark,
  ShieldCheck,
  CreditCard,
  GraduationCap,
  PlayCircle,
  BadgeCheck,
} from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: <Landmark className="text-green-600" size={28} />,
      title: "Student Banking Experience",
      desc: "GUB Bank is designed as a smart digital banking platform where students can explore important financial services in a simple and organized way.",
    },
    {
      icon: <CreditCard className="text-green-600" size={28} />,
      title: "Tuition Payment Support",
      desc: "The system focuses on tuition fee payment, allowing students to log in, enter payment amounts, and complete transactions in an easy user interface.",
    },
    {
      icon: <ShieldCheck className="text-green-600" size={28} />,
      title: "Secure Access System",
      desc: "Protected login and authenticated access make the project feel more realistic, secure, and closer to an actual banking portal.",
    },
  ];

  const services = [
    "Secure student login",
    "Tuition fee payment interface",
    "Accounts overview",
    "Student card services",
    "Education loan information",
    "Modern green-and-white banking UI",
  ];

  const videos = [
    {
      title: "Green University Official Video",
      url: "https://www.youtube.com/embed/a0ApJl18QDU",
    },
    {
      title: "Online Admission and Payment Tutorial",
      url: "https://www.youtube.com/embed/C62Lirtlsg0",
    },
  ];

  const galleryImages = ["/gub-cmps-1.jpg", "/gub-bnn.jpg", "/gub-cmps-3.jpg"];

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 via-white to-white">
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-12 md:px-6 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              <BadgeCheck size={16} />
              About GUB Bank
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              A Smart Banking and
              <span className="text-green-600"> Tuition Payment System </span>
              for GUB Students
            </h1>

            <p className="mb-6 text-base leading-8 text-slate-600 md:text-lg">
              GUB Bank is a modern student banking interface developed for Green
              University users. This project is designed to make banking-related
              services more organized, professional, and user-friendly by
              combining secure login, tuition payment, account services, card
              services, and loan information into one clean digital platform.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Explore Services
              </a>

              <a
                href="#videos"
                className="rounded-full border border-green-600 px-6 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-50"
              >
                Watch Videos
              </a>
            </div>
          </div>

          {/* RIGHT (single image) */}
          <div>
            <Image
              src="/gub-cmps-1.jpg"
              alt="GUB campus"
              width={1200}
              height={700}
              className="h-100 w-full rounded-3xl border border-green-100 object-cover shadow-md md:h-125"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <div className="rounded-4xl border border-green-100 bg-white p-8 shadow-sm md:p-10">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Professional Overview
              </h2>
              <p className="mb-4 leading-8 text-slate-600">
                This project represents a digital banking solution specially
                designed for Green University students. It aims to simplify the
                financial interaction between students and the institution by
                presenting a structured and visually attractive platform for
                banking and payment-related activities.
              </p>
              <p className="leading-8 text-slate-600">
                The main focus of the system is to provide a smart tuition fee
                payment experience while also introducing essential banking
                services such as accounts, cards, and education loan support in
                a unified environment.
              </p>
            </div>

            <div className="rounded-3xl border border-green-100 bg-green-50 p-6">
              <h3 className="mb-4 text-2xl font-bold text-green-800">
                Core Objectives
              </h3>
              <ul className="space-y-3">
                {services.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-green-600"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="mb-6">
          <h2 className="mb-2 text-3xl font-bold text-slate-900">
            Key Banking Features
          </h2>
          <p className="text-slate-600">
            Important modules that make the platform practical, modern, and
            useful.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50">
                {item.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-4xl border border-green-100 bg-white p-8 shadow-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
              <CreditCard className="text-green-700" size={28} />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Tuition Payment Module
            </h2>
            <p className="mb-4 leading-8 text-slate-600">
              The tuition payment section is one of the most important parts of
              the system. Students can log in, access the payment page, enter
              their fee amount, and complete the payment process in a clean and
              easy interface.
            </p>
            <p className="leading-8 text-slate-600">
              This flow makes the system realistic because it follows the
              structure of an actual banking and university payment portal.
            </p>
          </div>

          <div className="rounded-4xl bg-green-600 p-8 text-white shadow-sm">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
              <GraduationCap size={28} />
            </div>
            <h2 className="mb-4 text-3xl font-bold">Student-Centered Design</h2>
            <p className="mb-4 leading-8 text-green-50">
              The full interface is designed with a student-first approach. The
              use of green and white colors, soft cards, simple navigation, and
              organized content creates a friendly and professional experience.
            </p>
            <p className="leading-8 text-green-50">
              This makes the project stronger as a frontend work because it is
              not only functional but also visually balanced and
              presentation-ready.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="mb-6">
          <h2 className="mb-2 text-3xl font-bold text-slate-900">
            Campus Gallery
          </h2>
          <p className="text-slate-600">
            Real university-style visuals help the page feel more authentic and
            polished.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm"
            >
              <Image
                src={img}
                alt={`GUB Gallery ${index + 1}`}
                width={800}
                height={600}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section
        id="videos"
        className="mx-auto max-w-7xl px-4 py-10 pb-16 md:px-6"
      >
        <div className="mb-6">
          <h2 className="mb-2 text-3xl font-bold text-slate-900">
            Featured Videos
          </h2>
          <p className="text-slate-600">
            Added to create a richer and more impressive presentation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {videos.map((video, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm"
            >
              <div className="flex items-center gap-2 border-b border-green-100 px-5 py-4">
                <PlayCircle className="text-green-600" size={20} />
                <h3 className="font-semibold text-slate-800">{video.title}</h3>
              </div>

              <iframe
                className="h-72 w-full"
                src={video.url}
                title={video.title}
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
