import styles from '../styles/Layout.module.css';

const Layout = ({ title, children, footer }) => {
    return (
        <div className={ styles.layout }>
            <header className= { styles.layout__header } >
                <h1> { title } </h1>
            </header>
            <main className={ styles.layout__main }>
                { children }
            </main>
            <footer className={styles.layout__footer}>
                { footer }
            </footer>
        </div>
    )
}

export default Layout