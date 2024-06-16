import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: 20,
        backgroundColor: '#fff', // Ajuste a cor de fundo conforme necessário
      },
      text: {
        fontWeight: 'bold', // Deixa o texto em negrito
        marginBottom: 5, // Espaço entre o texto e o input
        marginLeft: 3,
        textAlign: 'left',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      input: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 10,
       
      },
      inputFocused: {
        width: '100%',
        borderWidth: 2, // Aumenta a largura da borda quando focado
        borderRadius: 8,
        borderColor: '#6441a5', // Muda a cor da borda para roxo quando focado
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#e5e5e5',
      },
      inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      eyeIcon: {
        position: 'absolute',
        right: 10,
        left: '90%',
        bottom: 20
    
      },
      button: {
        width: '100%',
        backgroundColor: '#6441a5', // Cor do botão da Twitch
        padding: 15,
        alignItems: 'center',
        borderRadius: 5, // Ajuste o raio da borda conforme necessário
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      helpText: {
        color: '#6441a5',
        marginBottom: 20,
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      note: {
        fontSize: 12,
        color: 'gray',
        marginBottom: 10,
      },
      terms: {
        fontSize: 12,
        color: 'gray',
        marginTop: 10,
      },
      icon: {
        width: 45,
        height: 45, 
        resizeMode: 'contain',
      }, 
      titleNav: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingLeft: 5 
      },
      navbar: {
        flexDirection: 'row', 
        alignItems: 'flex-end', 
        marginTop: 50, 
        justifyContent: 'center'
      },
      termText: {
        color: '#6441a5',
        fontSize: 12,
      }
}) 