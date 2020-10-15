import React, { useEffect, useReducer } from 'react'
import { Alert, SafeAreaView, Text, View } from 'react-native'
import KBSimpleNativeForm, { Counter, formCreator } from 'simple-native-form'

const reducer = (state:any, action:any) => {
    return {...state, ...action}
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {});
  
  useEffect(() => {
    console.log(KBSimpleNativeForm)
  })
  const action = () =>{
    console.log(state);
    Alert.alert(state.name);
  }
  let form = formCreator({
    inputs:[
      {label: "name", value: state.name, setter: (val) => dispatch({name:val })},
      {label: "age", value: state.age, setter: (val) => dispatch({age:val })}

    ],
    actions: [
      {action: action, label: "Alert Name"}
    ]
  })
  return <SafeAreaView style={{}}>
    <Counter />
    <Text>HELLO WORLD</Text>
    {form}
    
  </SafeAreaView>
}

export default App
