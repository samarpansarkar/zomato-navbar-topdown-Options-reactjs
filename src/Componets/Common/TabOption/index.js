import React from 'react';
import './TabOption.css';

function TabOption({activeTab, setActiveTab}) {
  return (
    <div>
      <button onClick={()=>setActiveTab("Nightlife")}>On Click</button>
    </div>
  )
}

export default TabOption