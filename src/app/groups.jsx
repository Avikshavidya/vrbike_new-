import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";

const groups = [
  {
    title: "🏁 Fitness Squad",
    goal: "100 km this week",
    progress: "62km",
  },
  {
    title: "🚴‍♀️ Hill Climbers",
    goal: "200 mins ride",
    progress: "110 mins",
  },
];

const groupsScreen = () => {
  return (
    <SafeAreaView className="flex-grow bg-white">
      <View className="p-4">
        <Text className="text-2xl font-bold">👥 Groups</Text>
        {/* Add Friend Button */}
        <TouchableOpacity className="my-6 bg-brand-purple p-4 rounded-xl">
          <Text className="text-white text-center font-semibold">
            + Add Friend
          </Text>
        </TouchableOpacity>

        <FlatList
          ItemSeparatorComponent={<View className="h-4" />}
          data={groups}
          renderItem={({ item }) => {
            return (
              <View className="bg-gray-100 p-4 rounded-xl">
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  {item.title}
                </Text>
                <Text className="text-gray-600">{item.goal}</Text>
                <Text className="text-gray-600">{item.progress}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default groupsScreen;
