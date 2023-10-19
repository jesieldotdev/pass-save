import { StyleProp, ViewStyle } from "react-native";
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>
}

function AdobeIcon({ width, height, style }: IconProps) {
  return (
    <Svg
      width={width || 100}
      height={height || 100}
      viewBox="0 0 62 63"
      fill="none"
      style={style || null }
    >
      <Path
        d="M31 4.75C16.0389 4.75 3.875 16.9139 3.875 31.875C3.875 46.8361 16.0389 59 31 59C45.9611 59 58.125 46.8361 58.125 31.875C58.125 16.9139 45.9611 4.75 31 4.75Z"
        fill="#E6001F"
      />
      <Path
        d="M13.5625 45.4375C13.5625 45.4375 25.6151 16.3826 25.5865 16.375H25.5864C25.5865 16.375 25.5865 16.375 25.5865 16.375H34.7396L48.4375 45.4375L38.0915 45.4375C38.0991 45.4529 30.334 27.6053 30.2366 27.4259C30.2197 27.5815 25.0875 39.5264 25.0256 39.5411H30.5563C30.5312 39.5714 32.9612 45.382 32.9612 45.4375L13.5625 45.4375Z"
        fill="white"
      />
    </Svg>
  );
}

function SpotifyIcon({ width, height, style }: IconProps) {
  return (
    <Svg
      width={width || 100}
      height={height || 100}
      viewBox="0 0 62 63"
      fill="none"
      style={style || null }
    >
      <Circle cx="28" cy="27.25" r="27.125" fill="#1ED760" />
      <Path
        d="M37.7605 36.6088C37.3624 37.2404 36.5132 37.4173 35.8497 37.0383C30.6214 34.0063 24.0661 33.3241 16.3165 34.9917C15.5734 35.1433 14.8303 34.7138 14.6711 34.0063C14.5118 33.2988 14.963 32.5914 15.7061 32.4398C24.1722 30.5953 31.4441 31.3786 37.2828 34.7896C37.9463 35.1686 38.1586 35.9771 37.7605 36.6088ZM40.4676 30.848C39.9633 31.6312 38.9017 31.8586 38.079 31.4038C32.1076 27.8918 23.0045 26.8811 15.945 28.9277C15.0161 29.1804 14.0607 28.7003 13.7953 27.8412C13.5299 26.9569 14.0341 26.0473 14.963 25.7946C23.031 23.4701 33.063 24.5818 39.9368 28.5992C40.7064 29.054 40.9718 30.0647 40.4676 30.848ZM40.7064 24.8345C33.5407 20.7919 21.7306 20.4129 14.8834 22.3837C13.7953 22.7121 12.6275 22.131 12.2825 21.0698C11.9375 20.0339 12.5744 18.9221 13.6626 18.5937C21.5183 16.3197 34.5758 16.7745 42.8031 21.4235C43.785 21.9794 44.1035 23.1922 43.5196 24.127C42.9623 25.0872 41.6884 25.4156 40.7064 24.8345Z"
        fill="white"
      />
    </Svg>
  );
}

function AddIcon({ width, height, style }: IconProps) {
  return (
    <Svg
      width={width || 32}
      height={height || 32}
      viewBox="0 0 62 63"
      fill="none"
      style={style}
    >
      <Path
        d="M4.23413 16H27.7658"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16 27.7658V4.23413"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

function ProfileIcon({ width, height, style }: IconProps) {
  return (
    <Svg
      width={width || 100}
      height={height || 100}
      viewBox="0 0 62 63"
      fill="none"
      style={style || null }
    >
      <Path
        id="Vector"
        d="M16.2134 14.4934C16.0801 14.4801 15.9201 14.4801 15.7734 14.4934C12.6001 14.3867 10.0801 11.7867 10.0801 8.58675C10.0801 5.32008 12.7201 2.66675 16.0001 2.66675C19.2667 2.66675 21.9201 5.32008 21.9201 8.58675C21.9067 11.7867 19.3867 14.3867 16.2134 14.4934Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        id="Vector_2"
        d="M9.54671 19.4133C6.32004 21.5733 6.32004 25.0933 9.54671 27.2399C13.2134 29.6933 19.2267 29.6933 22.8934 27.2399C26.12 25.0799 26.12 21.5599 22.8934 19.4133C19.24 16.9733 13.2267 16.9733 9.54671 19.4133Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

function NetflixIcon({ width, height }: IconProps) {
  return (
    <Svg
      width={width || 100}
      height={height || 100}
      viewBox="0 0 62 63"
      fill="none"
    >
      <Rect
        x="0.875"
        y="0.75"
        width="54.25"
        height="54.25"
        rx="27.125"
        fill="#292D32"
      />
      <Path
        d="M31.4937 8.88928L31.4762 17.2936L31.4588 25.698L30.6566 23.747V23.742L29.616 42.4516C30.6391 44.9329 31.1856 46.2586 31.1914 46.2636C31.1972 46.2686 31.7785 46.2986 32.4819 46.3286C34.6096 46.4187 37.2489 46.6138 39.2545 46.8289C39.7196 46.8789 40.1149 46.9039 40.1439 46.8839C40.173 46.8639 40.1788 38.3095 40.173 27.8691L40.1556 8.88928H31.4937Z"
        fill="url(#paint0_linear_252_3320)"
      />
      <Path
        d="M15.8247 8.86401V27.8639C15.8247 38.3143 15.8363 46.8737 15.8538 46.8887C15.8712 46.9037 16.6211 46.8387 17.528 46.7537C18.4349 46.6686 19.6848 46.5586 20.3068 46.5135C21.2602 46.4435 24.1204 46.2884 24.4459 46.2834C24.5447 46.2834 24.5505 45.8582 24.5622 38.2343L24.5796 30.1851L25.2714 31.8659C25.376 32.1261 25.4109 32.2061 25.5156 32.4613L26.5562 13.7565C26.3352 13.2213 26.4515 13.5014 26.2015 12.8911C25.3528 10.825 24.6319 9.07912 24.6029 8.99908L24.5447 8.85901H15.8247V8.86401Z"
        fill="url(#paint1_linear_252_3320)"
      />
      <Path
        d="M15.8247 8.86401L24.5738 30.2V30.19L25.2656 31.8708C29.1083 41.2306 31.172 46.2532 31.1837 46.2632C31.1895 46.2682 31.7708 46.2982 32.4742 46.3282C34.6019 46.4183 37.2412 46.6134 39.2468 46.8285C39.7061 46.8785 40.1072 46.9035 40.1305 46.8835L31.4569 25.6926V25.6976L30.6546 23.7466C29.8698 21.8407 29.3466 20.565 26.19 12.8911C25.3412 10.825 24.6204 9.07912 24.5913 8.99908L24.5332 8.85901H20.1789L15.8247 8.86401Z"
        fill="#E30A17"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_252_3320"
          x1="44.0798"
          y1="37.303"
          x2="30.2161"
          y2="43.3914"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#B20610" />
          <Stop offset="0.255959" stop-color="#B20610" />
          <Stop offset="1" stop-color="#590004" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_252_3320"
          x1="11.6206"
          y1="17.1952"
          x2="26.6137"
          y2="10.6868"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#B20610" />
          <Stop offset="0.255959" stop-color="#B20610" />
          <Stop offset="1" stop-color="#590004" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export { AdobeIcon, SpotifyIcon, AddIcon, ProfileIcon, NetflixIcon };