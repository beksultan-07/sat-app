import CollapseItem from "../collapse_Item";
import EmailCollapse from "../collapse_email";
import NameCollapse from "../collapse_name";
import scss from "./style.module.scss";
import PasswordCollapse from "../collapse_password/index";

interface DataType {
    firstName: string;
    lastName: string;
    email: string;
}

interface getItemParams {
    data: DataType;
    setData: React.Dispatch<React.SetStateAction<DataType>>;
    showCollapseItem: boolean[];
    setShowCollapseItem: React.Dispatch<React.SetStateAction<boolean[]>>;
    nameSubmit: () => void;
    emailSubmit: (passwordToConfirm: string) => void;
}

const getItems = ({
    data,
    setData,
    setShowCollapseItem,
    showCollapseItem,
    nameSubmit,
    emailSubmit,
}: getItemParams) => {
    return [
        {
            key: "1",
            label: (
                <CollapseItem
                    showValue={showCollapseItem[0]}
                    title="Name"
                    value={`${data.firstName} ${data.lastName}`}
                />
            ),
            onClick: () => {
                setShowCollapseItem([
                    !showCollapseItem[0],
                    showCollapseItem[1],
                    showCollapseItem[2],
                ]);
            },
            children: (
                <NameCollapse
                    changeLastName={(value) =>
                        setData({ ...data, lastName: value })
                    }
                    changeName={(value) =>
                        setData({ ...data, firstName: value })
                    }
                    firstName={data.firstName}
                    lastName={data.lastName}
                    onSubmit={nameSubmit}
                />
            ),
            className: scss.item,
        },
        {
            key: "2",
            label: (
                <CollapseItem
                    showValue={showCollapseItem[1]}
                    title="Email"
                    value={data.email}
                />
            ),
            onClick: () => {
                setShowCollapseItem([
                    showCollapseItem[0],
                    !showCollapseItem[1],
                    showCollapseItem[2],
                ]);
            },
            children: (
                <EmailCollapse
                    changeEmail={(value) => setData({ ...data, email: value })}
                    email={data.email}
                    onSubmit={emailSubmit}
                />
            ),
            className: scss.item,
        },
        {
            key: "3",
            label: (
                <CollapseItem
                    showValue={showCollapseItem[2]}
                    title="Password"
                    value="*****"
                />
            ),
            children: <PasswordCollapse />,
            className: scss.item,
            onClick: () => {
                setShowCollapseItem([
                    showCollapseItem[0],
                    showCollapseItem[1],
                    !showCollapseItem[2],
                ]);
            },
        },
    ];
};

export default getItems;
