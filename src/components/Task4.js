import React, { useState } from 'react';
import '../Styles/Task4.css';
const data = [
  { id: 1, customer: 'Anna Bruen', orders: 3, totalSpent: 647.91 },
  { id: 2, customer: 'Branson Weinman', orders: 2, totalSpent: 295.31 },
  { id: 3, customer: 'Stephon Medhurst', orders: 7, totalSpent: 803.73 },
  { id: 4, customer: 'Elliot Hane', orders: 6, totalSpent: 437.89 },
  { id: 5, customer: 'Janick Mayer', orders: 10, totalSpent: 1475.48 },
  { id: 6, customer: 'Willa Schmidt', orders: 4, totalSpent: 510.21 },
  { id: 7, customer: 'Benedict Wolff', orders: 1, totalSpent: 87.00 },
  { id: 8, customer: 'Amira Bode', orders: 8, totalSpent: 1124.57 },
  { id: 9, customer: 'Lucious Fahey', orders: 3, totalSpent: 542.33 },
  { id: 10, customer: 'Dario Daugherty', orders: 9, totalSpent: 972.89 },
  { id: 11, customer: 'Piper Aufderhar', orders: 5, totalSpent: 617.42 },
  { id: 12, customer: 'Salvador Macejkovic', orders: 6, totalSpent: 795.20 },
  { id: 13, customer: 'Milo Nienow', orders: 11, totalSpent: 1573.81 },
  { id: 14, customer: 'Ryann Waters', orders: 2, totalSpent: 217.49 },
  { id: 15, customer: 'Ellis McDermott', orders: 4, totalSpent: 413.98 },
  { id: 16, customer: 'Jaycee Stanton', orders: 7, totalSpent: 893.42 },
  { id: 17, customer: 'Lilliana Morissette', orders: 5, totalSpent: 612.19 },
  { id: 18, customer: 'Claudie Prosacco', orders: 9, totalSpent: 982.45 },
  { id: 19, customer: 'Betsy Runte', orders: 3, totalSpent: 437.00 },
  { id: 20, customer: 'Devin Weber', orders: 12, totalSpent: 1621.88 },
  { id: 21, customer: 'Mohammed Mertz', orders: 2, totalSpent: 203.12 },
  { id: 22, customer: 'Leonora Weimann', orders: 8, totalSpent: 1084.34 },
  { id: 23, customer: 'Jonas Nikolaus', orders: 5, totalSpent: 625.98 },
  { id: 24, customer: 'Brooklynn Waelchi', orders: 3, totalSpent: 484.75 },
  { id: 25, customer: 'Jaeden Stark', orders: 10, totalSpent: 1459.32 }
];

function Task4() {
  const [query, setQuery] = useState('');
  const [sortKey, setSortKey] = useState('customer');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (key) => {
    setSortKey(key);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const filteredData = data
  .filter((d) => {
    return (
      d.customer.toLowerCase().includes(query.toLowerCase()) ||
      d.orders.toString().includes(query) ||
      d.totalSpent.toFixed(2).includes(query)
    );
  })
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortKey] > b[sortKey] ? 1 : -1;
      } else {
        return a[sortKey] < b[sortKey] ? 1 : -1;
      }
    });

  return (
    <div className="datagrid-container">
      <h2>Task 4: Enhanced Data Grid</h2>
      <input
        type="text"
        className="search-bar"
        placeholder="Search customers, orders, or total spent..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleSort('customer')}>
              Customer {sortKey === 'customer' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('orders')}>
              Orders {sortKey === 'orders' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('totalSpent')}>
              Total Spent {sortKey === 'totalSpent' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((d) => (
            <tr key={d.id}>
              <td>{d.customer}</td>
              <td>{d.orders}</td>
              <td>${d.totalSpent.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task4;
