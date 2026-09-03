//src/app/teachers/[teacherId]/courses/[courseId]/materials/page.tsx
import Link from 'next/link';
type Props = {
    params: {
        teacherId: string;
        courseId: string;
    };
};

export default function MaterialsList({ params }: Props) {
    return (
        <div>
            <h2>Matapelajaran: {params.courseId}</h2>
            <h2>Pilihan Bab</h2>
            <ul>
                <li><Link href={`/courses/${params.courseId}/materials/1`}>Bab 1</Link></li>
                <li><Link href={`/courses/${params.courseId}/materials/2`}>Bab 2</Link></li>
                <li><Link href={`/courses/${params.courseId}/materials/3`}>Bab 3</Link></li>
            </ul>
        </div>
    );
}