import styles from "./Category.module.css";
export function Category({category, children}) {
    return(
        <section className={styles.category}>
            <h2>{category}</h2>
            <div>
                {children }
            </div>
        </section>
    );

    
}