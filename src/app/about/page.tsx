import Link from "next/link";

//src/app/about/page.tsx
export default function About() {
    return (
        <div>
            <h1>Welcome to About</h1>
            <Link href='/'>Home</Link>
            <br />
            <Link href='/blogs'>Blogs</Link>
            <br />
            <Link href='/products'>Products</Link>
            <br />
            <Link href='/profile'>Profile</Link>
        </div>
    );
}