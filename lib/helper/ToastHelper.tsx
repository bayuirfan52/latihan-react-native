import { ToastAndroid } from "react-native"

function showToast(message: string) {
    ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        25,
        50
    );
}

export default showToast;