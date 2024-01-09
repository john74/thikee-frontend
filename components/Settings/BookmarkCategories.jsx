import { useState } from 'react';
import {
    useHandleProxyRequest,
} from '@hooks';


function BookmarkCategories(props) {
    const styles = props.styles;
    const categories = props.bookmarkCategories;
    const [selectedCategories, setSelectedCategories] = useState([]);
    const {
        openForm
    } = props.formVisibilityHook;

    const handleCategoryIds = (categoryId) => {
        const isSelected = selectedCategories.includes(categoryId);
        let updatedCategoryIds = isSelected ? selectedCategories.filter(id => id != categoryId) : [...selectedCategories, categoryId];
        setSelectedCategories(updatedCategoryIds);
    }

    const handleDelete = async (event) => {
        if (!selectedCategories.length) return;

        const method = "DELETE";
        const targetEndpoint = "api/categories/bulk-delete/";
        const url = `${props.baseUrl}/api/${method.toLowerCase()}/?targetEndpoint=${targetEndpoint}`;
        const body = {"ids": selectedCategories.map(category => category.id)};

        const responseJSON = await useHandleProxyRequest(url, method, body,);
        if (!responseJSON) return;

        const groupedCategories = responseJSON.categories;
        const categories = groupedCategories.flat();
        props.setBookmarkCategories(categories);
    }

    const handleEdit = async () => {
        if (selectedCategories.length != 1) return;
        const category = selectedCategories[0];
        openForm("editBookmarkCategoryForm", category);
    }

    const handleCreate = async () => {
        console.log("CREATE CATS");
    }


    return (
        <>
        <div className={styles.section}>
            <h3 className={styles.title}>Bookmark categories</h3>
            <div className={styles.actionButtons}>
                <button className={styles.createButton} onClick={handleCreate}>Create</button>
                {selectedCategories.length === 1 && (
                    <button className={styles.editButton} onClick={handleEdit}>
                    Edit
                    </button>
                )}
                {selectedCategories.length > 0 && (
                    <button className={styles.deleteButton} onClick={handleDelete}>
                    Delete
                    </button>
                )}
            </div>
            <ul className={styles.categories}>
                {categories.map(category => (
                    <li className={styles.category} key={category.id}>
                        <label className={styles.label}>
                            <input className={styles.checkbox} type="checkbox" value={category} checked={selectedCategories.includes(category)} onChange={() => handleCategoryIds(category)}/>
                            <span className={styles.name}>{category.name}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default BookmarkCategories;