//src/app/page.tsx
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Welcome to Home</h1>
            <Link href='/about'>About</Link>
            <br />
            <Link href='/blogs'>Blogs</Link>
            <br />
            <Link href='/products'>Products</Link>
            <br />
            <Link href='/profile'>Profile</Link>
        </div>
    );
}