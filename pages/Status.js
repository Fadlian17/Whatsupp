import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Separator, Left, Body, Right, Thumbnail} from 'native-base';
export default class ListAvatarExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List style={{marginBottom: 10}} >
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://yt3.ggpht.com/a/AGF-l7-kegmCfGtH1upKmi2WxYMezKQrhrPXeTCAsA=s288-c-k-c0xffffffff-no-rj-mo' }} />
              </Left>
              <Body >
                <Text>Status Saya</Text>
                <Text note>Baru saja</Text>
              </Body>
              <Right/>
            </ListItem>
          </List>
          <Separator bordered>
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>Pembaruan yang telah dilihat</Text>
          </Separator>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://m.ayobogor.com/images-bogor/post/articles/2019/08/29/4131/66100743_467711664065817_4828107924256841603_n.jpg' }} />
              </Left>
              <Body>
                <Text>Pevita</Text>
                <Text note>1 menit yang lalu</Text>
              </Body>
              <Right/>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Gal_Gadot_by_Gage_Skidmore_3.jpg' }} />
              </Left>
              <Body>
                <Text>Gal Gadot</Text>
                <Text note>12 menit yang lalu</Text>
              </Body>
              <Right/>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/934683164672385025/NRuNmp-L.jpg' }} />
              </Left>
              <Body>
                <Text>Pak Bambang</Text>
                <Text note>30 menit yang lalu</Text>
              </Body>
              <Right/>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}