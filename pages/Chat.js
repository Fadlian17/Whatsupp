import React, { Component } from 'react';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, View, Fab, Icon } from 'native-base';
export default class ListAvatarExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List> 
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg' }} />
              </Left>
              <Body>
                <Text>Elon Musk</Text>
                <Text note>let's make Tesla Product</Text>
              </Body>
              <Right>
                <Text note>6:20 am</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://awsimages.detik.net.id/visual/2018/04/27/d896715b-9b72-46bd-89bf-c1a5681ca2b2_169.jpeg?w=650' }} />
              </Left>
              <Body>
                <Text>Steve Rogers</Text>
                <Text note>Hey broo, come to join Avengers!!</Text>
              </Body>
              <Right>
                <Text note>5:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://m.ayobogor.com/images-bogor/post/articles/2019/08/29/4131/66100743_467711664065817_4828107924256841603_n.jpg' }} />
              </Left>
              <Body>
                <Text>Pevita Pearce</Text>
                <Text note>Fad,Where do you want to eat dinner?</Text>
              </Body>
              <Right>
                <Text note>4:59 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/934683164672385025/NRuNmp-L.jpg' }} />
              </Left>
              <Body>
                <Text>Bambang Pamungkas</Text>
                <Text note>Hey broo, Can you join a Club</Text>
              </Body>
              <Right>
                <Text note>12:30 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Gal_Gadot_by_Gage_Skidmore_3.jpg' }} />
              </Left>
              <Body>
                <Text>Gal Gadot</Text>
                <Text note>Hey mate, come to join DC Superleague!!</Text>
              </Body>
              <Right>
                <Text note>11:30 am</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Gal_Gadot_by_Gage_Skidmore_3.jpg' }} />
              </Left>
              <Body>
                <Text>Gal Gadot</Text>
                <Text note>Hey mate, come to join DC Superleague!!</Text>
              </Body>
              <Right>
                <Text note>11:30 am</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Gal_Gadot_by_Gage_Skidmore_3.jpg' }} />
              </Left>
              <Body>
                <Text>Gal Gadot</Text>
                <Text note>Hey mate, come to join DC Superleague!!</Text>
              </Body>
              <Right>
                <Text note>11:30 am</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Gal_Gadot_by_Gage_Skidmore_3.jpg' }} />
              </Left>
              <Body>
                <Text>Gal Gadot</Text>
                <Text note>Hey mate, come to join DC Superleague!!</Text>
              </Body>
              <Right>
                <Text note>11:30 am</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Body>
              <View style={{flex:2,justifyContent: "center",alignItems: "center"}}>
                  <Text>Chat Archived</Text>
              </View>
              </Body>
            </ListItem>
          </List>
        </Content>

      </Container>
    );
  }
}
