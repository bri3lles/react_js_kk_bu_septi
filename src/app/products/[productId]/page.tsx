//src/app/products/[productId]/page.tsx
type Props = {
    params: {
        productId: string;
    };
};

export default function ProductDetail({ params }: Props) {
    return (
        <h1>Details about product {params.productId}</h1>
    );
}
