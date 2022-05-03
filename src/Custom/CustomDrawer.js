import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {Drawer, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = props => {
  const removeStdNum = async () => {
    //임시 적으로 async 함수를 담아두기 위한 변수
    //여기서만 써서 굳이 따로 떼주지 않음.
    try {
      await AsyncStorage.removeItem('stdNum');
    } catch (e) {
      // remove error
    }

    console.log('Done.');
  };
  if (props.isLogined) {
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView
          {...props}
          /* contentContainerStyle={{backgroundColor: 'purple'}} */
        >
          <View
            style={{
              height: '25%',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{marginTop: '5%', marginLeft: '5%'}}>
                <Avatar.Image
                  source={require('../public/annonymous.png')}></Avatar.Image>
              </View>
              <View style={{alignItems: 'center', marginLeft: '5%'}}>
                <Text>신민규</Text>
                <Text>1801149</Text>
              </View>
            </View>
          </View>
          {
            //여기까지 profiles
          }
          <DrawerItemList {...props} />
          <View style={{height: '80%', marginLeft: '10%', marginTop: '10%'}}>
            <Text>예약</Text>
            <DrawerItem
              onPress={() => {
                setTimeout(() => {
                  props.navigation.navigate('BusRequest');
                }, 100);
              }}
              label={() => (
                <Text style={{color: 'black'}}>버스예약</Text>
              )}></DrawerItem>
            <DrawerItem
              onPress={() => {
                setTimeout(() => {
                  props.navigation.navigate('OutRequest');
                }, 100);
              }}
              label={() => (
                <Text style={{color: 'black'}}>외박예약</Text>
              )}></DrawerItem>
            <DrawerItem
              onPress={() => {
                setTimeout(() => {
                  props.navigation.navigate('GymRequest');
                }, 100);
              }}
              label={() => (
                <Text style={{color: 'black'}}>헬스예약</Text>
              )}></DrawerItem>
            <DrawerItem
              onPress={() => {
                setTimeout(() => {
                  props.navigation.navigate('ASRequest');
                });
              }}
              label={() => (
                <Text style={{color: 'black'}}>AS예약</Text>
              )}></DrawerItem>
          </View>
        </DrawerContentScrollView>
        {
          //여기까지 보이는 Menu
        }
        <Drawer.Section>
          <DrawerItem
            icon={() => <Icon name="log-out" size={30}></Icon>}
            label="SIGN OUT"
            onPress={() => {
              removeStdNum();
              props.setStdNum('');
              props.navigation.reset({index: 0, routes: [{name: 'Home'}]});
            }}></DrawerItem>
        </Drawer.Section>
        {
          //Logout을 위해 App의 state인 stdNum과 AsyncStorage에 담겨있던 'stdNum'키 제거
        }
      </View>
    );
  } else if (!props.isLogined) {
    //Login된 상태가 아닐 때
    const loginWarning = () => {
      //시간나면 alert가 아니라 modal로도 표현해보고 싶음.
      alert('로그인 후 이용해주세요.');
    };
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView
          {...props}
          /* contentContainerStyle={{backgroundColor: 'purple'}} */
        >
          <TouchableOpacity
            onPress={() => {
              setTimeout(() => {
                props.navigation.navigate('SignIn');
              }, 100);
            }}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                paddingBottom: '5%',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{marginTop: '5%', marginLeft: '5%'}}>
                  <Avatar.Image
                    source={require('../public/annonymous.png')}></Avatar.Image>
                </View>
                <View style={{alignItems: 'center', marginLeft: '5%'}}>
                  <Text style={{color: 'black', fontWeight: '400'}}>
                    Login 해주세요...
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {
            //터치 할 시 Login창으로 이동
          }
          <DrawerItemList {...props} />
          <View style={{height: '80%', marginLeft: '10%', marginTop: '10%'}}>
            <Text>예약</Text>
            <DrawerItem
              onPress={() => {
                loginWarning();
              }}
              label={() => (
                <Text style={{color: 'black'}}>버스예약</Text>
              )}></DrawerItem>
            <DrawerItem
              onPress={() => {
                loginWarning();
              }}
              label={() => (
                <Text style={{color: 'black'}}>외박예약</Text>
              )}></DrawerItem>
            <DrawerItem
              onPress={() => {
                loginWarning();
              }}
              label={() => (
                <Text style={{color: 'black'}}>헬스예약</Text>
              )}></DrawerItem>
            <DrawerItem
              onPress={() => {
                loginWarning();
              }}
              label={() => (
                <Text style={{color: 'black'}}>AS예약</Text>
              )}></DrawerItem>
          </View>
        </DrawerContentScrollView>
      </View>
    );
  }
};
export default CustomDrawer;
