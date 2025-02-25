import { StatusBar } from 'expo-status-bar';
import '../styles/global.css';
import { Slot } from 'expo-router';
import {
    useFonts,
    AtkinsonHyperlegible_700Bold,
} from '@expo-google-fonts/atkinson-hyperlegible';

import { Loading } from './components/loading';

export default function Layout() {
    const [fontsLoaded] = useFonts({
        AtkinsonHyperlegible_700Bold,
    });

    if (!fontsLoaded) {
        return <Loading />;
    }

    return (
        <>
            <StatusBar style="light" />
            <Slot />
        </>
    );
}
