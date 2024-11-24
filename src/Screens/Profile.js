import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import {
  CameraView,
  CameraType,
  useCameraPermissions,
  Camera,
} from "expo-camera";
const Profile = () => {
  const [hasCamPerm, sethasCamPerm] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(CameraView.defaultProps.facing);
  const [flash, setFlash] = useState(CameraView.defaultProps.flash);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      sethasCamPerm(cameraStatus.status === "granted");
    })();
  }, []);
  const flipCam = () => {
    setType(type === "back" ? "front" : "back");
  };
  const takeAPic = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const savePic = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert("Image saved");
        setImage(null);
      } catch (error) {
        console.log(err);
      }
    }
  };
  if (hasCamPerm === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <CameraView style={styles.camera} facing={type} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={flipCam}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takeAPic}>
              <Text style={styles.text}>Take a pic</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <Image style={styles.camera} source={{ uri: image }} />
      )}
      {image && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setImage(null);
            }}
          >
            <Text style={styles.text}>New Img</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={savePic}>
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
