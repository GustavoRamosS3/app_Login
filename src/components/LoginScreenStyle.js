import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F9',
    paddingHorizontal: 20,
  },
  welcomeContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    color: '#2C3E50',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    letterSpacing: 1,
  },
  input: {
    height: 55,
    borderColor: '#BDC3C7',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#2C3E50',
    fontSize: 16,
    backgroundColor: '#ECF0F1',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: '90%',
  },
  button: {
    backgroundColor: '#3498DB',
    paddingVertical: 18,
    borderRadius: 10,
    width: '90%',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  welcomeText: {
    fontSize: 28,
    color: '#2C3E50',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 5,
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#3498DB',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: '#E74C3C',
    marginTop: 15,
    textAlign: 'center',
    fontSize: 14,
  },
});

export default styles;