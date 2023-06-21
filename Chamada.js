import React from 'react';
import { View, FlatList, Text, ListItem } from 'react-native';


const url = "http://10.200.23.27:5002/Api/Producao/Apontamento"

let payload = []

payload = {
  Company: "1",
  Nr_ini: "1",
  Nr_fin: "9999999",
  Dt_ini: "2023-06-01T03:00:00.000",
  Dt_fin: "2023-06-14T03:00:00.000"}


export default class Chamada extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { dataSource: [] };
  }
async componentDidMount() {
  try {
    const response = await fetch(url, {
         method: 'POST',
         body: JSON.stringify(payload),
         headers: {
          'Content-type': 'application/json'},})
    const responseJson = await response.json();
    this.setState({dataSource : responseJson});
    return responseJson;
}
catch (error) {
    console.error("error is ",error);
    return { err: error };
}
    }
   
    renderItem = () => (
      this.state.dataSource.map(data => <View><Text>{data.nr_serie}</Text> 
      <Text>{data.cd_empresa}</Text> 
      <Text>{data.nr_oproducao}</Text> 
      <Text>{data.descricao}</Text> 
      </View>
      )
    )
    
  render() {
    console.log('TESTE')
    return (

      this.renderItem()
  
    )
  }  }
