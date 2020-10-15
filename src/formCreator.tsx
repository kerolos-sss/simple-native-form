import * as React from 'react';
import { Button, Text, TextInput, View } from 'react-native'



export const formCreator = (props: {
    inputs: { value: string, setter: (val: string) => void, label: string }[],
    actions: { action: () => void, label: string }[]
}) => {
    return <View>
        {props.inputs.map((input, index) => {
            return <View key={"inputs" + index}>
                <Text  >{input.label}</Text>
                <TextInput value={input.value} onChangeText={input.setter} />
            </View>
        })}
        {props.actions.map((action, index) => {
            return <View key={"buttons-" + index}>
                <Button 
                    title={action.label} onPress={action.action}
                />
            </View>
        })}
    </View>
}