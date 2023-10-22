import {
  AdobeIcon,
  SpotifyIcon,
  AddIcon,
  ProfileIcon,
  NetflixIcon,
  Behance,
  Steam,
  Medium,
} from "../../components/SVG/Icon";
import { Image, Vibration} from 'react-native';
// import {v4 as uidv4} from 'uuid'


export interface PasswordList {
  id: number;
  title: string;
  email: string;
  icon: any;
}

const homeViewController = () => {
  const passwords = [
    {
      id: 1,
      title: "Adobe",
      email: "work.stive@gmail.com",
      icon: <AdobeIcon width={58} height={58} />,
    },
    {
      id: 2,
      title: "Spotify",
      email: "chill.stive@gmail.com",
      icon: <SpotifyIcon width={58} height={58} />,
    },
    {
      id: 3,
      title: "Netflix",
      email: "chill.stive@gmail.com",
      icon: <NetflixIcon width={58} height={58} />,
    },
  ];

  const passwordsList = [
    {
      id: 1,
      sectionTitle: "Priority",
      child: [
        {
          id: 1,
          title: "Behance",
          email: "design.steve@gmail.com",
          icon: <Behance width={58} height={58} />,
        },
        {
          id: 2,
          title: "Adobe",
          email: "work.steve@gmail.com",
          icon: <AdobeIcon width={58} height={58} />,
        },
      ],
    },
    {
      id: 2,
      sectionTitle: "Entertaiment",
      child: [
        {
          id: 1,
          title: "Netflix",
          email: "chill.stive@gmail.com",
          icon: <NetflixIcon width={58} height={58} />,
        },
        {
          id: 2,
          title: "Spotify",
          email: "chill.stive@gmail.com",
          icon: <SpotifyIcon width={58} height={58} />,
        },
        // {
        //   id: 3,
        //   title: 'Steam',
        //   email: 'chill.stive@gmail.com',
        //   icon: <Steam width={58} height={58}/>
        // },
      ],
    },
    {
      id: 3,
      sectionTitle: "Work",
      child: [
        {
          id: 1,
          title: "Medium",
          email: "work.steve@gmail.com",
          icon: <Medium width={58} height={58} />,
        },
        {
          id: 2,
          title: "Google",
          email: "work.steve@gmail.com",
          icon: (
            <Image
              style={{
                width: 52,
                height: 52
              }}
              source={require("../../assets/Images/google.png")}
            />
          ),
        },
      ],
    },
    {
      id: 4,
      sectionTitle: "Social",
      child: [
        {
          id: 1,
          title: "Medium",
          email: "work.steve@gmail.com",
          icon: <Medium width={58} height={58} />,
        },
        {
          id: 2,
          title: "Google",
          email: "work.steve@gmail.com",
          icon: (
            <Image
            
              style={{
                width: 52,
                height: 52
              }}
              source={require("../../assets/Images/google.png")}
            />
          ),
        },
      ],
    },
  ];
  
  const ONE_SECOND_IN_MS = 1000
  
  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    // 2 * ONE_SECOND_IN_MS 
  ];
  
  function vibrate(){
    return Vibration.vibrate(PATTERN, true)
  }

  return {
    passwords,
    passwordsList,
    vibrate,
    Vibration
  };
};

export default homeViewController;
