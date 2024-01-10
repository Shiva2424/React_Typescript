import axios from 'axios';
import {put, takeEvery, takeLatest, call} from 'redux-saga/effects'
import {IUsers} from '../types'

const fetchUsers = async () => {
    const res = await axios.get<IUsers[]>('https://jsonplaceholder.typicode.com/users');
    return res.data;
}


function* getUsersFetch() : any {
    const response:IUsers[] = yield call(fetchUsers);
    //const users = response.map(item => item.name)
    yield put({type: 'GET_USERS_DATA',payload: response})
    // .then(res => res.json())
    //  .then(res => {
    //     const users = res.map(item => item.name)
    //     put({type: 'GET_USERS_DATA',payload: users})
    //  })
}

function* mysaga() {
yield takeEvery('GET_USERS', getUsersFetch)
}

export default mysaga;