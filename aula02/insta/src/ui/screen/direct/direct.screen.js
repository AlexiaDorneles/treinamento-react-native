import React from 'react'
import { View, ScrollView, StatusBar } from 'react-native'
import { DirectItem } from './direct-item/direct-item.section'
import { DirectFooter } from './direct-footer/direct-footer.section'
import { IgHeader, IgSearch } from '@component'
import { BaseScreen } from '@ui/screen/base'
import { HeaderBackButton } from 'react-navigation'

const leftIcon = { name: 'left-arrow' }
const centerIcon = { name: 'instagram_lg_black' }
const rightIcon = { name: 'add-square' }

import list from '@api/direct.json'
import styles from './direct.style'

export class DirectScreen extends BaseScreen {

  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title')
    return {
      title,
      headerLeft: <HeaderBackButton onPress={navigation.getParam('_onDismiss')} />,
      // headerRight: <MyComponent />
    }
  }

  _onDismiss = () => {
    this.props.navigation.dismiss()
    // const backAction = NavigationActions.back()
    // this.props.navigation.dispatch(backAction)
  }

  screenWillFocus() {
    StatusBar.setTranslucent(false)
  }

  componentDidMount() {
    super.componentDidMount()

    this.props.navigation.setParams({
      _onDismiss: this._onDismiss,
    })
  }

  renderItems() {
    return list.map((i, index) => (
      <DirectItem direct={i} key={index} />
    ))
  }

  renderHeader() {
    return (
      <IgHeader left={leftIcon} center={centerIcon} right={rightIcon} />
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* {this.renderHeader()} */}
        <ScrollView contentContainerStyle={styles.container}>
          <IgSearch style={styles.searchBar} />
          {this.renderItems()}
          <DirectFooter />
        </ScrollView>
      </View>
    )
  }
}
