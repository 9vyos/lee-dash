"use client";
import { getClient } from "@/lib/apollo-client";
import { SAVE_PRODUCT } from "@/utils/gql";
import { useState } from "react";

const Example = async () => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    categoryId: 1,
  });
  const client = getClient();

  const onSave = async (e) => {
    e.preventDefault();
    const { title, price, description } = e.target.elements;
    console.log(title);
    const { data } = await client.mutate({
      mutation: SAVE_PRODUCT(title.value, price.value, description.value, product.categoryId, "", false),
    });
    console.log(data);
  };

  return (
    <form onSubmit={onSave} className="relative">
      <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
        <label htmlFor="title" className="sr-only">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0"
          placeholder="Title"
        />
        <label htmlFor="title" className="sr-only">
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          className="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-gray-400 focus:ring-0"
          placeholder="price"
        />
        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <textarea
          rows={2}
          name="description"
          id="description"
          className="block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="Write a description..."
          defaultValue={""}
        />

        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true">
          <div className="py-2">
            <div className="h-9" />
          </div>
          <div className="h-px" />
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-px bottom-0">
        {/* Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. */}

        <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
          <div className="flex-shrink-0">
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Example;
