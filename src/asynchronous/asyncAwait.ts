export default async function asyncAwaitSample() {
  const url = 'https://api.github.com/users/deatiger'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const FetchProfile: FetchProfile = async () => {
    const response = await fetch(url)
      .then((res: Response) => res)
      .catch((error) => {
        console.error(error)
        return null
      })

    if (!response) {
      return null
    }

    const json = await response
      .json()
      .then((json: Profile) => {
        console.log('Asynchronous Promise Sample 1:', json)
        return json
      })
      .catch((error) => {
        console.error(error)
        return null
      })

    if (!json) {
      return null
    }

    return json
  }

  const profile = await FetchProfile()
  if (profile) {
    console.log('Asynchronous Promise Sample 2:', profile)
  }
}
