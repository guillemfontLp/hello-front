import { createAction } from "@reduxjs/toolkit";
import { LoadUserResponse } from "api";

export const loadingUser = createAction("user/loading");
export const loadUser = createAction<LoadUserResponse>("user/load");
export const loadUserFail = createAction("user/load-fail");
export const logoutUser = createAction<string | undefined>("user/logout");
export const setRedirectUrl = createAction<string | undefined>("user/setRedirectUrl");
