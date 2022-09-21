import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../components/Background'
import { useNavigation, useRoute } from '@react-navigation/native'
import { styles } from './styles'
import { GameParams } from '../../@types/navigation'
import { TouchableOpacity, View, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading'

export function Game() {
  const navigation = useNavigation()
  const route = useRoute()
  const game = route.params as GameParams

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <>
      <Background>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack}>
              <Entypo
                name="chevron-thin-left"
                color={THEME.COLORS.CAPTION_300}
                size={20}
              />
            </TouchableOpacity>

            <Image source={logoImg} style={styles.logo} />
            <View style={styles.right} />
          </View>

          <Image
            source={{ uri: game.bannerURL }}
            style={styles.cover}
            resizeMode="cover"
          />

          <Heading
            title={game.title}
            subtitle="Conecte-se ce comece a jogar!"
          />
        </SafeAreaView>
      </Background>
      z
    </>
  )
}
