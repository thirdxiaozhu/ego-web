import { ss } from '@/utils/storage'
import {mlog} from "@/api";

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  userBalance: number
  userGrade: string
  nickName: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://avatars.githubusercontent.com/u/32251822?v=4',
      userBalance: 0,
      userGrade: '0',
      nickName: '',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  // return { ...defaultSetting(), ...localSetting }
  return localSetting || defaultSetting()
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, { userInfo: setting })
}
