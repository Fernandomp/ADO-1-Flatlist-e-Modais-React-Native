import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image,Modal } from 'react-native';
import Constants from 'expo-constants';


const ShowDetalhes = ({display,toogleModal,mensagem,mensagem2,mensagem3}) => (   
    <Modal
          animationType="fade"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text>{mensagem}</Text>
                  <Text>{mensagem2}</Text>
                  <Text>{mensagem3}</Text>
                  
                </Pressable>
          </View>
        </View>
   </Modal>
        
 )

const Cidade = ({populacao,area,cidade}) => {

    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={cidade} mensagem2={populacao} mensagem3={area}  />
  
      
      <Pressable onPress={mudaModal}>
       
        <Text style={styles.paragraph}>{cidade}</Text>
      </Pressable>
    </View>
    )
}


const DATA = [
          {
            "id":1,
            "cidade":"São Paulo",
            "populacao":"12,33 milhões de habitantes",
            "area":"1,521 km²",
          },
          {
            "id":2,
            "cidade":"Santos",
            "populacao":"3,0 milhões de habitantes",
            "area":"280,674 km²",
          },
          {
            "id":3,
            "cidade":"Ubatuba",
            "populacao":"912 mil habitantes",
            "area":"712,000 km²",
          },
          {
            "id":4,
            "cidade":"Campinas",
            "populacao":"1,233 milhões de habitantes",
            "area":"801,000 km²",
          },
          {
            "id":5,
            "cidade":"São Bernardo Do Campo",
            "populacao":" 844 mil habitantes",
            "area":"409,500 km²",
          },
          {
            "id":6,
            "cidade":"Diadema",
            "populacao":"427 mil habitantes",
            "area":"30,732 km²",
          },
          {
            "id":7,
            "cidade":"Guarulhos",
            "populacao":"1,392 milhões de habitantes",
            "area":"319,2 km²",
          },
          {
            "id":8,
            "cidade":"Suzano",
            "populacao":"301 mil habitantes",
            "area":"206,236 km²",
          },
          {
            "id":9,
            "cidade":"São José Do Rio Preto",
            "populacao":"465 mil habitantes",
            "area":"431,944 km²",
          },
            ];

export default function App() {

  //função que renderiza cada item do FlatList
  function meuItem({item}){
       
    return(
      <Cidade cidade={item.cidade} 
              populacao={item.populacao}
              area={item.area}
      />
    )
  }
  return (
    <View style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />
    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#0846FF',
    padding: 8,
  },
  paragraph: {
    margin: 12,
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFFC42',
    borderRadius:100
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    fontSize: 20,
    backgroundColor: "#D65106",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
