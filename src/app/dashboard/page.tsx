import Link from "next/link";

//src/app/dashboard/page.tsx
export default function Dashboard() {
    return (
        <div>
            <h1>Selamat datang di Portal Sekolah</h1>
            <Link href='/teachers'>Daftar Guru</Link>
            <br />
            <Link href='/library'>Perpustakaan</Link>
        </div>
    );
}