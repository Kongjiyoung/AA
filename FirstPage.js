import React, { Component } from 'react';
import { AppRegistry, View, Text, Button,TouchableOpacity,Alert} from 'react-native';
import Swiper from 'react-native-swiper';
import CalendarPicker from 'react-native-calendar-picker';
import styles from './styles';


type State = {
  date?: Moment,
};

class App extends Component {

  State={
    isLoaded : false,
    error : null
  }

  _onPressButton() {
      Alert.alert('날짜 선택을 해주세요!')
    }

  constructor(props: Object) {
    super(props);
    this.onDateChange = this.onDateChange.bind(this);
    this.state = { currentTime: null, currentDay: null , currentDate: null,
     selectedStartDate: null,
      selectedEndDate: null,}
    this.daysArray = ['일', '월', '화', '수', '목', '금', '토'];
  }
  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,

      });
    }
  }


  componentWillMount() {
    this.getCurrentTime();
    this.getCurrentDate();
  }
  getCurrentDate = () => {
    let year = new Date().getFullYear();
    let date = new Date().getDate();
    let month = new Date().getMonth()+1;

    this.setState({currentDate: year+'.'+month+'.'+date});
  }

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = 'PM';

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour == 0) {
      hour = 12;
    }

    if (new Date().getHours() < 12) {
      am_pm = 'AM';
    }

    this.setState({ currentTime: am_pm + hour + ':' + minutes + ':' + seconds + ' ' });

    this.daysArray.map((item, key) => {
      if (key == new Date().getDay()) {
        this.setState({ currentDay: item.toUpperCase() });
      }
    })
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    clearInterval(this.date);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
    navigator.geolocation.getCurrentPosition(position =>
    {this.setState({isLoaded : true});},
    error =>{
      this.setState({error : error})
      });
  }

  render() {
    const {isLoaded,error}=this.state;
    const {navigation} = this.props;
    const { selectedStartDate, selectedEndDate } = this.state;
    const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate? selectedEndDate.toString() : '';

    return (
      <Swiper style={styles.wrapper}>
        <View style={styles.container1}>
    {isLoaded?
        <View style={styles.pinkbaby}>
        <View style={styles.elem}>
          <View style={styles.whitebaby}>
            <Text style={styles.timeText}>{this.state.currentDate}.{this.state.currentDay}</Text>
          </View>
          <View style={styles.whitebaby}>
             <Text style={styles.timeText}>{this.state.currentTime}</Text>
           </View>
          </View>
        </View> :
        <View style={styles.loadingbackground}>
          <Text style={styles.loadingText}>
            Getting your information...
          </Text>
          {error? <Text style={styles.errorText}>{error}</Text> : null }
        </View>
    }
        </View>
        <View style={styles.container}>
    <CalendarPicker
        startFromMonday={true}
        allowRangeSelection={true}
        todayBackgroundColor="green"
        selectedDayColor="#7300e6"
        selectedDayTextColor="#FFFFFF"
        onDateChange={this.onDateChange}
      />
      {endDate?
        <TouchableOpacity onPress={()=> {navigation.navigate("Main")}}>
         <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              title="done"
              color="#841584"
            />
          </View>
        </TouchableOpacity> : <TouchableOpacity onPress={this._onPressButton}>
         <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              title="done"
              color="#841584"
            />
          </View>
        </TouchableOpacity>
      }
      </View>
      </Swiper>
    );
  }
}

  export default App;
