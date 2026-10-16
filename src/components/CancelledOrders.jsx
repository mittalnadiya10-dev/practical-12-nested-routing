import React from 'react';

function CancelledOrders() {
  return (
    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-4">Cancelled Orders</h2>
      <div className="p-4 border border-rose-200 rounded-lg bg-rose-50/40 flex justify-between items-center">
        <div>
          <span className="text-xs font-mono text-slate-500 uppercase">ORD-7512</span>
          <h3 className="font-semibold text-slate-900 text-sm mt-0.5">Apple iPad Air 64GB</h3>
          <p className="text-xs text-rose-600">Reason: Cancelled by customer before dispatch</p>
        </div>
        <div className="text-right">
          <span className="text-sm font-bold text-slate-900">₹54,900</span>
          <span className="block mt-1 text-[11px] bg-rose-100 text-rose-800 font-semibold px-2 py-0.5 rounded-full text-center">
            Refunded
          </span>
        </div>
      </div>
    </div>
  );
}

export default CancelledOrders;
