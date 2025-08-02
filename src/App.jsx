// App.jsx
import React, { useState } from 'react';
import './index.css';

function App() {
  const [userType, setUserType] = useState('buyer');
  const [buyerName] = useState('BIPLOV DHAKAL');
  const [sellerName, setSellerName] = useState('BIPLOV DHAKAL');
  const [editing, setEditing] = useState(false);
  const [tempName, setTempName] = useState(sellerName);

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setEditing(false);
    setTempName(type === 'seller' ? sellerName : buyerName);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setSellerName(tempName);
    setEditing(false);
  };

  const orders = [
    { id: '212105576034878', date: '10/06/2025', total: 803, image: 'https://via.placeholder.com/50' },
    { id: '211502009034878', date: '23/04/2025', total: 1918, image: 'https://via.placeholder.com/50' }
  ];

  const displayName = userType === 'seller' ? sellerName : buyerName;

  return (
    <div className="container">
      <div className="user-toggle">
        <button
          className={userType === 'buyer' ? 'active' : ''}
          onClick={() => handleUserTypeChange('buyer')}
        >
          Buyer
        </button>
        <button
          className={userType === 'seller' ? 'active' : ''}
          onClick={() => handleUserTypeChange('seller')}
        >
          Seller
        </button>
      </div>

      <h1>Manage My Account</h1>

      <div className="section">
        <div className="card">
          <h2>Personal Profile <span className="edit" onClick={handleEditClick}>| EDIT</span></h2>
          {editing && userType === 'seller' ? (
            <>
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <p><strong>{userType === 'seller' ? `${sellerName} (Seller)` : buyerName}</strong></p>
              <p>bi************@gmail.com</p>
              <label><input type="checkbox" /> Receive marketing emails</label>
            </>
          )}
        </div>

        <div className="card">
          <h2>Address Book <span className="edit">| EDIT</span></h2>
          <p><strong>DEFAULT SHIPPING ADDRESS</strong></p>
          <p><strong>{displayName}</strong><br />
          loktantric chowk<br />
          Bagmati Province - Kathmandu Outside Ring Road - Tarakeshwor - Manamaiju Area<br />
          (+977) 9761896393</p>

          <p><strong>DEFAULT BILLING ADDRESS</strong></p>
          <p><strong>{displayName}</strong><br />
          loktantric chowk<br />
          Bagmati Province - Kathmandu Outside Ring Road - Tarakeshwor - Manamaiju Area<br />
          (+977) 9761896393</p>
        </div>
      </div>

      <div className="orders">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Order #</th>
              <th>Placed On</th>
              <th>Items</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td><img src={order.image} alt="Item" /></td>
                <td>Rs. {userType === 'buyer' ? order.total + 50 : order.total}</td>
                <td><button className="manage">MANAGE</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
