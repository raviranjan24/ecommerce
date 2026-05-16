"use client";
import { useAppDispatch } from "@/redux/hooks";
import {
    addToCart,
    fetchCart,
} from "@/redux/slices/cartSlice";

import { getToken } from "@/utils/auth";

import { toast } from "react-toastify";

import { useRouter } from "next/navigation";

export default function AddToCartButton({
    productId,
    quantity,
    selectedSize,
    selectedColor,
    selectedImage,
}: any) {

    const dispatch = useAppDispatch();

    const router = useRouter();

    const handleAddToCart = async () => {

        const token = getToken();

        if (!token) {

            toast.error("Please login first");

            router.push("/auth/login");

            return;
        }

        try {

            await dispatch(
                addToCart({
                    itemId: productId,

                    quantity: quantity,

                    size: selectedSize,

                    color: selectedColor?.bg,

                    image: selectedImage,

                    token,
                })
            );

            await dispatch(fetchCart(token));

            toast.success("Added to cart");

        } catch (error) {

            console.log(error);

            toast.error("Something went wrong");
        }
    };

    return (
        <button
            onClick={handleAddToCart}
            className="tf-btn btn-onsurface"
        >
            Add to cart
        </button>
    );
}

// "use client";
// import { useAppDispatch } from "@/redux/hooks";
// import { addToCart, fetchCart } from "@/redux/slices/cartSlice";
// import { getToken } from "@/utils/auth";
// import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";

// export default function AddToCartButton({ productId }: any) {
//     const dispatch = useAppDispatch();
//     const router = useRouter();

//     const handleAddToCart = async () => {
//         const token = getToken();

//         if (!token) {
//             toast.error("Please login first");
//             router.push("/auth/login");
//             return;
//         }

//         await dispatch(
//             addToCart({
//                 itemId: productId,
//                 size: "M",
//                 token,
//             })
//         );

//         dispatch(fetchCart(token));

//         toast.success("Added to cart");
//     };

//     return (
//         <button onClick={handleAddToCart} className="tf-btn btn-onsurface">
//             Add to cart
//         </button>
//     );
// }