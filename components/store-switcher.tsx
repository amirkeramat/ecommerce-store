"use client"

interface StoreSwitcherProps{
    stores:Store[]
}

import {Fragment} from 'react'
import { Menu } from "@headlessui/react";
import { Store } from '@/types';

const StoreSwitcher:React.FC<StoreSwitcherProps> = ({
    stores
}) => {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        {stores.map((item) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item key={item.id} as={Fragment}>
            {({ active }) => (
              <div
                className={`${
                  active ? "bg-blue-500 text-white" : "bg-white text-black"
                }`}
              >
                {item.name}
              </div>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}

export default StoreSwitcher


