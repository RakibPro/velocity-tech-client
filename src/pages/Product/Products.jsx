import { useQuery } from '@tanstack/react-query';

const Products = () => {
    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('');
                const data = await res.json();
                return data;
            } catch (error) {}
        },
    });
    return <div></div>;
};

export default Products;
