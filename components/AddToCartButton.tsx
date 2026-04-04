"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { getToken } from "@/utils/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function AddToCartButton({ productId }: any) {
    const dispatch = useDispatch();
    const router = useRouter();
    const handleAddToCart = () => {
    const token = getToken();
        if (!token) {
            toast.error("Please login first");
            router.push("/auth/login");
            return;
        }
        dispatch(
            addToCart({
                itemId: productId,
                size: "M",
                token,
            }) as any
        );
        toast.success("Added to cart");
    };

    return (
        <button onClick={handleAddToCart} className="tf-btn btn-onsurface">
            Add to cart
        </button>
    );
}