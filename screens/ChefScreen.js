import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Card, ListItem } from 'react-native-elements';

import { MonoText } from '../components/StyledText';

export default class ChefScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    };
    this.filterItems = this.filterItems.bind(this);
  }

  filterItems = () => {
    const regex = new RegExp(this.state.query, 'gi');
    let results = []
    this.props.results.forEach(item => {
      if(item.chef.name.match(regex)) {
        results.push(item)
      }
      item.chef.specialties.forEach(food => {
        if(food.name.match(regex)) {
          results.push(item)
        }
      })
      
    })
    return results.filter((item, i) => results.indexOf(item) === i) //remove duplicate items
  }
  


  render() {
    const { query } = this.state;
    console.log('query', query)
    return (
      <ScrollView>
        <Searchbar
          placeholder="Search for food or a chef..."
          onChangeText={query => { this.setState({ query: query }); }}
          value={query}
        />
        {this.filterItems().map(result => {
          return (
            <Card 
              title={result.chef.name}
              >
            {/*react-native-elements Card*/}
            {result.chef.specialties.map((food, i) => {
                  return (
                    <>
                      <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "flex-end" }}>
                        <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: "hidden" }}>
                          <View style={{height: 135}}>
                            <Image
                              source={{uri:food.imgUrl}}
                              style={{
                                height:155,
                                width: 300
                              }}
                            />
                          </View>
                          <View style={{ padding: 50, width: 300 }}>
                            <Text style={{paddingTop:5}}>{food.name}</Text>
                            <Text style={{ color: "#777", paddingTop: 5 }}>
                              {food.description}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </>
                  )
                })}
            </Card>
          )
        })}
      </ScrollView>
      
    );
  }
}

ChefScreen.navigationOptions = {
  title: 'Chefs and Food'
};

ChefScreen.defaultProps = {
  results: [{
    chef: {
      name: 'Jon Kolman',
      specialties: [{name:'Eggs', description:'a variety of different dishes available', imgUrl:'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?cs=srgb&dl=bowl-close-up-eggs-162712.jpg&fm=jpg'}]
    }
  },
  {
    chef: {
      name: 'Deborah',
      specialties: [{name:'Lasanga', imgUrl:'https://image.shutterstock.com/image-photo/meat-lasagna-on-white-wood-260nw-446051698.jpg', description:'Delicious lasagna'}, {name:'eggs', description: "delicious eggs", imgUrl:"https://media.phillyvoice.com/media/images/food-eggs.2e16d0ba.fill-735x490.jpg"}, {name:'stirfry', description:"Delicious Stir Fry", imgUrl: "https://www.chelseasmessyapron.com/wp-content/uploads/2019/06/Chicken-Stir-Fry-5.jpg"}]
    }
  }]
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  card: {
    textAlign:'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
