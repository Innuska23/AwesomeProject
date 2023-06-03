import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";

export const useKeyboard = () => {
    const [heightKeyboard, setHeightKeyboard] = useState(0);

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', (e) => {
            setHeightKeyboard(e.endCoordinates.height);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setHeightKeyboard(0);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return {
        heightKeyboard
    }
}