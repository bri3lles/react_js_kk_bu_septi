//src/app/library/page.tsx

import Link from "next/link";

export default function Library() {
    return (
        <div>
            <h1>Library</h1>
            <div>
                <li>Fiksi</li>
                <li>Sains</li>
                <li>Sejarah</li>
            </div><br/>
            <Link href='/dashboard'>Kembali ke Beranda</Link>
        </div>
    );
}