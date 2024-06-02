import React from "react";
import { StyleSheet, Image, Text, View, ScrollView, TextInput, Button, FlatList, SafeAreaView } from "react-native";

export default function Task() {
  const tasks = [
    { id: '1', title: 'Mobile App Development' },
    { id: '2', title: 'Web Development' },
    { id: '3', title: 'Push Ups' },
    { id: '4', title: 'Read a Book' },
    { id: '5', title: 'Meditation' },
    { id: '6', title: 'Grocery Shopping' },
    { id: '7', title: 'Clean the House' },
    { id: '8', title: 'Work on Project' },
    { id: '9', title: 'Cook Dinner' },
    { id: '10', title: 'Exercise' },
    { id: '11', title: 'Study for Exams' },
    { id: '12', title: 'Walk the Dog' },
    { id: '13', title: 'Plan Vacation' },
    { id: '14', title: 'Yoga' },
    { id: '15', title: 'Write a Blog Post' },
  ];

  const categories = [
    { id: '1', title: 'Exercise', tasks: '12 Tasks', image: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/xhh07t5ygon-2%3A5?alt=media&token=c8e4602c-96d8-4684-85ad-c4681d34e248' },
    { id: '2', title: 'Study', tasks: '12 Tasks', image: 'https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/xhh07t5ygon-2%3A16?alt=media&token=3510e4b9-9673-4400-a79a-e67bb6a07c4a' },
    { id: '3', title: 'Code', tasks: '10 Tasks', image: './assets/code.jpg' },
    { id: '4', title: 'Cook', tasks: '5 Tasks', image: './assets/cook.jpg' },
    { id: '5', title: 'Work', tasks: '8 Tasks', image: './assets/work.jpg' },
    { id: '6', title: 'Jog', tasks: '7 Tasks', image: './assets/jog.jpg' },
    { id: '7', title: 'Sleep', tasks: '7 Tasks', image: './assets/sleep.jpg' },
    { id: '8', title: 'Video game', tasks: '5 Tasks', image: './assets/video games.jpg' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.Task}>
        <View style={styles.Frame1}>
          <View style={styles.Group1}>
            <Text style={styles.HelloDevs}>Hello, Devs</Text>
            <Text style={styles._14TasksToday}>14 tasks today</Text>
          </View>
          <Image
            style={styles.ProfileImage}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/xhh07t5ygon-1%3A13?alt=media&token=3cc862b9-efae-4ff0-bd8f-a87821fca15f",
            }}
          />
        </View>
        <View style={styles.Search3}>
          <View style={styles.SearchBox}>
            <View style={styles.Group6}>
              <View style={styles.Group5}>
                <Image
                  style={styles.MynauiSearch}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/xhh07t5ygon-1%3A40?alt=media&token=191204d3-2d81-4d4a-bd6a-298b2b1d0c57",
                  }}
                />
                <TextInput style={styles.SearchInput} placeholder="Search" />
              </View>
            </View>
          </View>
          <Image
            style={styles.Filter}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/xhh07t5ygon-1%3A31?alt=media&token=1f81dcad-6582-43a7-a8e1-5f0c868e2f94",
            }}
          />
        </View>
        <Text style={styles.Categories}>Categories</Text>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => (
            <View style={styles.CategoriesCard}>
              <View style={styles.Group7}>
                <Text style={styles.Exercise}>{item.title}</Text>
                <Text style={styles._12Tasks}>{item.tasks}</Text>
              </View>
              <Image
                style={styles.CategoryImage}
                source={{
                  uri: item.image,
                }}
              />
            </View>
          )}
          keyExtractor={item => item.id}
          style={styles.Group9}
        />
        <Text style={styles.OngoingTask}>Ongoing Task</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.OngoingTasksCards}>
              <Text style={styles.TaskTitle}>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <Button title="Add Task" onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(247,240,232,1)",
  },
  Task: {
    flex: 1,
    backgroundColor: "rgba(247,240,232,1)",
  },
  Frame1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  Group1: {
    flexDirection: "column",
  },
  HelloDevs: {
    color: "rgba(0,0,0,1)",
    fontSize: 32,
    lineHeight: 32,
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
  },
  _14TasksToday: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    lineHeight: 12,
    fontFamily: "Lato, sans-serif",
    fontWeight: "500",
  },
  ProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  Search3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  SearchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(251,249,247,1)",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(251,249,247,1)",
    paddingHorizontal: 10,
  },
  Group6: {
    flexDirection: "row",
    alignItems: "center",
  },
  Group5: {
    flexDirection: "row",
    alignItems: "center",
  },
  MynauiSearch: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  SearchInput: {
    fontSize: 16,
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
  },
  Filter: {
    width: 24,
    height: 24,
  },
  Categories: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    lineHeight: 20,
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
    padding: 20,
  },
  Group9: {
    paddingHorizontal: 20,
  },
  CategoriesCard: {
    marginRight: 10,
    padding: 16,
    borderRadius: 15,
    backgroundColor: "rgba(251,249,247,1)",
    alignItems: 'center',
  },
  Group7: {
    paddingBottom: 2,
  },
  Exercise: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
  },
  _12Tasks: {
    color: "rgba(0,0,0,1)",
    fontSize: 12,
    lineHeight: 12,
    fontFamily: "Lato, sans-serif",
    fontWeight: "400",
  },
  CategoryImage: {
    width: 151,
    height: 132,
    marginTop: 10,
  },
  OngoingTask: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    lineHeight: 20,
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
    padding: 20,
  },
  OngoingTasksCards: {
    padding: 20,
    margin: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(232,209,186,1)",
    backgroundColor: "rgba(251,249,247,1)",
  },
  TaskTitle: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    lineHeight: 16,
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
  },
});
