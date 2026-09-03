//src/app/teachers/[teacherId]/courses/[courseId]/page.tsx
import Link from 'next/link';
type Props = {
    params: {
        courseId: string;
    };
};

export default function CourseDetail({ params }: Props) {
    return (
        <div>
            <h2>Matapelajaran: {params.courseId}</h2><br/>
            <Link href={`/courses/${params.courseId}/materials`}>Lihat pilihan bab</Link><br/>
            <Link href='/courses'>Kembali ke daftar mata pelajaran</Link><br/>
            <Link href='/teachers'>Kembali ke daftar guru</Link>
        </div>
    );
}