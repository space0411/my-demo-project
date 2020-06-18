import React from "react";
import {
    Platform,
    StyleSheet,
    StatusBar,
    View,
    TouchableOpacity,
    Text,
    Image,
    ScrollView,
    Picker,
    TextInput,
    KeyboardAvoidingView
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Linking from 'expo-linking';
import Colors from "../constants/Colors";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import { formatMoney } from "../utils/utils";

@observer
export default class ToolsScreen extends React.Component<IProps> {
    @observable selectedPlan: any = 1;
    @observable KW: any = "3";
    @observable MM: any = "19.36";
    @observable KWP: any;
    @observable Total: any;

    Calt2 = () => {
        var dientich = this.MM;
        var soluongpin = dientich / 2.42;
        var kWp = Math.floor(soluongpin * 0.41);
        var kWpMax = soluongpin * 0.41;// cong suat toi da dat duoc
        var AveragePerDay_Bac_Nam = (kWpMax * 3.5);// luong dien trung binh 1 ngay o mien Bac, Nam
        var AveragePerDay_Trung = (kWpMax * 4);
        var BillSaveMonth_Bac_Nam = Math.ceil(AveragePerDay_Bac_Nam * 30 * 3000);// so tien tiet kiem duoc moi thang
        var BillSaveMonth_Trung = Math.ceil(AveragePerDay_Trung * 30 * 3000);// so tien tiet kiem duoc moi thang
        this.KW = kWp.toString();
        if (this.selectedPlan === 1 || this.selectedPlan === 3) {
            this.KWP = AveragePerDay_Bac_Nam.toFixed(2);
            this.Total = formatMoney(BillSaveMonth_Bac_Nam.toString(), 0);
        } else {
            this.KWP = AveragePerDay_Trung.toFixed(2);
            this.Total = formatMoney(BillSaveMonth_Trung.toString(), 0);
        }
    }

    handleChangePlan = (plan) => {
        this.selectedPlan = plan;
    }

    render() {
        return (
            <KeyboardAvoidingView style={{ flexGrow: 1 }} behavior={Platform.OS === "ios" ? "padding" : null}>
                <View style={{ flex: 1 }}>
                    {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
                    <ScrollView>
                        <View style={{ marginTop: hp("2%") }}>
                            <View style={styles.mainItem}>
                                <View style={{ position: 'relative' }}>
                                    <Image
                                        source={require("../assets/images/info-banner.jpg")}
                                        style={styles.banner}
                                    />
                                    <Text style={{ paddingHorizontal: 8, color: Colors.tintColor, fontSize: 32, fontWeight: "bold", position: "absolute", bottom: 0 }}>Công cụ định cỡ hệ thống phù hợp cho bạn</Text>
                                </View>
                                <View style={{ paddingHorizontal: 8, paddingTop: 8 }}>
                                    <Text style={{ fontSize: 16 }}>Chỉ đơn giãn điền 4 thông tin cơ bản bên dưới, bạn sẽ ngay lập tức biết được kích cỡ gói hệ thống lắp đặt nào phù hợp nhất cho gia đình và doanh nghiệp của bạn, để tiết kiệm chi phí tối ưu nhất, hoàn vốn nhanh và mang lại không gian sống xanh.</Text>
                                    <Text style={{ fontSize: 16, marginTop: 12 }}>Bạn có nhu cầu lắp đặt hệ thống bao nhiêu (KW)</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={(text) => (this.KW = text)}
                                        value={this.KW}
                                        keyboardType="numeric"
                                    />
                                    <Text style={{ fontSize: 16, marginTop: 6 }}>Diện tích cần thiết để lắp đặt điện mặt trời (M2)</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={(text) => (this.MM = text)}
                                        value={this.MM}
                                        keyboardType="numeric"
                                    />
                                    <Text style={{ fontSize: 16, marginTop: 6 }}>Chọn khu vực lắp đặt</Text>
                                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 6 }}>
                                        <TouchableOpacity style={{ ...styles.buttonPlan, backgroundColor: this.selectedPlan === 1 ? Colors.tintColor : Colors.actionColor }} onPress={() => this.handleChangePlan(1)}>
                                            <Text style={{ fontSize: 18, color: Colors.white }}>Miền bắc</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ ...styles.buttonPlan, marginLeft: 4, backgroundColor: this.selectedPlan === 2 ? Colors.tintColor : Colors.actionColor }} onPress={() => this.handleChangePlan(2)}>
                                            <Text style={{ fontSize: 18, color: Colors.white }}>Miền trung</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ ...styles.buttonPlan, marginLeft: 4, backgroundColor: this.selectedPlan === 3 ? Colors.tintColor : Colors.actionColor }} onPress={() => this.handleChangePlan(3)}>
                                            <Text style={{ fontSize: 18, color: Colors.white }}>Miền nam</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{ fontSize: 16, marginTop: 12 }}>Số điện được hệ thống sinh ra mỗi ngày (KWP):</Text>
                                    <Text style={styles.total}>{this.KWP && this.KWP}</Text>
                                    <Text style={{ fontSize: 16, marginTop: 12 }}>Dự tính số tiền tiết kiệm mỗi tháng (VNĐ):</Text>
                                    <Text style={styles.total}>{this.Total && this.Total}</Text>
                                    <TouchableOpacity style={{ ...styles.loginButton, marginBottom: 100 }} onPress={this.Calt2}>
                                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>TÍNH NHANH</Text>
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
            </KeyboardAvoidingView>
        );
    }

    handleCallService = () => {
        Linking.openURL(`tel:0939561279`);
    }

    handleSendEmail = () => {
        Linking.openURL(`mailto:nhaviettech.vn@gmail.com`);
    }
}

const styles = StyleSheet.create({
    mainItem: {
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
        marginBottom: wp("2%"),
    },
    banner: {
        width: "100%",
        height: 220,
        borderTopLeftRadius: wp("2%"),
        borderTopRightRadius: wp("2%")
    },
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
    buttonPlan: {
        height: 50,
        backgroundColor: Colors.actionColor,
        borderRadius: wp("2%"),
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1
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
    loginButton: {
        marginTop: 21,
        marginBottom: 21,
        height: 50,
        backgroundColor: Colors.actionColor,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: Colors.gray2,
        paddingVertical: 5,
        paddingHorizontal: 12,
        fontSize: 24
    },
    total: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        fontSize: 24,
        color: Colors.tintColor
    }
});
