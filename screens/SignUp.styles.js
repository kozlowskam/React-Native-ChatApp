import { StyleSheet } from "react-native";

export default StyleSheet.create({
  outerContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
    marginBottom: 30
  },
  buttonText: {
    fontSize: 17,
    color: "#33ff00",
    fontWeight: "bold",
    alignSelf: "center",
    padding: 5
  },
  buttonPrimary: {
    height: 36,
    backgroundColor: "grey",
    borderColor: "grey",
    borderWidth: 3,
    borderRadius: 3,
    marginBottom: 10,
    alignSelf: "center",
    justifyContent: "center"
  },
  buttonSecondary: {
    height: 36,
    backgroundColor: "#6b47ec",
    borderColor: "#6b47ec",
    borderWidth: 3,
    borderRadius: 3,
    marginBottom: 10,
    alignSelf: "center",
    justifyContent: "center"
  },
  error: {
    fontSize: 18,
    alignSelf: "center",
    marginBottom: 30,
    color: "#FF0000"
  }
});
