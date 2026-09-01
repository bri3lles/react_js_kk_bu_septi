//src/app/products/[productId]/reviews/[reviewId]/page.tsx
type Props = {
    params: {
        productId: string;
        reviewId: string;
    };
};

export default function ProductReview({ params }: Props) {
    return (
        <div>
            <h1>Reviews for Product {params.productId}</h1>
            <h2>Review {params.reviewId}</h2>
        </div>
    );
}