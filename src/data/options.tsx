import React from 'react'
import { IButtonItem } from "../@interfaces";
import { FiCircle, FiList, FiGrid } from "react-icons/fi";

export const options1: IButtonItem[] = [
  { value: "Leading", content: "Leading" },
  { value: "Middle", content: "Middle" },
  { value: "Trailing", content: "Trailing" },
];

export const options2: IButtonItem[] = [
  {
    value: "first",
    content:  (
      <>
        <span><FiCircle size={20} className='mr-2'/></span>
        First
      </>
    ),
  },
  {
    value: "second",
    content: (
      <>
        <span><FiCircle size={20} className='mr-2'/></span>
        Second
      </>
    ),
  },
  {
    value: "third",
    content: (
      <>
        <span><FiCircle size={20} className='mr-2'/></span>
        Third
      </>
    ),
  },
];

export const options3: IButtonItem[] = [
  {value:'list', content:<FiList size={20}/>},
  {value:'grid', content:<FiGrid size={20}/>},
]
