export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="cfooter">
            <small>{year} <a href="https://github.com/urhena">urhena</a></small>
        </footer>
    )
}