//src/app/teachers/[teacherId]/courses/page.tsx
import Link from 'next/link';

export default function CourseList() {
    return (
        <div>
            <h1>Ketikkan mata pelajaran</h1>
            <h2><Link href='/courses/matematika'>Matematika</Link></h2>
            <h2><Link href='/courses/bahasa-indonesia'>Bahasa Indonesia</Link></h2>
            <h2><Link href='/courses/ipa'>IPA</Link></h2>
            <Link href='/teachers'>Kembali ke daftar guru</Link><br/>
        </div>
    );
}