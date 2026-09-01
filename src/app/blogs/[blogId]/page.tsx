//src/app/blogs/[blogId]/page.tsx
type Props = {
    params: {
        blogId: string;
    };
};

export default function BlogDetail({ params }: Props) {
    return (
        <h1>Details about blog {params.blogId}</h1>
    );
}
