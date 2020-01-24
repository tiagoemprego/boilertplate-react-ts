import { all, takeLatest } from "redux-saga/effects";
import { RepositoriesTypes } from "./repositories/types";
import { AulasTypes } from "./aulas/types";
import load from "./repositories/sagas";
// import loadAddress from "./addresses/sagas";
import loadAddressAula from "./aulas/sagas";
import {AddressesTypes} from "./addresses/types";

export default function* rootSaga () {
    return yield all([
        takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
        // takeLatest(AddressesTypes.LOAD_REQUEST, loadAddress)
        takeLatest(AulasTypes.LOAD_REQUEST, loadAddressAula),
    ])
}