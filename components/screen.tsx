import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "@/assets/styles";
import Option from "@/components/option";
import { useAppDispatch, useAppSelector } from '@/store'
import { set } from '@/slices/sceneSlice';
import { todo, undo } from '@/slices/actionSlice'
import { take, use } from '@/slices/itemsSlice';
import { visit } from '@/slices/visitedSlice'
import screens from '@/assets/scenes.json'
const req= require.context('../assets/images', true, /background/)
console.log(req)
const backgrounds: any[] = []
req.keys().forEach((filename: string) => {
  backgrounds.push(req(filename))
})

export default function Screen() {
  const dispatch = useAppDispatch()
  const scene = useAppSelector((state) => state.scene.value)
  const items = useAppSelector((state) => state.items)
  const actions = useAppSelector((state) => state.actions)
  const visited = useAppSelector((state) => state.visited.visited)
  return (
    <ImageBackground source={backgrounds[screens[scene].background]} style={styles.page} imageStyle={styles.image}>
      <View style={styles.top}>
        <View style={styles.right}>
          <ScrollView style={styles.scroll}>
            {screens[scene].options.map((option :any, index)=>
              (option.requirements ? 
                (option.requirements.items?Object.keys(option.requirements.items).reduce((sum, current)=>sum
                &&(items[current as keyof typeof items]==
                  option.requirements.items[current as keyof typeof option.requirements.items]), true):true): 
                true)
              &&<Option key={index} text={option.text} next={()=>{
                option.next&&dispatch(visit(scene))
                option.next&&dispatch(set(option.next))
                option.actions&&option.actions.map((action: any)=>{dispatch(todo(action))})
                option.items&&option.items.map((item: any)=>{dispatch(take(item))})
                option.resets&&option.resets.map((action: any)=>{dispatch(undo(action))})
                option.used&&option.used.map((item: any)=>{dispatch(use(item))})
              }}/>)}
          </ScrollView>
          </View>
      </View>
      <View style={styles.bottom}>
        {screens[scene].descriptions.map((description: any, index)=>
          (description.requirements ? 
            (description.requirements.actions?Object.keys(description.requirements.actions).reduce((sum, current)=>sum
            &&(actions[current as keyof typeof actions]==
              description.requirements.actions[current as keyof typeof description.requirements.actions]), true):true)&&
            (description.requirements.visited?Object.keys(description.requirements.visited).reduce((sum, current)=>sum
            &&(visited[parseInt(current)]==
              description.requirements.visited[current as keyof typeof description.requirements.visited]), true):true): 
            true)
          &&<Text key={index} style={styles.text}>
            {description.text}
          </Text>
        )}
      </View>
    </ImageBackground>
  );
  }