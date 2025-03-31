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
    content: (
      <>
        <FiCircle size="10" className="mr-2 center" />
          First
      </>
    ),
  },
  {
    value: "second",
    content: (
      <>
        <FiCircle size="10" className="mr-2 center" />
          Second
      </>
    ),
  },
  {
    value: "third",
    content: (
      <>
        <FiCircle size="10" className="mr-2 center" />
          Third
      </>
    ),
  },
];

export const options3 = [
  {value:'list', content:<FiList size={20}/>},
  {value:'grid', content:<FiGrid size={20}/>},
]
