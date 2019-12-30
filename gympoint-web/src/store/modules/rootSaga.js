import { all } from "redux-saga/effects";

import authSagas from "./auth/sagas";
import studentSagas from "./student/sagas";

export default function* rootSaga() {
  return yield all([authSagas, studentSagas]);
}
