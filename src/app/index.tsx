import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { MemsButton } from './components/MemsButton';

export default function Home() {
    const [theme, setTheme] = useState<'numbers' | 'icons'>('numbers');
    const [players, setPlayers] = useState<number>(1);
    const [gridSize, setGridSize] = useState<number>(4);

    return (
        <View className="bg-mems-blue-800 mems-bold flex-1 justify-center items-center gap-y-10 p-8">
            <Text className="font-mems-bold text-mems-white text-5xl">
                mems
            </Text>
            <View className="bg-mems-white rounded-lg w-full p-6 gap-y-3">
                {/* Select Theme */}
                <View className="gap-y-4">
                    <Text className="font-mems-bold text-mems-blue-200 text-lg">
                        Select Theme
                    </Text>
                    <View className="flex flex-row w-full relative gap-x-3">
                        <MemsButton
                            text="Numbers"
                            buttonStyle={
                                theme === 'numbers' ? 'selected' : 'unselected'
                            }
                            onPress={() => setTheme('numbers')}
                        />
                        <MemsButton
                            text="Icons"
                            buttonStyle={
                                theme === 'icons' ? 'selected' : 'unselected'
                            }
                            onPress={() => setTheme('icons')}
                        />
                    </View>
                </View>
                <View className="gap-y-4">
                    <Text className="font-mems-bold text-mems-blue-200 text-lg">
                        Number of Players
                    </Text>
                    <View className="flex flex-row w-full relative gap-x-3">
                        <MemsButton
                            text="1"
                            buttonStyle={
                                players === 1 ? 'selected' : 'unselected'
                            }
                            onPress={() => setPlayers(1)}
                        />
                        <MemsButton
                            text="2"
                            buttonStyle={
                                players === 2 ? 'selected' : 'unselected'
                            }
                            onPress={() => setPlayers(2)}
                        />
                        <MemsButton
                            text="3"
                            buttonStyle={
                                players === 3 ? 'selected' : 'unselected'
                            }
                            onPress={() => setPlayers(3)}
                        />
                        <MemsButton
                            text="4"
                            buttonStyle={
                                players === 4 ? 'selected' : 'unselected'
                            }
                            onPress={() => setPlayers(4)}
                        />
                    </View>
                </View>
                <View className="gap-y-4">
                    <Text className="font-mems-bold text-mems-blue-200 text-lg">
                        Grid Size
                    </Text>
                    <View className="flex flex-row w-full relative gap-x-3">
                        <MemsButton
                            text="4x4"
                            buttonStyle={
                                gridSize === 4 ? 'selected' : 'unselected'
                            }
                            onPress={() => setGridSize(4)}
                        />
                        <MemsButton
                            text="6x6"
                            buttonStyle={
                                gridSize === 6 ? 'selected' : 'unselected'
                            }
                            onPress={() => setGridSize(6)}
                        />
                    </View>
                </View>
                <View className="flex flex-row w-full relative gap-x-3 mt-6">
                    <MemsButton
                        text="Start Game"
                        buttonStyle="primary"
                        onPress={() => alert('Go to Game Screen')}
                    />
                </View>
            </View>
        </View>
    );
}
