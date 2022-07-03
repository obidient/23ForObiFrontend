import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Styles.module.scss';

const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .toUpperCase();
};

const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  const newBread = breadcrumbs?.filter((item) => {
    return item.breadcrumb !== 'states';
  });

  console.log(newBread);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  console.log(breadcrumbs);
  return (
    <nav aria-label="breadcrumbs" className={styles.breadcrumb}>
      <ol>
        <li>
          <a href="/">HOME</a>
        </li>
        {newBread.map((breadcrumb, i) => {
          return (
            <li key={breadcrumb.href}>
              <Link href={breadcrumb.href}>
                <a>{convertBreadcrumb(breadcrumb.breadcrumb)}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
