import Link from "next/link";
import Image from "next/image";
import {
  HandCoins,
  BookOpenCheck,
  CircleDollarSign,
  ArrowRight,
} from "lucide-react";

export default function LoansPage() {
  const loans = [
    {
      icon: <BookOpenCheck className="text-green-600" size={28} />,
      title: "Education Loan",
      desc: "Helps students manage tuition fees and academic expenses with flexible support options.",
    },
    {
      icon: <HandCoins className="text-green-600" size={28} />,
      title: "Emergency Loan",
      desc: "Quick support for urgent financial situations with a simple and practical student-centered process.",
    },
    {
      icon: <CircleDollarSign className="text-green-600" size={28} />,
      title: "Installment Loan",
      desc: "Allows students to pay necessary academic costs in smaller and more manageable installments.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fbff]">
      {/* HERO */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="text-lg font-semibold text-green-600">Loans</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Smart <span className="text-green-600">Loan Support</span> for
              Student Needs
            </h1>
            <p className="mt-5 text-lg leading-9 text-slate-600">
              Explore loan services created to support tuition, academic
              expenses, and emergency financial needs through a clean and
              professional banking experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/accounts"
                className="rounded-full border border-green-600 px-6 py-3 text-sm font-semibold text-green-700 hover:bg-green-50"
              >
                Back to Accounts
              </Link>

              <Link
                href="/cards"
                className="rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
              >
                View Cards
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="relative overflow-hidden rounded-4xl bg-white p-4 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                alt="Loan support"
                width={1200}
                height={700}
                className="h-107.5 w-full rounded-[28px] object-cover"
              />

              <div className="absolute right-6 top-6 w-62.5 rounded-3xl bg-white p-5 shadow-xl md:right-10 md:top-10">
                <h3 className="text-xl font-bold leading-snug text-green-700 md:text-2xl">
                  Financial Support
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 md:text-base">
                  Education-focused loans that help students manage important
                  costs.
                </p>
              </div>

              <div className="absolute bottom-6 left-6 rounded-3xl bg-green-600 px-6 py-5 text-white shadow-xl md:bottom-10 md:left-10">
                <h3 className="text-3xl font-bold md:text-4xl">Easy</h3>
                <p className="mt-1 text-lg font-semibold">Installments</p>
                <p className="mt-1 text-sm text-green-100">
                  Flexible student support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOAN TYPES */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-8">
            <p className="text-lg font-semibold text-green-600">
              Loan Facilities
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Available Loan Services
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {loans.map((loan, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50">
                  {loan.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {loan.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{loan.desc}</p>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-green-600">
                  Learn more <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
