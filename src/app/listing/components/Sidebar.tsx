import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Filters } from "../definitions";
import { getSelectedCheckboxes } from "../utilities";

function Sidebar({
  filters,
  selectedFilters,
}: {
  filters: Filters;
  selectedFilters: (valArr: Array<string>) => void;
}) {
  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    selectedFilters(getSelectedCheckboxes(e));
  };

  return (
    <form className="hidden lg:block">
      <h3 className="sr-only">Categories</h3>
      {/* <ul
        role="list"
        className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
      >
        {subCategories.map((category) => (
          <li key={category.name}>
            <a href={category.href}>{category.name}</a>
          </li>
        ))}
      </ul> */}

      {filters.map((section) => (
        <Disclosure
          key={section.id}
          as="div"
          className="border-b border-gray-200 py-6"
        >
          <h3 className="-my-3 flow-root">
            <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">{section.name}</span>
              <span className="ml-6 flex items-center">
                <PlusIcon
                  aria-hidden="true"
                  className="size-5 group-data-[open]:hidden"
                />
                <MinusIcon
                  aria-hidden="true"
                  className="size-5 [.group:not([data-open])_&]:hidden"
                />
              </span>
            </DisclosureButton>
          </h3>
          <DisclosurePanel className="pt-6">
            <div className="space-y-4">
              {section.options.map((option, optionIdx) => (
                <div key={option.value} className="flex items-center">
                  <input
                    defaultValue={option.value}
                    defaultChecked={option.checked}
                    id={`filter-${section.id}-${optionIdx}`}
                    name={`${section.id}`}
                    type="checkbox"
                    className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor={`filter-${section.id}-${optionIdx}`}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      ))}
    </form>
  );
}

export default Sidebar;
