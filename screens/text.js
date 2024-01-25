
import { Typography } from '@mui/material';
import react from 'react'
import {View,Text} from 'react-native';
import { Button } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux';

const text=()=>{const count = useSelector(state => state.count);
    const dispatch = useDispatch();
return(<View>
    <Text>Counter: {count}</Text>
    <Button
      title="Increment"
      onPress={() => dispatch({ type: 'INCREMENT' })}
    />
    <Button
      title="Decrement"
      onPress={() => dispatch({ type: 'DECREMENT' })}
    />
</View>
    );
} 
export default text;