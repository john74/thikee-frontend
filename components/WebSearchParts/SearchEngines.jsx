import {
NonDefaultEngines
} from './';


function SearchEngines(props) {
    const styles = props.styles;
    const {
        toggleMenu,
        openMenuId,
        setOpenMenuId,
    } = props.toggleMenuHook;


    return (
        <>
        <div className={styles.searchEngines} onClick={(event) => toggleMenu(event, "webSearchMenu")}>
            <NonDefaultEngines styles={styles} {...props} />
        </div>
        </>
    );
  }

export default SearchEngines;