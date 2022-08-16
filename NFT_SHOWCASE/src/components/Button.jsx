import React from 'react';

import styles from '../styles/Global';

const expoLink = (assetUrl, link) => {
    return (
        <div 
            className={styles.btnBlack}
            onClick={() => window.open(link, "_blank")}
        >
            <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} />
            <div className="flex flex-col justify-start ml-4">
                <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
                <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
            </div>
        </div>
    )
} 

const sourceCodeLink = (link) => {
    return (
        <div 
            className={styles.btnPrimary}
            onClick={() => window.open(link, "_blank")}
        >
            <p className={`${styles.btnText} font-bold text-md`}>Source Code</p>
        </div>
    )
} 

const Button = ({ assetUrl, link, sourceCode }) => {
  return (
      sourceCode 
      ? sourceCodeLink(link)
      : expoLink(assetUrl, link)
  )
}

export default Button