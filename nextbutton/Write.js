import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, ScrollView, Alert, AsyncStorage } from 'react-native';
import { ImagePicker, Permissions } from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    image: null,
    permissionCameraRoll: null,
  }
  }
  componentDidMount() {
    this.registerForCameraAsync();
  }
 render() {
    const {navigation} = this.props;
    const { image, permissionCameraRoll } = this.state;
    return (

       <View style={styles.outside}>
        <View style={styles.innerside}>
          <ScrollView>
            <View style={styles.camera}>
            {image?
              <TouchableOpacity onPress={this.handlePickImageAsync}>
                {
                  image && <Image source={{uri: image}} style={{ width: 350, height: 200 }} />
                }
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={this.handlePickImageAsync}>
                    <Image
                  source={require('./assets/cemera.JPG')}
                />
              </TouchableOpacity>
            }
            </View>
              <TextInput
              style={{padding : 30, textAlign: 'center', fontSize: 30}}
              placeholder="제목"
              onChangeText={(title) => this.setState({title})}
              value={this.state.title}
              maxLength = {20}
            />

              <TextInput
              style={{padding : 30, fontSize: 15}}
              multiline = {true}
              placeholder="내용"
            />
            <View style={styles.alternativeLayoutButtonContainer}>
              <TouchableOpacity >
                <Button
                onPress={this.setValueLocally, () => {Alert.alert('저장되었습니다.');}}
                  title="저장"
                  color="pink"
                />
              </TouchableOpacity>
              <TouchableOpacity >
                <Button
                onPress={()=>{navigation.navigate("Diary")}}
                  title="메뉴"
                  color="pink"
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

registerForCameraAsync = async () => {
    // permission camera roll
    const { status: existingStatusCameraRoll } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    let finalStatusCameraRoll = existingStatusCameraRoll;

    // permission camera
    const { status: existingStatusCamera } = await Permissions.getAsync(Permissions.CAMERA);
    let finalStatusCamera = existingStatusCamera;

    if (existingStatusCamera !== 'granted') {
      this.setState({permissionCamera: 'Missing Camera Permission'})

      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      finalStatusCamera = status;
    }

    if (existingStatusCameraRoll !== 'granted') {
      this.setState({permissionCameraRoll: 'Missing Camera Roll Permission'})

      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      finalStatusCameraRoll = status;
    }

    if (finalStatusCameraRoll !== 'granted' || finalStatusCamera !== 'granted') {
      return;
    }
  }

  handlePickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log('CAMERA_ROLL ', result);

    if (!result.cancelled) {
      this.setState({image: result.uri});
    }
  }
}

const styles = StyleSheet.create({
  camera: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop : '8%'

  },
   outside : {

    height:'100%',
    width:'100%',
    backgroundColor: 'skyblue'
  },
  innerside : {
    marginTop : '2.3%',
    marginLeft : '2%',
    height:'97%',
    width:'96%',
    backgroundColor: 'white',
    borderRadius:10
  },
  alternativeLayoutButtonContainer: {
    margin: 50,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
});
