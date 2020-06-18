import React from "react";
import { View } from "react-native";
import Svg, { Path, Defs, ClipPath, G } from "react-native-svg";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  svgMain: {
    alignItems: "center",
    justifyContent: "center",
  },
});

const getColor = (focused: boolean) => {
  return focused ? Colors.tabIconSelected : Colors.tabIconDefault;
};

interface Props {
  focused: boolean;
}

export class DashboardIcon extends React.Component<Props> {
  render() {
    const { focused } = this.props;
    const fillColor = getColor(focused);
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="18" height="19.988" viewBox="0 0 18 19.988">
          <Path
            id="_Icon_Сolor"
            data-name="Dashboard Icon Сolor"
            d="M17.424,8.173,9.715.289a1.03,1.03,0,0,0-1.43,0L.575,8.174A2.075,2.075,0,0,0,0,9.612v8.376a1.949,1.949,0,0,0,1.889,2H5v-9a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v9h3.112a1.949,1.949,0,0,0,1.888-2V9.612a2.075,2.075,0,0,0-.576-1.439"
            fill={fillColor}
          />
        </Svg>
      </View>
    );
  }
}

export class RankIcon extends React.Component<Props> {
  render() {
    const { focused } = this.props;
    const fillColor = getColor(focused);
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="19" height="20" viewBox="0 0 19 20">
          <Path
            id="_Icon_Сolor"
            data-name="Rank Icon Сolor"
            d="M16.625,18.824V10.588a1.187,1.187,0,0,1,2.375,0v8.235a1.187,1.187,0,0,1-2.375,0Zm-8.313,0V1.176a1.187,1.187,0,0,1,2.375,0V18.824a1.187,1.187,0,0,1-2.375,0ZM0,18.824V5.883a1.187,1.187,0,0,1,2.375,0V18.824a1.187,1.187,0,0,1-2.375,0Z"
            fill={fillColor}
          />
        </Svg>
      </View>
    );
  }
}

export class NewsIcon extends React.Component<Props> {
  render() {
    const { focused } = this.props;
    const fillColor = getColor(focused);
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="23.583" height="19.971" viewBox="0 0 23.583 19.971">
          <Defs>
            <ClipPath id="clip-path">
              <Path
                id="_Icon_Сolor"
                data-name="News Icon Сolor"
                d="M13.032,2.263,21.645.049a1.553,1.553,0,0,1,1.938,1.5v14.5a1.55,1.55,0,0,1-1.165,1.5l-9.386,2.41ZM1.164,17.561A1.55,1.55,0,0,1,0,16.057V1.554A1.552,1.552,0,0,1,1.934.049L10.55,2.262V19.971Z"
                transform="translate(0 0)"
                fill={fillColor}
              />
            </ClipPath>
          </Defs>
          <G id="huong_dan" opacity="0.8">
            <G
              id="Group_327"
              data-name="Group 327"
              transform="translate(-2.5 -4.071)"
            >
              <Path
                id="_Icon_Сolor-2"
                data-name="News Icon Сolor"
                d="M13.032,2.263,21.645.049a1.553,1.553,0,0,1,1.938,1.5v14.5a1.55,1.55,0,0,1-1.165,1.5l-9.386,2.41ZM1.164,17.561A1.55,1.55,0,0,1,0,16.057V1.554A1.552,1.552,0,0,1,1.934.049L10.55,2.262V19.971Z"
                transform="translate(2.5 4.071)"
                fill={fillColor}
              />
            </G>
          </G>
        </Svg>
      </View>
    );
  }
}

export class UserIcon extends React.Component<Props> {
  render() {
    const { focused } = this.props;
    const fillColor = getColor(focused);
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="16" height="20" viewBox="0 0 16 20">
          <G id="ve_toi" opacity="0.8">
            <Path
              id="_Icon_Сolor"
              data-name="User Icon Сolor"
              d="M13.714,18.889A5.643,5.643,0,0,0,8,13.333a5.643,5.643,0,0,0-5.715,5.556A1.127,1.127,0,0,1,1.143,20,1.127,1.127,0,0,1,0,18.889a7.9,7.9,0,0,1,8-7.778,7.9,7.9,0,0,1,8,7.778,1.144,1.144,0,0,1-2.286,0ZM3.428,4.444A4.514,4.514,0,0,1,8,0a4.513,4.513,0,0,1,4.571,4.444A4.513,4.513,0,0,1,8,8.889,4.514,4.514,0,0,1,3.428,4.444Z"
              fill={fillColor}
            />
          </G>
        </Svg>
      </View>
    );
  }
}

export class TimeLineIcon extends React.Component<Props> {
  render() {
    const { focused } = this.props;
    const fillColor = getColor(focused);
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="22" height="12" viewBox="0 0 22 12">
          <Path
            id="ic_timeline_24px"
            d="M23,8a2.006,2.006,0,0,1-2,2,1.7,1.7,0,0,1-.51-.07l-3.56,3.55A1.766,1.766,0,0,1,17,14a2,2,0,0,1-4,0,1.766,1.766,0,0,1,.07-.52l-2.55-2.55a1.966,1.966,0,0,1-1.04,0L4.93,15.49A1.7,1.7,0,0,1,5,16a2,2,0,1,1-2-2,1.7,1.7,0,0,1,.51.07L8.07,9.52A1.766,1.766,0,0,1,8,9a2,2,0,0,1,4,0,1.766,1.766,0,0,1-.07.52l2.55,2.55a1.966,1.966,0,0,1,1.04,0l3.55-3.56A1.7,1.7,0,0,1,19,8a2,2,0,0,1,4,0Z"
            transform="translate(-1 -6)"
            fill={fillColor}
          />
        </Svg>
      </View>
    );
  }
}

export class BuildIcon extends React.Component<Props> {
  render() {
    const { focused } = this.props;
    const fillColor = getColor(focused);
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="19.115" height="19" viewBox="0 0 19.115 19">
          <Path
            id="ic_build_24px"
            d="M19.82,16.63,11.926,8.735a5.568,5.568,0,0,0-1.3-5.986A5.735,5.735,0,0,0,4.2,1.621L7.935,5.351l-2.6,2.6L1.515,4.223a5.591,5.591,0,0,0,1.128,6.42,5.568,5.568,0,0,0,5.986,1.3l7.895,7.895a.839.839,0,0,0,1.215,0l2-2a.781.781,0,0,0,.087-1.215Z"
            transform="translate(-0.956 -1.1)"
            fill={fillColor}
          />
        </Svg>
      </View>
    );
  }
}

export class JobCheckIcon extends React.Component<Props> {
  render() {
    const { focused } = this.props;
    const fillColor = getColor(focused);
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="18" height="18" viewBox="0 0 18 18">
          <Path
            id="_Icon_Сolor"
            data-name="Job Check Icon Сolor"
            d="M2.6,18A2.6,2.6,0,0,1,0,15.4V2.6A2.6,2.6,0,0,1,2.6,0h9.567a1,1,0,1,1,0,2H2.6a.6.6,0,0,0-.6.6V15.4a.6.6,0,0,0,.6.6H15.4a.6.6,0,0,0,.6-.6V9.833a1,1,0,1,1,2,0V15.4A2.6,2.6,0,0,1,15.4,18Zm6.62-6a1,1,0,0,1-.72-.31L6.277,9.36A1,1,0,1,1,7.724,7.979l1.5,1.578L15.282,3.3A1,1,0,0,1,16.718,4.7l-6.777,7A1,1,0,0,1,9.223,12Z"
            fill={fillColor}
          />
        </Svg>
      </View>
    );
  }
}

export class BatteryChargingIcon extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="10" height="20" viewBox="0 0 10 20">
          <G id="ic_battery_charging_20_24px" transform="translate(-7 -2)">
            <Path
              id="Path_29"
              data-name="Path 29"
              d="M11,20V17H7v3.67A1.336,1.336,0,0,0,8.33,22h7.33A1.338,1.338,0,0,0,17,20.67V17H12.6Z"
              fill="#f58427"
            />
            <Path
              id="Path_30"
              data-name="Path 30"
              d="M15.67,4H14V2H10V4H8.33A1.336,1.336,0,0,0,7,5.33V17h4V14.5H9L13,7v5.5h2L12.6,17H17V5.33A1.336,1.336,0,0,0,15.67,4Z"
              fill="#f58427"
              opacity="0.3"
            />
          </G>
        </Svg>
      </View>
    );
  }
}

export class BatteryFullIcon extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="10" height="20" viewBox="0 0 10 20">
          <Path
            id="ic_battery_charging_full_24px"
            d="M15.67,4H14V2H10V4H8.33A1.336,1.336,0,0,0,7,5.33V20.66A1.338,1.338,0,0,0,8.33,22h7.33A1.338,1.338,0,0,0,17,20.67V5.33A1.336,1.336,0,0,0,15.67,4ZM11,20V14.5H9L13,7v5.5h2Z"
            transform="translate(-7 -2)"
            fill="#f58427"
          />
        </Svg>
      </View>
    );
  }
}

export class AccountBalanceIcon extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="19" height="21" viewBox="0 0 19 21">
          <Path
            id="ic_account_balance_24px"
            d="M4,10v7H7V10Zm6,0v7h3V10ZM2,22H21V19H2ZM16,10v7h3V10ZM11.5,1,2,6V8H21V6Z"
            transform="translate(-2 -1)"
            fill="#f58427"
          />
        </Svg>
      </View>
    );
  }
}

export class MonetizationIcon extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="20" height="20" viewBox="0 0 20 20">
          <Path
            id="ic_monetization_on_24px"
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1.41,16.09V20H10.74V18.07a3.721,3.721,0,0,1-3.27-3.4H9.43c.1,1.05.82,1.87,2.65,1.87,1.96,0,2.4-.98,2.4-1.59,0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67,0-1.72,1.39-2.84,3.11-3.21V4h2.67V5.95a3.535,3.535,0,0,1,2.85,3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5,0-2.4.68-2.4,1.64,0,.84.65,1.39,2.67,1.91s4.18,1.39,4.18,3.91c-.01,1.83-1.38,2.83-3.12,3.16Z"
            transform="translate(-2 -2)"
            fill="#f58427"
          />
        </Svg>
      </View>
    );
  }
}

export class NFCIcon extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="20" height="20" viewBox="0 0 20 20">
          <Path
            id="ic_nfc_24px"
            d="M20,2H4A2.006,2.006,0,0,0,2,4V20a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V4A2.006,2.006,0,0,0,20,2Zm0,18H4V4H20ZM18,6H13a2.006,2.006,0,0,0-2,2v2.28A1.98,1.98,0,0,0,10,12a2,2,0,0,0,4,0,1.968,1.968,0,0,0-1-1.72V8h3v8H8V8h2V6H6V18H18Z"
            transform="translate(-2 -2)"
            fill="#4cb9bd"
          />
        </Svg>
      </View>
    );
  }
}

export class DayDreamIcon extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="22" height="18" viewBox="0 0 22 18">
          <Path
            id="ic_settings_system_daydream_24px"
            d="M9,16h6.5a2.5,2.5,0,0,0,0-5h-.05a3.483,3.483,0,0,0-6.61-.98H8.68A3,3,0,0,0,9,16ZM21,3H3A2.006,2.006,0,0,0,1,5V19a2.006,2.006,0,0,0,2,2H21a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,21,3Zm0,16.01H3V4.99H21Z"
            transform="translate(-1 -3)"
            fill="#4cb9bd"
          />
        </Svg>
      </View>
    );
  }
}

export class BrightnessIcon extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="22.62" height="22.62" viewBox="0 0 22.62 22.62">
          <Path
            id="ic_brightness_high_24px"
            d="M20,8.69V4H15.31L12,.69,8.69,4H4V8.69L.69,12,4,15.31V20H8.69L12,23.31,15.31,20H20V15.31L23.31,12ZM12,18a6,6,0,1,1,6-6A6,6,0,0,1,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Z"
            transform="translate(-0.69 -0.69)"
            fill="#4cb9bd"
          />
        </Svg>
      </View>
    );
  }
}

export class MessageIcon extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg id="message-circle" width="28" height="28" viewBox="0 0 28 28">
          <Defs>
            <ClipPath id="clip-path">
              <Path
                id="_Icon_Сolor"
                data-name="🎨 Icon Сolor"
                d="M.352,23.648a1.2,1.2,0,0,1-.328-1.084l1.029-5.145a1.321,1.321,0,0,0-.107-.767,12.017,12.017,0,1,1,6.4,6.4,1.378,1.378,0,0,0-.772-.106L1.436,23.976A1.174,1.174,0,0,1,1.2,24,1.2,1.2,0,0,1,.352,23.648Z"
                transform="translate(0)"
                fill="#5ec0c3"
              />
            </ClipPath>
          </Defs>
          <G id="Group_213" data-name="Group 213" transform="translate(2 1)">
            <Path
              id="_Icon_Сolor-2"
              data-name="🎨 Icon Сolor"
              d="M.352,23.648a1.2,1.2,0,0,1-.328-1.084l1.029-5.145a1.321,1.321,0,0,0-.107-.767,12.017,12.017,0,1,1,6.4,6.4,1.378,1.378,0,0,0-.772-.106L1.436,23.976A1.174,1.174,0,0,1,1.2,24,1.2,1.2,0,0,1,.352,23.648Z"
              transform="translate(0 0)"
              fill="#5ec0c3"
            />
          </G>
        </Svg>
      </View>
    );
  }
}

export class SolarIcon extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="83.781" height="67.024" viewBox="0 0 83.781 67.024">
          <Path
            id="solar-panel"
            d="M56.546,58.648l-6.28.007v-4.2H33.511v4.217l-6.281.007a2.1,2.1,0,0,0-2.092,2.093l-.007,4.154a2.1,2.1,0,0,0,2.1,2.1l29.318-.034A2.094,2.094,0,0,0,58.638,64.9l.005-4.154a2.1,2.1,0,0,0-2.1-2.1ZM76.6,3.5A4.244,4.244,0,0,0,72.4,0H11.377A4.244,4.244,0,0,0,7.169,3.5C-.437,48.326,0,45.566,0,46.079a4.23,4.23,0,0,0,4.268,4.189H79.506a4.23,4.23,0,0,0,4.266-4.162c0-.534.439,2.219-7.168-42.606ZM34.011,8.378H49.763l1.279,12.567H32.732ZM24.17,41.89H9.3l2.489-14.662H25.664L24.17,41.89ZM26.3,20.945H12.857L14.99,8.378H27.582L26.3,20.945ZM30.6,41.89l1.492-14.662h19.59L53.174,41.89H30.6ZM56.191,8.378H68.783l2.132,12.567H57.47L56.191,8.378ZM59.6,41.89,58.111,27.229H71.983L74.471,41.89Z"
            transform="translate(0.003)"
            fill="#5ec0c3"
          />
        </Svg>
      </View>
    );
  }
}

export class SeedlingIcon extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="77.143" height="67.5" viewBox="0 0 77.143 67.5">
          <Path
            id="seedling"
            d="M9.643,41.643H0a33.752,33.752,0,0,0,33.75,33.75v21.7A2.418,2.418,0,0,0,36.161,99.5h4.821a2.418,2.418,0,0,0,2.411-2.411v-21.7A33.752,33.752,0,0,0,9.643,41.643ZM67.5,32A33.722,33.722,0,0,0,38.014,49.357,38.628,38.628,0,0,1,46.9,65.569a34.059,34.059,0,0,0,9.145-2.276A33.667,33.667,0,0,0,77.143,32Z"
            transform="translate(0 -32)"
            fill="#5ec0c3"
          />
        </Svg>
      </View>
    );
  }
}

export class NewspaperIcon extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="82" height="54.667" viewBox="0 0 82 54.667">
          <Path
            id="newspaper"
            d="M78.583,64H15.944A6.844,6.844,0,0,0,9.5,68.556H3.417A3.417,3.417,0,0,0,0,71.972v38.722a7.972,7.972,0,0,0,7.972,7.972H78.583A3.417,3.417,0,0,0,82,115.25V67.417A3.417,3.417,0,0,0,78.583,64ZM6.833,110.694V75.389H9.111v35.306a1.139,1.139,0,0,1-2.278,0Zm68.333,1.139h-59.3a8.034,8.034,0,0,0,.082-1.139V70.833H75.167ZM24.486,94.75H43.847a1.708,1.708,0,0,0,1.708-1.708V79.375a1.708,1.708,0,0,0-1.708-1.708H24.486a1.708,1.708,0,0,0-1.708,1.708V93.042A1.708,1.708,0,0,0,24.486,94.75Zm3.986-11.389H39.861v5.694H28.472Zm-5.694,19.931V99.875a1.708,1.708,0,0,1,1.708-1.708H43.847a1.708,1.708,0,0,1,1.708,1.708v3.417A1.708,1.708,0,0,1,43.847,105H24.486A1.708,1.708,0,0,1,22.778,103.292Zm27.333,0V99.875a1.708,1.708,0,0,1,1.708-1.708H66.625a1.708,1.708,0,0,1,1.708,1.708v3.417A1.708,1.708,0,0,1,66.625,105H51.819A1.708,1.708,0,0,1,50.111,103.292Zm0-20.5V79.375a1.708,1.708,0,0,1,1.708-1.708H66.625a1.708,1.708,0,0,1,1.708,1.708v3.417A1.708,1.708,0,0,1,66.625,84.5H51.819A1.708,1.708,0,0,1,50.111,82.792Zm0,10.25V89.625a1.708,1.708,0,0,1,1.708-1.708H66.625a1.708,1.708,0,0,1,1.708,1.708v3.417a1.708,1.708,0,0,1-1.708,1.708H51.819A1.708,1.708,0,0,1,50.111,93.042Z"
            transform="translate(0 -64)"
            fill="#5ec0c3"
          />
        </Svg>
      </View>
    );
  }
}
export class HomeIcon extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="86.699" height="67.42" viewBox="0 0 86.699 67.42">
          <Path
            id="home"
            d="M42.185,49.541,14.436,72.4V97.062a2.408,2.408,0,0,0,2.408,2.408l16.866-.044a2.408,2.408,0,0,0,2.4-2.408V82.613A2.408,2.408,0,0,1,38.514,80.2h9.632a2.408,2.408,0,0,1,2.408,2.408V97.008a2.408,2.408,0,0,0,2.408,2.416l16.86.047a2.408,2.408,0,0,0,2.408-2.408V72.379L44.488,49.541a1.835,1.835,0,0,0-2.3,0ZM86.017,65.074,73.435,54.7V33.856a1.806,1.806,0,0,0-1.806-1.806H63.2a1.806,1.806,0,0,0-1.806,1.806V44.784L47.919,33.7a7.224,7.224,0,0,0-9.181,0L.64,65.074A1.806,1.806,0,0,0,.4,67.618l3.838,4.666a1.806,1.806,0,0,0,2.545.245l35.4-29.159a1.835,1.835,0,0,1,2.3,0l35.4,29.159a1.806,1.806,0,0,0,2.544-.241l3.838-4.666a1.806,1.806,0,0,0-.256-2.548Z"
            transform="translate(0.015 -32.05)"
            fill="#5ec0c3"
          />
        </Svg>
      </View>
    );
  }
}
export class GripHorizontalIcon extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="75.6" height="54" viewBox="0 0 75.6 54">
          <Path
            id="grip-horizontal"
            d="M16.2,128.4H5.4A5.4,5.4,0,0,0,0,133.8v10.8A5.4,5.4,0,0,0,5.4,150H16.2a5.4,5.4,0,0,0,5.4-5.4V133.8A5.4,5.4,0,0,0,16.2,128.4Zm27,0H32.4a5.4,5.4,0,0,0-5.4,5.4v10.8a5.4,5.4,0,0,0,5.4,5.4H43.2a5.4,5.4,0,0,0,5.4-5.4V133.8A5.4,5.4,0,0,0,43.2,128.4Zm27,0H59.4a5.4,5.4,0,0,0-5.4,5.4v10.8a5.4,5.4,0,0,0,5.4,5.4H70.2a5.4,5.4,0,0,0,5.4-5.4V133.8A5.4,5.4,0,0,0,70.2,128.4ZM16.2,96H5.4A5.4,5.4,0,0,0,0,101.4v10.8a5.4,5.4,0,0,0,5.4,5.4H16.2a5.4,5.4,0,0,0,5.4-5.4V101.4A5.4,5.4,0,0,0,16.2,96Zm27,0H32.4a5.4,5.4,0,0,0-5.4,5.4v10.8a5.4,5.4,0,0,0,5.4,5.4H43.2a5.4,5.4,0,0,0,5.4-5.4V101.4A5.4,5.4,0,0,0,43.2,96Zm27,0H59.4a5.4,5.4,0,0,0-5.4,5.4v10.8a5.4,5.4,0,0,0,5.4,5.4H70.2a5.4,5.4,0,0,0,5.4-5.4V101.4A5.4,5.4,0,0,0,70.2,96Z"
            transform="translate(0 -96)"
            fill="#5ec0c3"
          />
        </Svg>
      </View>
    );
  }
}
export class ChalkboardIcon extends React.Component {
  render() {
    return (
      <View style={[StyleSheet.absoluteFill, styles.svgMain]}>
        <Svg width="85" height="68" viewBox="0 0 85 68">
          <Path
            id="chalkboard-teacher"
            d="M27.624,46.75a3.038,3.038,0,0,0-.938.145,17.52,17.52,0,0,1-5.437.918,17.535,17.535,0,0,1-5.439-.918,3.03,3.03,0,0,0-.936-.145A14.876,14.876,0,0,0,0,61.707,6.359,6.359,0,0,0,6.374,68h29.75A6.359,6.359,0,0,0,42.5,61.707,14.876,14.876,0,0,0,27.624,46.75ZM21.249,42.5A12.75,12.75,0,1,0,8.5,29.75,12.75,12.75,0,0,0,21.249,42.5ZM78.623,0h-51a6.491,6.491,0,0,0-6.375,6.586V12.75a16.807,16.807,0,0,1,8.5,2.364V8.5H76.5V46.75H68v-8.5H51v8.5H40.873a16.927,16.927,0,0,1,5.271,8.5H78.623A6.491,6.491,0,0,0,85,48.664V6.586A6.491,6.491,0,0,0,78.623,0Z"
            transform="translate(0.002)"
            fill="#5ec0c3"
          />
        </Svg>
      </View>
    );
  }
}
