import { FormEvent } from "react"



const apiUrl = process.env.REACT_APP_API_URL
// console.log(apiUrl)
export const LoginScreen = () => {

    const login = (param: { username: string, password: string }) => {
        fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        }).then(
            async (response: Response) => {
                if (response.ok) {

                }
            }
        )
    }

    /*
        interface Base{
            id:number
        }
    
        interface Advance extends Base{
            name:string
        }
        
        const test = (p:Base) => { 
        }

        const a:Advance= {id:1,name:'jack'}
        test(a)//没有报错
        */

    //鸭子类型:面向接口编程，而不是面向对象编程
    //HTMLFormElement extends Element

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()//阻止表单提交的默认行为
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value
        login({ username, password })
    }


    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">用户名</label>
            <input type="text" id={'username'} />
        </div>
        <div>
            <label htmlFor="password">密码</label>
            <input type="password" id="password" />
        </div>
        <button type={'submit'}>登录</button>

    </form>
}