import { Platform } from "react-native";

export const isAndroid = Platform.OS === 'android';
export const PlatformVersion = Platform.Version;
export const isIOs = Platform.OS === 'ios';

