import Link from 'next/link';
import styles from './Layout.module.css';

export default function Layout({children}){
    return (
    <div className={styles.Layout}>
      {/* Navbar start */}
      <nav>
        <ul className={styles['nav-ul']}>
          <li className={styles['nav-li']}>
            <Link href="/"><a>Home</a></Link>
          </li>
          <li className={styles['nav-li']}>
            <Link href="/about"><a>About</a></Link>
          </li>
          <li className={styles['nav-li']}>
            <Link href="/contact"><a>Contact</a></Link>
          </li>
        </ul>
      </nav>
      {/* Navbar end */}
      {/* each route content is rendered below */}
      {children}
    </div>
    )
}