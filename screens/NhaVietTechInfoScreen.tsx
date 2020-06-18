import React from "react";
import {
    Platform,
    StyleSheet,
    StatusBar,
    View,
    TouchableOpacity,
    Text,
    Image,
    ScrollView
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Linking from 'expo-linking';
import Colors from "../constants/Colors";

export default class NhaVietTechInfoScreen extends React.Component<IProps> {

    render() {
        return (
            <View style={{ flex: 1 }}>
                {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
                <ScrollView>
                    <View style={{ marginTop: hp("5%") }}>
                        <View
                            style={styles.mainItem}
                        >
                            <Image
                                source={require("../assets/images/info-banner.jpg")}
                                style={styles.banner}
                            />
                            <View style={{ paddingHorizontal: 8, paddingTop: 8 }}>
                                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Phòng kinh doanh NhaVietTech</Text>
                                <TouchableOpacity onPress={this.handleCallService} style={styles.infoMain}>
                                    <Text style={styles.titleText}>Hotline: </Text>
                                    <Text style={styles.infoContent}>0939561279</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.handleSendEmail} style={styles.infoMain}>
                                    <Text style={styles.titleText}>Email: </Text>
                                    <Text style={styles.infoContent}>nhaviettech.vn@gmail.com</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.handleOpenWebSite} style={styles.infoMain}>
                                    <Text style={styles.titleText}>Website: </Text>
                                    <Text style={styles.infoContent}>www.nhaviettech.vn</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.handleOpenFB} style={styles.infoMain}>
                                    <Text style={styles.titleText}>Facebook: </Text>
                                    <Text style={styles.infoContent}>facebook.com/nhaviettech.vn</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", position: 'absolute', bottom: 0 }}>
                                <TouchableOpacity style={styles.buttonLeft} onPress={this.handleCallService}>
                                    <Text style={{ fontSize: 18 }}>Gọi Hotline</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonRight} onPress={this.handleSendEmail}>
                                    <Text style={{ fontSize: 18 }}>Gửi E-Mail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

    handleCallService = () => {
        Linking.openURL(`tel:0939561279`);
    }

    handleSendEmail = () => {
        Linking.openURL(`mailto:nhaviettech.vn@gmail.com`);
    }

    handleOpenWebSite = () => {
        Linking.openURL(`http://www.nhaviettech.vn`);
    }

    handleOpenFB = () => {
        Linking.openURL(`http://www.facebook.com/nhaviettech.vn/`);
    }
}

const styles = StyleSheet.create({
    mainItem: {
        height: hp("80%"),
        backgroundColor: "#fff",
        borderRadius: wp("2%"),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 12,
        position: "relative"
    },
    banner: {
        width: "100%",
        height: 220,
        borderTopLeftRadius: wp("2%"),
        borderTopRightRadius: wp("2%")
    },
    infoMain: { display: "flex", flexDirection: 'row', marginTop: 5 },
    infoContent: { fontSize: 18, textDecorationLine: 'underline', textDecorationColor: Colors.tintColor },
    titleText: { fontSize: 18, fontWeight: "500" },
    buttonLeft: {
        marginTop: 21,
        height: 50,
        backgroundColor: Colors.actionColor,
        borderBottomLeftRadius: wp("2%"),
        borderRightWidth: 0.5,
        borderRightColor: Colors.tintColor,
        justifyContent: "center",
        alignItems: "center",
        width: '50%',
    },
    buttonRight: {
        marginTop: 21,
        height: 50,
        backgroundColor: Colors.actionColor,
        borderBottomRightRadius: wp("2%"),
        borderLeftWidth: 0.5,
        borderLeftColor: Colors.tintColor,
        justifyContent: "center",
        alignItems: "center",
        width: '50%',
    },
});
