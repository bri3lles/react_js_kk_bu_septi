//src/app/teachers/[teacherId]/page.tsx
import Link from 'next/link';
type Props = {
    params: {
        teacherId: string;
    };
};

export default function TeacherDetail({ params }: Props) {
    return (
        <div>
            <h1>Melihat profil Akademik untuk Guru: {params.teacherId}</h1><br />
            <Link href='/courses'>Pilih Daftar Pelajaran</Link>
        </div>
    );
}