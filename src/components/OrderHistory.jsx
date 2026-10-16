import React from 'react';

function OrderHistory() {
  const history = [
    { id: 'ORD-8710', item: 'Dell 27" 4K Monitor', price: '₹34,500', deliveredOn: '02 Oct 2026' },
    { id: 'ORD-8622', item: 'Keychron K2 Mechanical Keyboard', price: '₹7,999', deliveredOn: '25 Sep 2026' }
  ];

  return (
    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-4">Delivered Orders</h2>
      <div className="space-y-3">
        {history.map((h) => (
          <div key={h.id} className="p-4 border border-slate-200 rounded-lg flex justify-between items-center bg-emerald-50/30">
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase">{h.id}</span>
              <h3 className="font-semibold text-slate-900 text-sm mt-0.5">{h.item}</h3>
              <p className="text-xs text-slate-500">Delivered on: {h.deliveredOn}</p>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-slate-900">{h.price}</span>
              <span className="block mt-1 text-[11px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full text-center">
                ✓ Delivered
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
