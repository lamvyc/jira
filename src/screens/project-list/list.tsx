import { User } from './search-panel'

interface Project {
    id: string
    name: string
    personId: string
    pin: boolean
    organization: string
}

interface ListProps {
    list: Project[]
    users: User[]
}


export const List = ({ list, users }: ListProps) => {
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(project =>
                    <tr key={project.id}>
                        <td>{project.name}</td>
                        {/*undefined.name报错所以下面加问号，作用:如果是?前面是undefined让整串表达式都是undefined*/}
                        <td>{users.find((user) => user.id === project.personId)?.name || "未知"}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
}