import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { FaCreditCard, FaCalendarAlt } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext/AuthContext";

const PaymentHistory = () => {
  const { user } = use(AuthContext)
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    axios
      .get(`http://localhost:5000/paymentsInfo?email=${(user.email)}`)
      .then((res) => {
        setPayments(res.data);
        setError("");
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load payment history.");
      })
      .finally(() => setLoading(false));
  }, [user]);

  if (loading) return <p className="text-center mt-8">Loading payment history...</p>;
  if (error) return <p className="text-center mt-8 text-red-600">{error}</p>;
  if (payments.length === 0) return <p className="text-center mt-8">No payment history found.</p>;

  return (
    <section className="bg-gray-50 min-h-screen p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">Payment History</h1>

        <div className="space-y-6">
          {payments.map((payment) => (
            <div
              key={payment._id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0
                         hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <FaCreditCard size={28} />
                </div>
                <div className="truncate">
                  <p className="text-lg font-semibold text-gray-800 truncate">{payment.transactionId}</p>
                  <p className="text-sm text-gray-500 truncate">Method: {payment.paymentMethod?.[0] || "N/A"}</p>
                </div>
              </div>

              <div className="flex-1 min-w-[140px] text-center md:text-left">
                <p className="text-xl font-bold flex items-center justify-center md:justify-start gap-1">
                  {payment.amount.toLocaleString()}
                </p>
                <p className="text-sm text-gray-400">BDT</p>
              </div>

              <div className="flex-1 min-w-[220px] text-center md:text-left">
                <p className="text-gray-700 font-medium truncate">{payment.email}</p>
                <p className="flex items-center text-sm text-gray-500 gap-1">
                  <FaCalendarAlt />
                  {new Date(payment.paid_at_string).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              <div className="hidden md:flex flex-1 justify-end text-sm text-gray-400 italic">
                Hotel ID: <span className="ml-1 font-mono">{payment.hotelsId}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentHistory;
