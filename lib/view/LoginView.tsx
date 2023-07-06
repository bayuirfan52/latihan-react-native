import { useState } from "react";
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity, Button, Pressable } from "react-native";
import showToast from "../helper/ToastHelper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { AppRoute } from "../route/AppRoute";

function LoginView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<NativeStackNavigationProp<AppRoute>>();
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
                }}
                style={{ width: 200, height: 200, marginBottom: 20, }}
            />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    onChangeText={(password) => setPassword(password)}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={styles.forgotButton}>
                <Text>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress(email, password, () => { navigation.navigate('home'); })} style={styles.Button}>
                <Text style={styles.TextButton}>Masuk</Text>
            </TouchableOpacity>
        </View>
    );
}

function onPress(email: string, password: string, callback: () => void) {
    if (email == '') {
        showToast('Email tidak boleh kosong');
        return;
    }

    if (password == '') {
        showToast('password tidak boleh kosong');
        return;
    }

    callback();
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputView: {
        backgroundColor: '#f1f2f6',
        borderRadius: 8,
        width: '80%',
        height: 45,
        marginBottom: 20,
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
    },
    forgotButton: {
        alignSelf: 'flex-end',
        marginEnd: 40,
        marginBottom: 30,
    },
    Button: {
        width: '80%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 8,
        elevation: 3,
        backgroundColor: '#ff6348'
    },
    TextButton: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});

export default LoginView;