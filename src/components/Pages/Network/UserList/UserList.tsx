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
                status={"«Легко попасть в космос, но сложно достичь орбиты»"}
            />
            <User
                name={"Уоррен Баффетт"}
                status={"«Риск приходит от незнания того, что вы делаете»"}
            />
        </div>
    )
}

export default UserList;