"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import ProfileDropdown from "@/components/ProfileDropdown";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Dashboard() {
  const { user: firebaseUser } = useAuth();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({
    studentId: "221-000-000",
    balance: 1500,
    savings: 500,
    cardStatus: "Active",
    remittanceCount: 0,
    transactions: [],
    loanRequests: [],
    transfers: [],
    withdrawals: [],
    name: "",
    email: "",
  });

  const [depositAmount, setDepositAmount] = useState("");
  const [transferTo, setTransferTo] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");

  // ---------------- LOAD USER ----------------
  useEffect(() => {
    const loadUser = async () => {
      if (!firebaseUser) return;

      const ref = doc(db, "users", firebaseUser.uid);
      const snap = await getDoc(ref);

      if (snap.exists()) {
        setProfile(snap.data());
      } else {
        const newUser = {
          ...profile,
          name: firebaseUser.displayName || "GUB User",
          email: firebaseUser.email || "No email",
        };
        await setDoc(ref, newUser);
        setProfile(newUser);
      }

      setLoading(false);
    };

    loadUser();
  }, [firebaseUser]);

  const saveProfile = async (updated) => {
    setProfile(updated);
    const ref = doc(db, "users", firebaseUser.uid);
    await setDoc(ref, updated);
  };

  const today = () =>
    new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  // ---------------- HANDLERS ----------------
  const handleDeposit = async () => {
    const amount = Number(depositAmount);
    if (!amount || amount <= 0) return;

    const updated = {
      ...profile,
      balance: profile.balance + amount,
      savings: profile.savings + amount,
    };

    setDepositAmount("");
    await saveProfile(updated);
  };

  const handleTransfer = async () => {
    const amount = Number(transferAmount);
    if (!amount || !transferTo || amount > profile.balance) return;

    const updated = {
      ...profile,
      balance: profile.balance - amount,
      remittanceCount: profile.remittanceCount + 1,
    };

    setTransferAmount("");
    setTransferTo("");
    await saveProfile(updated);
  };

  const handleLoan = async () => {
    const amount = Number(loanAmount);
    if (!amount) return;

    const updated = {
      ...profile,
      loanRequests: [...profile.loanRequests, { amount }],
    };

    setLoanAmount("");
    await saveProfile(updated);
  };

  const handleWithdraw = async () => {
    const amount = Number(withdrawAmount);
    if (!amount || amount > profile.balance) return;

    const updated = {
      ...profile,
      balance: profile.balance - amount,
    };

    setWithdrawAmount("");
    await saveProfile(updated);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eef4fb] px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-green-600 font-semibold">Welcome back</p>
            <h1 className="text-5xl font-bold text-slate-900">
              {profile.name}
            </h1>
            <p className="text-slate-500">{profile.email}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/payment")}
              className="bg-green-600 text-white px-5 py-2 rounded-full font-semibold"
            >
              Payment
            </button>

            <button
              onClick={() => router.push("/remittance")}
              className="border border-green-600 text-green-700 px-5 py-2 rounded-full font-semibold"
            >
              Remittance
            </button>

            <ProfileDropdown />
          </div>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          {/* LEFT SIDE */}
          <div>
            {/* BALANCE CARD */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Current balance</h2>

              <p className="text-6xl font-bold mt-4">
                ${profile.balance.toFixed(2)}
              </p>

              <p className="text-slate-400 mt-1">As of {today()}</p>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-500">Savings</p>
                  <p className="font-bold">${profile.savings}</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-500">Card Status</p>
                  <p className="font-bold">{profile.cardStatus}</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-500">Remittance</p>
                  <p className="font-bold">{profile.remittanceCount}</p>
                </div>
              </div>

              {/* DEPOSIT */}
              <div className="flex gap-3 mt-6">
                <input
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  placeholder="Enter deposit amount"
                  className="flex-1 border rounded-full px-5 py-3"
                />
                <button
                  onClick={handleDeposit}
                  className="bg-green-600 text-white px-6 rounded-full"
                >
                  Deposit
                </button>
              </div>
            </div>

            {/* LOWER CARDS */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {/* TRANSACTION */}
              <div className="bg-white p-6 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Transaction Overview</h3>

                <p>Deposits: $0.00</p>
                <p className="text-red-500 mt-2">Withdraw / Transfer: $0.00</p>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-100 p-4 rounded-xl">
                    Loan Requests: {profile.loanRequests.length}
                  </div>
                  <div className="bg-gray-100 p-4 rounded-xl">
                    Transfers: {profile.transfers.length}
                  </div>
                </div>
              </div>

              {/* PROFILE */}
              <div className="bg-white p-6 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Profile Summary</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>Name: {profile.name}</div>
                  <div>Email: {profile.email}</div>
                  <div>ID: {profile.studentId}</div>
                  <div>Savings: ${profile.savings}</div>
                  <div>Status: {profile.cardStatus}</div>
                  <div>Tx: {profile.transactions.length}</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* TRANSFER */}
            <div className="bg-yellow-400 p-6 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Transfer money</h3>

              <input
                value={transferTo}
                onChange={(e) => setTransferTo(e.target.value)}
                placeholder="Transfer to"
                className="w-full mb-3 p-3 rounded-xl bg-yellow-200"
              />

              <input
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                placeholder="Amount"
                className="w-full mb-3 p-3 rounded-xl bg-yellow-200"
              />

              <button
                onClick={handleTransfer}
                className="w-full bg-white py-3 rounded-xl font-bold"
              >
                Send Money
              </button>
            </div>

            {/* LOAN */}
            <div className="bg-green-300 p-6 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Request loan</h3>

              <div className="flex gap-3">
                <input
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="flex-1 p-3 rounded-xl bg-green-200"
                />
                <button
                  onClick={handleLoan}
                  className="bg-white px-5 rounded-xl"
                >
                  →
                </button>
              </div>
            </div>

            {/* WITHDRAW */}
            <div className="bg-red-300 p-6 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Withdraw</h3>

              <div className="flex gap-3">
                <input
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="flex-1 p-3 rounded-xl bg-red-200"
                />
                <button
                  onClick={handleWithdraw}
                  className="bg-white px-5 rounded-xl"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
