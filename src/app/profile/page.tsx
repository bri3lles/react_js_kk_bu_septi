//src/app/profile/page.tsx
import Link from 'next/link';

export default function Profile() {
    return (
        <div>
            <h1>Welcome to Profile</h1>
            <h2>Profile Details</h2>
            <p>Name: Neng Sarah Abriella Hariyanto</p>
            <p>Kelas: XI RPL C</p>
            <p>No. Absen: 27</p>
            <Link href='/'>Home</Link>
            <br />
            <Link href='/about'>About</Link>
            <br />
            <Link href='/blogs'>Blogs</Link>
            <br />
            <Link href='/products'>Products</Link>
        </div>
    );
}