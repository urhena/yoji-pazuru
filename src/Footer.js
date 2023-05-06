export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="cfooter">
            <small>{year} <a href="https://github.com/urhena/yoji-pazuru/">urhena</a></small>
        </footer>
    )
}