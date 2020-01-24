import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadSuccess, loadFailure } from "./actions";
import {AnyAction} from "redux";


function getItem(item:string) {
    return api.get(`cep/${item}`);
}

export default function* load (action:AnyAction) {
    console.log(action.payload.text);
    try {
        const response = yield call(getItem, action.payload.text);

        yield put(loadSuccess(response.data));
    }
    catch (e) {
        yield put(loadFailure());
    }
}