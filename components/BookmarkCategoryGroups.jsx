"use client";


import styles from '../styles/BookmarkCategoryGroups.module.css';
import AddBookmarkForm from './AddBookmarkForm';
import BookmarkCategoryGroup from './BookmarkCategoryGroup';
import { useToggleBookmarkCategoryMenu } from '@hooks';
import { useBookmarkForm } from '@hooks';
import { useState } from 'react';


function BookmarkCategoryGroups({ bookmarkCategoryGroups, bookmarksData }) {
    const [bookmarks, setBookmarks] = useState(bookmarksData);
    const { lastSelectedCategoryId, openMenuId, toggleMenu, menuRef } = useToggleBookmarkCategoryMenu();
    const { isFormVisible, setIsFormVisible, toggleAddBookmarkFormVisibility} = useBookmarkForm();

    return (
        <>
        {isFormVisible && (
        <AddBookmarkForm
            categoryId={lastSelectedCategoryId}
            setBookmarks={setBookmarks}
            existingBookmarks={bookmarks}
            setIsFormVisible={setIsFormVisible}
        />
        )}
        <div className={styles.bookmarkCategoryGroups}>
            <div className={styles.wrapper}>
            {bookmarkCategoryGroups.map((categoryGroup, index) => (
                <BookmarkCategoryGroup
                key={`bookmark-category-group-${index}`}
                categoryGroup={categoryGroup}
                bookmarks={bookmarks}
                openMenuId={openMenuId}
                toggleMenu={toggleMenu}
                menuRef={menuRef}
                toggleAddBookmarkFormVisibility={toggleAddBookmarkFormVisibility}
                />
            ))}
            </div>
        </div>
        </>
    )
}

export default BookmarkCategoryGroups