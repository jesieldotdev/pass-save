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
        icon: <AdobeIcon width={58} height={58}/>
      },
      {
        id: 2,
        title: 'Spotify',
        email: 'chill.stive@gmail.com',
        icon: <SpotifyIcon width={58} height={58}/>
      },
      {
        id: 3,
        title: 'Netflix',
        email: 'chill.stive@gmail.com',
        icon: <NetflixIcon width={58} height={58}/>
      },
    ]

  const passwordsList = [
    {
      id: 1,
      sectionTitle: 'Priority',
      child: [
        {
          id: 1,
          title: 'Behance',
          email: 'design.steve@gmail.com',
          icon: <Behance width={58} height={58}/>
        },
        {
          id: 2,
          title: 'Adobe',
          email: 'work.steve@gmail.com',
          icon: <AdobeIcon width={58} height={58}/>
        },

      ]
    },
    {
      id: 2,
      sectionTitle: 'Entertaiment',
      child: [
        {
          id: 1,
          title: 'Netflix',
          email: 'chill.stive@gmail.com',
          icon: <NetflixIcon width={58} height={58}/>
        },
        {
          id: 2,
          title: 'Spotify',
          email: 'chill.stive@gmail.com',
          icon: <SpotifyIcon width={58} height={58}/>
        },
        // {
        //   id: 3,
        //   title: 'Steam',
        //   email: 'chill.stive@gmail.com',
        //   icon: <Steam width={58} height={58}/>
        // },
      ]
    },
    {
      id: 3,
      sectionTitle: 'Work',
      child: [
        {
          id: 1,
          title: 'Medium',
          email: 'work.steve@gmail.com',
          icon: <Medium width={58} height={58}/>
        },
      ]
    },
  ]

    return{
        passwords,
        passwordsList
    }
}

export default homeViewController