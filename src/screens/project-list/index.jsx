import React from "react"
import { SearchPanel } from "./search-panel"
import { List } from "./list"
import { useState, useEffect } from "react"
import { cleanObject, useDebounce } from "../../utils"
import qs from "qs"
import { useMount } from "../../utils"


//读取.env
const apiUrl = process.env.REACT_APP_API_URL
console.log(apiUrl)
export const ProjectListScreen = () => {
    //变量提升
    const [param, setParam] = useState({
        name: '',
        personId: ""
    })
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])
    const debounceParam = useDebounce(param,2000)

    useEffect(() => {
        // fetch(`${apiUrl}/projects?name=${param.name}&personId=&{param.personId}`).then(async response => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response => {
            // console.log(response)
            if (response.ok) {
                setList(await response.json())//让list拿到值
            }
        })
    }, [debounceParam])

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())//让users拿到值
            }
        })
    })



    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
        <List users={users} list={list}></List>
    </div>
}