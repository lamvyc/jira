import { useArray, useMount } from "../utils";

interface P {
    name: string
    age: number
}

//TSReactTest一个函数组件
export const TSReactTest = () => {
    const persons: P[] = [
        { name: 'jack', age: 25 },
        { name: 'ma', age: 22 }
    ]



    const { value, clear, removeIndex, add } = useArray(persons)
    //测试ts报错信息的没啥意义
    useMount(() => {
        // console.log(value.notExist)
        // add({name:'david'})
        // removeIndex('123')
    })

    return (
        <div>
            {/*期待点击以后增加 john*/}
            <button onClick={() => add({ name: 'john', age: 22 })}>add john</button>
            {/*期待:点击以后删除第一项*/}
            <button onClick={() => removeIndex(0)}>reomove 0</button>
            {/*期待:点击以后清空列表*/}
            <button style={{ marginBottom: '50px' }} onClick={() => clear()}>clear</button>
            {value.map((person: { age: number, name: string }, index: number) => (
                <div style={{ marginBottom: '30px' }}>
                    <span style={{ color: 'red' }}>{index}</span>
                    <span>{person.name}</span>
                    <span>{person.age}</span>
                </div>
            ))}

        </div>
    )



}
