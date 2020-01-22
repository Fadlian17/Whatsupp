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
                <Text>Tony Stark</Text>
                <Text note>Hey broo, come to join Avengers!!</Text>
              </Body>
              <Right>
                <Text note>5:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>

      </Container>
    );
  }
}
