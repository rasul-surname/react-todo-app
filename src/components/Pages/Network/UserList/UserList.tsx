import User from './User/User';

const UserList = () => {

    return (
        <div>
            <User
                name={"Дональд Трамп"}
                status={"«- Вы за Байдена или за Трампа?\n" +
                "                        - Я за попкорном!»"}
            />
            <User
                name={"Илон Маск"}
                status={"«Neque porro quisquam est qui dolorem ipsum»"}
            />
            <User
                name={"Уоррен Баффетт"}
                status={"«Neque porro quisquam est qui dolorem ipsum»"}
            />
        </div>
    )
}

export default UserList;