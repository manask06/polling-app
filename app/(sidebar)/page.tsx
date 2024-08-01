"use client"

import { Avatar, Dropdown, Navbar, Sidebar, SidebarCollapse, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaPoll } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { HiArrowSmRight, HiChartPie, HiShoppingBag, HiTable, HiUser } from "react-icons/hi"
import { HiInbox } from "react-icons/hi2"

export default function Page() {
  const [isSidebarOpen, toggleSidebar] = useState(false)
  return (
    <>
    <Navbar className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50" fluid rounded>
      <button
        onClick={() => toggleSidebar(!isSidebarOpen)}
        data-drawer-target="drawer-navigation"
        data-drawer-toggle="drawer-navigation"
        aria-controls="drawer-navigation"
        className="p-2 mr-2 text-2xl text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <GiHamburgerMenu className=""></GiHamburgerMenu>
      </button>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo"  />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
      
    </Navbar>
    
    <Sidebar
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidenav"
      id="drawer-navigation">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="#" icon={HiChartPie}>
            Dashboard
          </SidebarItem>
          {/* <SidebarCollapse icon={HiShoppingBag} label="E-commerce">
            <SidebarItem href="#">Products</SidebarItem>
            <SidebarItem href="#">Sales</SidebarItem>
            <SidebarItem href="#">Refunds</SidebarItem>
            <SidebarItem href="#">Shipping</SidebarItem>
          </SidebarCollapse> */}
          <SidebarItem href="/dashboard/polls" icon={FaPoll}>
            Polls
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
      </Sidebar>
    </>
    
  )
}