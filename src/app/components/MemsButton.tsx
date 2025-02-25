import { Text, Pressable, PressableProps } from 'react-native';
import React from 'react';

interface MemsButtonProps extends PressableProps {
    text: string;
    buttonStyle: 'selected' | 'unselected' | 'primary';
}

export const MemsButton: React.FC<MemsButtonProps> = ({
    text,
    buttonStyle,
    ...props
}) => {
    let bgColor = 'bg-mems-blue-100';
    if (buttonStyle === 'selected') {
        bgColor = 'bg-mems-blue-500';
    } else if (buttonStyle === 'primary') {
        bgColor = 'bg-mems-yellow';
    }

    return (
        <Pressable
            {...props}
            className={`flex-1 justify-center items-center rounded-full p-3 ${bgColor}`}
        >
            <Text className="font-mems-bold text-mems-white text-xl ">
                {text}
            </Text>
        </Pressable>
    );
};
