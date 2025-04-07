import React from 'react'
import { IButtonItem } from "../@interfaces";
import { FiCircle, FiList, FiGrid } from "react-icons/fi";


const Circle = FiCircle as React.FC<any>;

const List = FiList as React.FC<any>;

const Grid = FiGrid as React.FC<any>;

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
        <span><Circle size={20} className='mr-2'/></span>
        First
      </>
    ),
  },
  {
    value: "second",
    content: (
      <>
        <span><Circle size={20} className='mr-2'/></span>
        Second
      </>
    ),
  },
  {
    value: "third",
    content: (
      <>
        <span><Circle size={20} className='mr-2'/></span>
        Third
      </>
    ),
  },
];

export const options3: IButtonItem[] = [
  {value:'list', content:<List size={20}/>},
  {value:'grid', content:<Grid size={20}/>},
]
