import React, { useState } from 'react';
import styles from './Sidebar.module.css'

const Sidebar = ({animals, update, currentAnimal}) => {
    const handleClick = animal => {
        if(animal === currentAnimal) {
            update(null)
        } else {
            update(animal);
        }
    };
  
  return (
    <>
        <div className={styles.sidebar}>
            <ul>
                {animals.map((animal, index) => (
                <li key={index} onClick={() => handleClick(animal)}>
                    {animal.name}
                </li>
                ))}
            </ul>
        </div> 
    </>     
  );
};

export default Sidebar;