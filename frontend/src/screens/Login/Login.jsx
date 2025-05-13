import {
    SafeAreaView,
    Text,
    View,
    Keyboard,
    Pressable,
    TouchableWithoutFeedback,
    ScrollView,
    Alert,
    TouchableOpacity,
} from 'react-native';
import Loginimg from '../../assets/Login/loginimg.svg';
import styles from './LoginStyle';
import { TextInput } from 'react-native-paper';
import React,{ useState } from 'react';
import Separator from '../../assets/Login/separator.svg';
import Googleicon from '../../assets/Login/google.svg';
import Tickicon from '../../assets/Login/tick.svg';
import Tickbox from '../../assets/Login/tickbox.svg';

const Login = ({navigation}) => {
       const [checked, setChecked] = useState(true); 
       const handleLogin = () => {
    console.log('Login button pressed');
   
};

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                    <View>
                        <Text style={styles.hi}>Hi !</Text>
                        <Text style={styles.sectoptext}>Login to continue</Text>
                        <Loginimg height={267} width={290} style={styles.logimg} />

                        <View style={styles.inputcontainer}>
                            <TextInput
                                style={styles.input}
                                label="Email"
                                mode="outlined"
                                activeOutlineColor="#c884fc"
                            />
                            <TextInput
                                style={styles.input}
                                label="Password"
                                mode="outlined"
                                activeOutlineColor="#c884fc"
                                secureTextEntry
                            />
                        </View>

                        <Pressable style={styles.checkboxContainer} onPress={() => setChecked(!checked)}>
                            {checked ? <Tickbox height={18} width={18} /> : <Tickicon height={18} width={18} />}
                            <Text style={styles.checkboxText}>I agree with the Privacy Policy</Text>
                        </Pressable>

                        <TouchableOpacity style={styles.pressablebtn}  onPress={() => navigation.navigate('TeacherDashboard')}>
                            <View style={styles.btn}>
                                <Text style={styles.btntext}>LOGIN</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.separator}>
                            <Separator />
                        </View>
                        <Text style={styles.googletext}>Login with Google</Text>

                        <Pressable style={styles.googleauthcontainer}>
                            <Googleicon height={18} width={18} style={styles.googleicon} />
                            <Text style={styles.googleauthtext}>Continue with Google</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default Login;