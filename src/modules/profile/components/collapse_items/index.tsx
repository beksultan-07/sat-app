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
    showCollapseItem: [boolean, boolean, boolean];
    setShowCollapseItem: React.Dispatch<
        React.SetStateAction<[boolean, boolean, boolean]>
    >;
    nameSubmit: () => void;
    emailSubmit: () => void;
    passwordSubmit: (password: string) => void;
    setActiveCollapse: (number: number) => void;
    activeCollapse: number;
}

const getItems = ({
    data,
    setData,
    setShowCollapseItem,
    showCollapseItem,
    nameSubmit,
    emailSubmit,
    passwordSubmit,
    setActiveCollapse,
    activeCollapse,
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
                if (activeCollapse === 1) setActiveCollapse(0);
                else setActiveCollapse(1);

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
                if (activeCollapse === 2) setActiveCollapse(0);
                else setActiveCollapse(2);

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
            isActive: true,
            children: <PasswordCollapse passwordSubmit={passwordSubmit} />,
            className: scss.item,
            onClick: () => {
                if (activeCollapse === 3) setActiveCollapse(0);
                else setActiveCollapse(3);

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
