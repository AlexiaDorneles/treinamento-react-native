import React from 'react'
import { Text, TextInput, View } from 'react-native'
import STYLES from './input.style.js'

export const Input = (props) => (
  <View>
    <Text style={STYLES.label}> {props.label} </Text>
    <TextInput
      style={STYLES.input}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      onChangeText={text => props.onChange(props.name, text)}
    />
    {/* <label className="input__label">{props.label} </label>
        <input type="text" {...props} className="input" /> */}
  </View>
)
