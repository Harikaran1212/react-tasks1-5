import React, { useState } from 'react';
import '../Styles/Task4.css';

const data = [
  { 
    id: 1, 
    customer: 'Anna Bruen', 
    orders: 3, 
    totalSpent: 647.91, 
    latestPurchase: '2023-11-01', 
    segment: 'Premium', 
    news: 'Recently bought electronics', 
    lastSeen: '2023-11-05'
  },
  { 
    id: 2, 
    customer: 'Branson Weinman', 
    orders: 2, 
    totalSpent: 295.31, 
    latestPurchase: '2023-10-25', 
    segment: 'Standard', 
    news: 'Planning a big purchase', 
    lastSeen: '2023-11-03'
  },
  { 
    id: 3, 
    customer: 'Stephon Medhurst', 
    orders: 7, 
    totalSpent: 803.73, 
    latestPurchase: '2023-11-03', 
    segment: 'Premium', 
    news: 'Enrolled in loyalty program', 
    lastSeen: '2023-11-05'
  },
  { 
    id: 4, 
    customer: 'Elliot Hane', 
    orders: 6, 
    totalSpent: 437.89, 
    latestPurchase: '2023-10-29', 
    segment: 'Standard', 
    news: 'Looking for holiday deals', 
    lastSeen: '2023-11-01'
  },
  { 
    id: 5, 
    customer: 'Janick Mayer', 
    orders: 10, 
    totalSpent: 1475.48, 
    latestPurchase: '2023-10-30', 
    segment: 'VIP', 
    news: 'Top buyer of the month', 
    lastSeen: '2023-11-06'
  },
  { 
    id: 6, 
    customer: 'Willa Schmidt', 
    orders: 4, 
    totalSpent: 510.21, 
    latestPurchase: '2023-10-27', 
    segment: 'Standard', 
    news: 'Exploring new product categories', 
    lastSeen: '2023-11-03'
  },
  { 
    id: 7, 
    customer: 'Benedict Wolff', 
    orders: 1, 
    totalSpent: 87.00, 
    latestPurchase: '2023-10-20', 
    segment: 'New', 
    news: 'First-time shopper', 
    lastSeen: '2023-10-22'
  },
  { 
    id: 8, 
    customer: 'Amira Bode', 
    orders: 8, 
    totalSpent: 1124.57, 
    latestPurchase: '2023-11-02', 
    segment: 'VIP', 
    news: 'Referred a new customer', 
    lastSeen: '2023-11-06'
  },
  { 
    id: 9, 
    customer: 'Lucious Fahey', 
    orders: 3, 
    totalSpent: 542.33, 
    latestPurchase: '2023-10-28', 
    segment: 'Standard', 
    news: 'Submitted a product review', 
    lastSeen: '2023-11-03'
  },
  { 
    id: 10, 
    customer: 'Dario Daugherty', 
    orders: 9, 
    totalSpent: 972.89, 
    latestPurchase: '2023-11-04', 
    segment: 'VIP', 
    news: 'Loyalty points redeemed', 
    lastSeen: '2023-11-06'
  },
  { 
    id: 11, 
    customer: 'Piper Aufderhar', 
    orders: 5, 
    totalSpent: 617.42, 
    latestPurchase: '2023-10-26', 
    segment: 'Premium', 
    news: 'Looking for winter clothing', 
    lastSeen: '2023-11-04'
  },
  { 
    id: 12, 
    customer: 'Salvador Macejkovic', 
    orders: 6, 
    totalSpent: 795.20, 
    latestPurchase: '2023-10-27', 
    segment: 'Standard', 
    news: 'Signed up for newsletters', 
    lastSeen: '2023-11-02'
  },
  { 
    id: 13, 
    customer: 'Milo Nienow', 
    orders: 11, 
    totalSpent: 1573.81, 
    latestPurchase: '2023-11-05', 
    segment: 'VIP', 
    news: 'Browsing high-end electronics', 
    lastSeen: '2023-11-07'
  },
  { 
    id: 14, 
    customer: 'Ryann Waters', 
    orders: 2, 
    totalSpent: 217.49, 
    latestPurchase: '2023-10-23', 
    segment: 'New', 
    news: 'Recently created an account', 
    lastSeen: '2023-10-25'
  },
  { 
    id: 15, 
    customer: 'Ellis McDermott', 
    orders: 4, 
    totalSpent: 413.98, 
    latestPurchase: '2023-10-28', 
    segment: 'Standard', 
    news: 'Active on social media', 
    lastSeen: '2023-11-01'
  },
  { 
    id: 16, 
    customer: 'Jaycee Stanton', 
    orders: 7, 
    totalSpent: 893.42, 
    latestPurchase: '2023-10-30', 
    segment: 'Premium', 
    news: 'Interested in upcoming sale', 
    lastSeen: '2023-11-02'
  },
  { 
    id: 17, 
    customer: 'Lilliana Morissette', 
    orders: 5, 
    totalSpent: 612.19, 
    latestPurchase: '2023-10-29', 
    segment: 'Standard', 
    news: 'Reviewed a product', 
    lastSeen: '2023-11-04'
  },
  { 
    id: 18, 
    customer: 'Claudie Prosacco', 
    orders: 9, 
    totalSpent: 982.45, 
    latestPurchase: '2023-11-03', 
    segment: 'VIP', 
    news: 'Interested in luxury goods', 
    lastSeen: '2023-11-06'
  },
  { 
    id: 19, 
    customer: 'Betsy Runte', 
    orders: 3, 
    totalSpent: 437.00, 
    latestPurchase: '2023-10-25', 
    segment: 'New', 
    news: 'Looking for gifts', 
    lastSeen: '2023-11-02'
  },
  { 
    id: 20, 
    customer: 'Devin Weber', 
    orders: 12, 
    totalSpent: 1621.88, 
    latestPurchase: '2023-11-01', 
    segment: 'VIP', 
    news: 'Recently upgraded membership', 
    lastSeen: '2023-11-07'
  },
  { 
    id: 21, 
    customer: 'Mohammed Mertz', 
    orders: 2, 
    totalSpent: 203.12, 
    latestPurchase: '2023-10-22', 
    segment: 'New', 
    news: 'Signed up for loyalty program', 
    lastSeen: '2023-10-25'
  },
  { 
    id: 22, 
    customer: 'Leonora Weimann', 
    orders: 8, 
    totalSpent: 1084.34, 
    latestPurchase: '2023-11-03', 
    segment: 'Premium', 
    news: 'Frequently browses electronics', 
    lastSeen: '2023-11-04'
  },
  { 
    id: 23, 
    customer: 'Jonas Nikolaus', 
    orders: 5, 
    totalSpent: 625.98, 
    latestPurchase: '2023-10-30', 
    segment: 'Standard', 
    news: 'Recently moved cities', 
    lastSeen: '2023-11-02'
  },
  { 
    id: 24, 
    customer: 'Brooklynn Waelchi', 
    orders: 3, 
    totalSpent: 484.75, 
    latestPurchase: '2023-10-27', 
    segment: 'Standard', 
    news: 'Favorited a product', 
    lastSeen: '2023-11-03'
  },
  { 
    id: 25, 
    customer: 'Jaeden Stark', 
    orders: 10, 
    totalSpent: 1459.32, 
    latestPurchase: '2023-10-30', 
    segment: 'VIP', 
    news: 'Shared a product on social media', 
    lastSeen: '2023-11-05'
  }
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
        d.totalSpent.toFixed(2).includes(query) ||
        d.latestPurchase.includes(query) ||
        d.segment.toLowerCase().includes(query.toLowerCase()) ||
        d.news.toLowerCase().includes(query.toLowerCase()) ||
        d.lastSeen.includes(query)
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
            <th onClick={() => handleSort('lastSeen')}>
              Last Seen {sortKey === 'lastSeen' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('orders')}>
              Orders {sortKey === 'orders' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('totalSpent')}>
              Total Spent {sortKey === 'totalSpent' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('latestPurchase')}>
              Latest Purchase {sortKey === 'latestPurchase' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('news')}>
              News {sortKey === 'news' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
            <th onClick={() => handleSort('segment')}>
              Segment {sortKey === 'segment' && (sortOrder === 'asc' ? '↑' : '↓')}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((d) => (
            <tr key={d.id}>
              <td>{d.customer}</td>
              <td>{d.lastSeen}</td>
              <td>{d.orders}</td>
              <td>${d.totalSpent.toFixed(2)}</td>
              <td>{d.latestPurchase}</td>
              <td>{d.news}</td>
              <td>{d.segment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task4;
