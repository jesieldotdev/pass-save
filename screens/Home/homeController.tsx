import {
  AdobeIcon,
  SpotifyIcon,
  AddIcon,
  ProfileIcon,
  NetflixIcon,
} from "../../components/SVG/Icon";

export interface PasswordList {
  id: number
  title: string 
  email: string 
  icon: any
}

const homeViewController = () => {
  const passwords = [
      {
        id: 1,
        title: 'Adobe',
        email: 'work.stive@gmail.com',
        icon: <AdobeIcon width={46} height={46}/>
      },
      {
        id: 2,
        title: 'Spotify',
        email: 'chill.stive@gmail.com',
        icon: <SpotifyIcon width={46} height={46}/>
      },
      {
        id: 3,
        title: 'Netflix',
        email: 'chill.stive@gmail.com',
        icon: <NetflixIcon width={46} height={46}/>
      },
    ]

    return{
        passwords
    }
}

export default homeViewController