import { useState } from 'react';
import { useRouter } from 'next/router';
import { IoIosMenu } from 'react-icons/io';
import classes from "./HamMenu.module.css";

export default function ShopDropdown() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function handleSelect(category) {
    router.push(category);
    setOpen(false); // close list after selection
  }

  return (
    <div className={classes.mainDiv}>
      {/* Icon button */}
      <span
        className={classes.mainSpan}
        onClick={() => setOpen(prev => !prev)}
      >
        <IoIosMenu />
      </span>

      {/* Pop‑out list */}
      {open && (
        <ul className={classes.dropdownList}>
          <li onClick={() => handleSelect('Boats')}>Boats</li>
          <li onClick={() => handleSelect('Parts')}>Parts</li>
          <li onClick={() => handleSelect('Engines')}>Engines</li>
           <li onClick={() => handleSelect('Paint')}>Paint</li>
          <li onClick={() => handleSelect('Second-Hand')}>Second-Hand</li>
        </ul>
      )}
    </div>
  );
}


