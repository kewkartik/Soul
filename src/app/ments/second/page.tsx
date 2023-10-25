"use client"
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <main className="flex flex-col mx-auto max-w-7xl p-12 pt-32">
      <div>
      <div className="relative h-[350px] sm:h-[450px]">
    <Image
      src="https://i.imgur.com/TvgTExH.jpg"
      alt=""
      width={250}
      height={250}
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-100"
    />

    <img
          src="https://i.imgur.com/TvgTExH.jpg"
          alt=""
          width={250}
          height={250}
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-100"
    />
  </div>
      </div>
      <div> 
      <h2 className="scroll-m-20 border-b pt-4 text-3xl font-semibold tracking-tight first:mt-0">
        Ingredients
      </h2>     
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>½ cup water</li>
        <li>½ (12 ounce) can of Tomato Paste</li>
        <li>1 teaspoon dried oregano, crushed</li>
        <li>1 teaspoon dried basil, crushed</li>
        <li>½ teaspoon garlic powder</li>
        <li>½ teaspoon onion powder</li>
        <li>½ teaspoon sugar</li>
        <li>½ teaspoon salt</li>
        <li>¼ teaspoon black pepper</li>
        <li>1 tablespoon sugar</li>
        <li>1 ½ teaspoons salt</li>
        <li>1 ⅓ cups very warm water (120 degrees F to 130 degrees F) </li>
        <li>⅓ cup oil</li>
      </ul>
      </div>
      <div>
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                Steps
              </th>
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                How to
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Step-1
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Preheat the oven to 425 degrees F (220 degrees C). Grease two 12-inch pizza pans.
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Step-2
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Make sauce: Whisk together water, tomato paste, oregano, basil, garlic powder, onion powder, sugar, salt, and pepper in a medium bowl until smooth. Set aside.
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Step-3
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Make crust: Combine 2 cups flour, yeast, sugar, and salt in a large bowl. Add warm water and oil; mix until well blended, about 1 minute. Gradually add remaining flour, a little at a time, until a soft, sticky dough forms.
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Step-4
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Transfer dough to a floured surface; knead until dough is smooth and elastic, about 4 minutes. Add more flour as needed. (If using RapidRise yeast, let dough rest, covered, for 10 minutes.
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Step-5
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Divide dough in half. Lightly flour your hands, then pat each piece of dough onto the prepared pizza pans.
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Step-6
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Top dough with sauce, cheese, and pepperoni.</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Step-7
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Bake in the preheated oven until crusts are browned and cheese is bubbly, 18 to 20 minutes. Rotate pizza pans between the top and bottom oven racks halfway through baking.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Cooking Time - 1 Hour
      </p>
      <hr />
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Serving Size - 4 Humans
      </p>
      <hr />
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Difficulty level - Mid ngl
      </p>
      <hr />
    </div>
      
    </main>
  )
}