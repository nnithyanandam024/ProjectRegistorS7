import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loginContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  collegeImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  symbol: {
    fontSize: 18,
    color: '#666',
    marginRight: 10,
  },
  lockIcon: {
    marginRight: 10,
  },
  lockImage: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  eyeIcon: {
    fontSize: 20,
    padding: 5,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4285F4',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordLink: {
    alignSelf: 'flex-end',
    marginTop: 15,
  },
  forgotPasswordText: {
    color: '#4285F4',
    fontSize: 14,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },
  signupText: {
    color: '#666',
    fontSize: 14,
  },
  signupLink: {
    color: '#4285F4',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;