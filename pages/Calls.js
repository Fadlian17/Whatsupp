import React, { Component } from 'react';
import { Container, List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Fab, View, Icon, Content } from 'native-base';
export default class ListAvatarExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://m.ayobogor.com/images-bogor/post/articles/2019/08/29/4131/66100743_467711664065817_4828107924256841603_n.jpg' }} />
              </Left>
              <Body>
                <Text>Pevita</Text>
                <Text note><Icon name="redo" style={{color: "green"}} />Yesterday, 20:30</Text>
              </Body>
              <Right>
                <Button transparent>
                    <Icon name="videocam" style={{color: '#075E54'}}/>
                </Button>
              
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/934683164672385025/NRuNmp-L.jpg' }} />
              </Left>
              <Body>
                <Text>Pak Bambang</Text>
                <Text note style={{marginRight: 7}}><Icon name="undo" style={{color: "green"}} />Yesterday, 21:45</Text>
              </Body>
              <Right>
                <Button transparent>
                    <Icon name="call" style={{color: 'red'}}/>
                </Button>
                
              </Right>
            </ListItem>
          </List>
        </Content>

      </Container>
    );
  }
}
