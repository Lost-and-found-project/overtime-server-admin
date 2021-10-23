import {
  setStorage,
  getStorage,
  removeStorage,
  setSession,
  getSession,
  removeSession
} from "../utils/storage.js"

import * as C from "./constants.js"

export const setTabList = (p) => setSession(C.ADMIN_TABLIST, p)
export const getTabList = () => getSession(C.ADMIN_TABLIST, true)

export const setTabPath = p => setSession(C.ADMIN_TABPATH, p)
export const getTabPath = () => getSession(C.ADMIN_TABPATH, true)