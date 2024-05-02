import Link from 'next/link'
import styles from './Navigation.module.css'
 
function Navigation() {
  return (
    <div>
      <ul className={styles.navigation}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/classes">Classes</Link>
        </li>
      </ul>
      <hr className='light-grey-line'/>
    </div>

  )
}
 
export default Navigation