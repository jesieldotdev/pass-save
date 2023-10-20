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

  const passwordsList = [
    {
      id: 1,
      sectionTitle: 'Priority',
      child: passwords
    },
    {
      id: 2,
      sectionTitle: 'Entertaiment',
      child: passwords
    },
    {
      id: 3,
      sectionTitle: 'Work',
      child: passwords
    },
  ]

    return{
        passwords,
        passwordsList
    }
}

export default homeViewController