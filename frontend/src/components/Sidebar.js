import React from 'react';
import { AiOutlineDashboard } from '@react-icons/all-files/ai/AiOutlineDashboard';
import { AiOutlineLayout } from '@react-icons/all-files/ai/AiOutlineLayout';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';
import { AiOutlineForm } from '@react-icons/all-files/ai/AiOutlineForm';
import { AiOutlineTable } from '@react-icons/all-files/ai/AiOutlineTable';
import { AiOutlineBarChart } from '@react-icons/all-files/ai/AiOutlineBarChart';
import { AiOutlineUser } from '@react-icons/all-files/ai/AiOutlineUser';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Power Analytics</h2>
      <ul className="sidebar-menu">
        <li><AiOutlineDashboard /> Dashboard</li>
        <li><AiOutlineLayout /> Layouts</li>
        <li><AiOutlineMail /> Mailbox</li>
        <li>UI Elements</li>
        <li><AiOutlineForm /> Forms</li>
        <li>Pages</li>
        <li><AiOutlineTable /> Tables</li>
        <li><AiOutlineBarChart /> Charts</li>
        <li>Maps</li>
        <li><AiOutlineUser /> Profile</li>
      </ul>
    </div>
  );
}

export default Sidebar;
