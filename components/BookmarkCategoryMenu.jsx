import styles from '../styles/BookmarkCategoryMenu.module.css';


function BookmarkCategoryMenu({ category, openMenuId, toggleAddBookmarkFormVisibility }) {
    return (
        <ul className={`${styles.actions} ${openMenuId == category.id ? styles.open : ''}`}>
            <li key={category.id + 'add'} className={styles.action} onClick={toggleAddBookmarkFormVisibility}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                <span className={styles.add}>Add bookmark</span>
            </li>
            <li key={category.id + 'edit'} className={styles.action}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                <span className={styles.edit}>Edit title</span>
            </li>
            <li key={category.id + 'delete'} className={styles.action}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                <span className={styles.delete}>Delete category</span>
            </li>
            <li key={category.id + 'confirm'} className={styles.action}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                <span className={styles.confirm}>Click to confirm</span>
            </li>
        </ul>
    );
  }

  export default BookmarkCategoryMenu;