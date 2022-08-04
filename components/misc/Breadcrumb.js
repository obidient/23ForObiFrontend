import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Styles.module.scss';


export const StateBreadcrumb = ({state}) => {
    
  return (
    <nav aria-label="breadcrumbs" className={styles.breadcrumb}>
      <ol>
        <Link href='/'>
          <li className="cursor-pointer">
            <a>Home</a>
          </li>
        </Link>
        <li>
          {state}
        </li>
      </ol>
    </nav>
  );
};

export const VillageBreadcrumb = ({state, village, villageState, state_id}) => {
    
  return (
    <nav aria-label="breadcrumbs" className={styles.breadcrumb}>
      <ol>
        <Link href='/'>
          <li className="cursor-pointer">
            <a>Home</a>
          </li>
        </Link>
        <Link href={`/states/${state_id}/`}>
          <li className="cursor-pointer">
            <a>{villageState}</a>
          </li>
        </Link>
        <li>
          {village}
        </li>
      </ol>
    </nav>
  );
};
