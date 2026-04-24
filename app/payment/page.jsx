"use client";

import { useState } from "react";

export default function Payment() {
  const [studentId, setStudentId] = useState("");
  const [semester, setSemester] = useState("Spring 2026");
  const [method, setMethod] = useState("bKash");
  const [amount, setAmount] = useState("");
  const [paid, setPaid] = useState(false);
  const [receipt, setReceipt] = useState(null);

  function generateTransactionId() {
    return "TXN-" + Math.floor(100000000 + Math.random() * 900000000);
  }

  function getTodayDate() {
    return new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function handlePay(e) {
    e.preventDefault();

    if (!studentId.trim()) {
      alert("Please enter Student ID");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const newReceipt = {
      studentId,
      semester,
      method,
      amount: Number(amount),
      transactionId: generateTransactionId(),
      date: getTodayDate(),
    };

    setReceipt(newReceipt);
    setPaid(true);
  }

  function handleDownloadReceipt() {
    if (!receipt) return;

    const receiptText = `
==============================
        GUB BANK RECEIPT
==============================
Student ID     : ${receipt.studentId}
Semester       : ${receipt.semester}
Payment Method : ${receipt.method}
Amount Paid    : ৳ ${receipt.amount.toLocaleString()}
Transaction ID : ${receipt.transactionId}
Date           : ${receipt.date}

Status         : Payment Successful
==============================
Thank you for using GUB Bank.
`.trim();

    const blob = new Blob([receiptText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `GUB-Receipt-${receipt.studentId}.txt`;
    link.click();

    URL.revokeObjectURL(url);
  }

  function handleReset() {
    setPaid(false);
    setStudentId("");
    setSemester("Spring 2026");
    setMethod("bKash");
    setAmount("");
    setReceipt(null);
  }

  return (
    <div className="min-h-screen bg-[#eef4fb] px-4 py-10 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[28px] bg-white p-8 shadow-sm">
          <div className="text-center">
            <p className="text-sm font-semibold text-green-600">
              University Payment
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-5xl">
              GUB Tuition Payment
            </h1>
            <p className="mt-3 text-slate-500">
              Pay your GUB tuition fees quickly and easily in one secure place.
            </p>
          </div>

          {!paid ? (
            <form
              onSubmit={handlePay}
              className="mt-10 grid gap-6 lg:grid-cols-2"
            >
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Student ID
                  </label>
                  <input
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder="222-xxx-xxx"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Semester
                  </label>
                  <select
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none focus:border-blue-500"
                  >
                    <option>Spring 2026</option>
                    <option>Summer 2026</option>
                    <option>Fall 2026</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Amount (BDT)
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount (e.g. 50000)"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Payment Method
                  </label>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setMethod("bKash")}
                      className={`rounded-2xl border px-4 py-4 text-left ${
                        method === "bKash"
                          ? "border-pink-500 bg-pink-50"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      <p className="text-lg font-bold text-slate-900">bKash</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Mobile payment
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setMethod("Card")}
                      className={`rounded-2xl border px-4 py-4 text-left ${
                        method === "Card"
                          ? "border-green-500 bg-green-50"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      <p className="text-lg font-bold text-slate-900">Card</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Visa / Mastercard
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-[#f8fafc] p-6">
                <h2 className="text-2xl font-bold text-slate-900">
                  Payment Summary
                </h2>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-4">
                    <span className="text-slate-500">Student ID</span>
                    <span className="font-semibold text-slate-900">
                      {studentId || "Not entered"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-4">
                    <span className="text-slate-500">Semester</span>
                    <span className="font-semibold text-slate-900">
                      {semester}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-4">
                    <span className="text-slate-500">Method</span>
                    <span className="font-semibold text-slate-900">
                      {method}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-4">
                    <span className="text-slate-500">Amount</span>
                    <span className="text-2xl font-bold text-green-600">
                      ৳ {Number(amount || 0).toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-green-600 px-6 py-4 text-lg font-semibold text-white hover:bg-green-700"
                >
                  Pay Now
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-10 rounded-3xl bg-green-50 p-10 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-4xl text-white">
                ✓
              </div>

              <h2 className="mt-6 text-3xl font-bold text-slate-900">
                Payment Successful 🎉
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                Your GUB tuition payment has been completed successfully.
              </p>

              <div className="mx-auto mt-8 max-w-3xl grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white px-4 py-4 text-left shadow-sm">
                  <p className="text-sm text-slate-500">Student ID</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {receipt.studentId}
                  </p>
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-left shadow-sm">
                  <p className="text-sm text-slate-500">Semester</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {receipt.semester}
                  </p>
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-left shadow-sm">
                  <p className="text-sm text-slate-500">Payment Method</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {receipt.method}
                  </p>
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-left shadow-sm">
                  <p className="text-sm text-slate-500">Amount Paid</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    ৳ {receipt.amount.toLocaleString()}
                  </p>
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-left shadow-sm">
                  <p className="text-sm text-slate-500">Transaction ID</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {receipt.transactionId}
                  </p>
                </div>

                <div className="rounded-2xl bg-white px-4 py-4 text-left shadow-sm">
                  <p className="text-sm text-slate-500">Date</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {receipt.date}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  onClick={handleDownloadReceipt}
                  className="rounded-full bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700"
                >
                  Download Receipt
                </button>

                <button
                  onClick={handleReset}
                  className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  Make Another Payment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
