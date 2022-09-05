import React from "react"

export const List = ({ list, users }) => {
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
                    <tr key={project}>
                        <td>{project.name}</td>
                        {/*undefined.name报错所以下面加问号，作用:如果是?前面是undefined让整串表达式都是undefined*/}
                        <td>{users.find((user) => user.id === project.personId)?.name || "未知"}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
}