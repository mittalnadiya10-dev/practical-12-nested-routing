import React from 'react';

function CurrentOrders() {
  const orders = [
    { id: 'ORD-9821', item: 'Sony WH-1000XM5 Headphones', price: '₹26,990', eta: 'Tomorrow, 5 PM', status: 'In Transit' },
    { id: 'ORD-9824', item: 'Logitech MX Master 3S Mouse', price: '₹8,495', eta: '16 Oct', status: 'Shipped' }
  ];

  return (
    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-4">Active & Ongoing Deliveries</h2>
      <div className="space-y-3">
        {orders.map((o) => (
          <div key={o.id} className="p-4 border border-slate-200 rounded-lg flex justify-between items-center bg-slate-50/50">
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase">{o.id}</span>
              <h3 className="font-semibold text-slate-900 text-sm mt-0.5">{o.item}</h3>
              <p className="text-xs text-slate-500">Expected: {o.eta}</p>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-slate-900">{o.price}</span>
              <span className="block mt-1 text-[11px] bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full text-center">
                {o.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrentOrders;
