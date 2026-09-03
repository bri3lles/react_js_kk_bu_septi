import Link from "next/link";

//src/app/teachers/[teacherId]/courses/[courseId]/materials/[materialId]/page.tsx
type Props = {
    params: {
        teacherId: string;
        courseId: string;
        materialId: string;
    };
};

export default function MaterialDetail({ params }: Props) {
    return (
        <div>
            <h1>Melihat materi bab {params.materialId} untuk mata pelajaran {params.courseId}</h1><br/>
            <Link href={`/courses/${params.courseId}/materials`}>Kembali ke daftar bab</Link><br/>
            <Link href='/courses'>Kembali ke daftar mata pelajaran</Link><br/>
            <Link href='/teachers'>Kembali ke daftar guru</Link>
        </div>
    );
}