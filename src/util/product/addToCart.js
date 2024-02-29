import { auth, database } from "@/firebase";
import { push, ref } from "firebase/database";
import Swal from "sweetalert2";
import fetchUser from "../user/fetchUser";

const addToCart = ({ user, item }) => async () => {
    if (user) {
        addItemToCart({ user, item })
    }
    else {
        addItemToCart({ user: await fetchUser({ user: auth.currentUser }), item })
    }
};

const addItemToCart = async ({ user, item }) => {
    if (!isUserRegistered(user)) {
        showToast({ icon: "error", title: "You are not Registerd" });
        return;
    }

    if (!isProductAvailable({ user, item })) {
        showToast({ icon: "info", title: "Sorry, this product is not available in your location" });
        return;
    }

    if (isDuplicate(user, item)) {
        showToast({ icon: "warning", title: "Product is already in the cart" });
    } else {
        const userCartRef = ref(database, `users/${user.uid}/cart`);
        const currentQuantity = item.userType === "farmer" ? 100 : 1;
        const newCartItemRef = await push(userCartRef, {
            itemId: item.id,
            quantity: currentQuantity
        })
        showToast({ icon: "success", title: "Product added to cart" });
    }
}
const isDuplicate = (user, item) => {
    const itemId = item.id;
    const userCartData = user.cart || [];
    const rawCartData = Object.values(userCartData).map((cartItem) => ({ id: cartItem.id, ...cartItem }));
    return rawCartData.some((cartItem) => cartItem.itemId === itemId);
};
const redirectToAuth = () => {
    location.replace("/auth");
};

const isUserRegistered = (user) => {
    if (!user?.name) {
        redirectToAuth();
        return false;
    }
    return true;
};

const isProductAvailable = ({ user, item }) => {
    const isCorporate = item.userType === "corporate";
    return isCorporate || user.state === item.state;
};

const showToast = ({ icon = "", title = "" }) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-left",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });

    Toast.fire({
        icon: icon,
        title: title,
    });
};
export default addToCart;
