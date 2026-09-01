//src/app/blogs/page.tsx
import Link from 'next/link';

export default function Blog() {
    return (
        <div>
            <h1>Blog</h1>
            <Link href='/'>Home</Link>
            <br />
            <Link href='/about'>About</Link>
            <br />
            <Link href='/products'>Products</Link>
            <br />
            <Link href='/profile'>Profile</Link>
        </div>
    );
}