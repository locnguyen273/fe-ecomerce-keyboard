import { Button, Space, Table, Tag, Switch } from "antd";
import type { TableProps } from "antd";
import { useNavigate } from "react-router-dom";

interface DataType {
  key: string;
  fullName: string;
  email: string;
  mobile: string;
  isBlocked: boolean;
  role: number;
}

const HomeManageUser = () => {
  const navigate = useNavigate();
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Họ và tên",
      dataIndex: "fullName",
      key: "fullName",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Trạng thái",
      dataIndex: "isBlocked",
      key: "isBlocked",
      render: (isBlocked) => (
        <Switch size="small" defaultChecked={!isBlocked} onChange={onChangeToggleActive} />
      ),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <Tag color={role === 1 ? "geekblue" : "green"} className="manage-user__table-box">
          {role === 1 ? "Admin" : "User"}
        </Tag>
      ),
    },
    {
      title: <Button onClick={() => handleCreateNewUser()} className="manage-user__btn-add">Thêm Người Dùng</Button>,
      key: "action",
      render: (key) => (
        <Space size="middle">
          <Button className="manage-user__btn-delete">
            <i className="fa-solid fa-trash">
              </i></Button>
          <Button className="manage-user__btn-edit"  onClick={() => handleUpdateUser(key?.key)}>
            <i className="fa-regular fa-pen-to-square"></i>
          </Button>
        </Space>
      ),
    },
  ];
  const data: DataType[] = [
    {
      key: "1",
      fullName: "John Brown",
      email: "Brown@gmail.com",
      mobile: "0987654321",
      isBlocked: false,
      role: 1,
    },
    {
      key: "2",
      fullName: "John Brown",
      email: "Brown@gmail.com",
      mobile: "0987654321",
      isBlocked: true,
      role: 0,
    },
    {
      key: "3",
      fullName: "John Brown",
      email: "Brown@gmail.com",
      mobile: "0987654321",
      isBlocked: false,
      role: 0,
    },
  ];

  const onChangeToggleActive = () => {};

  const handleCreateNewUser = () => {
    navigate('/admin/manage-user/create')
    console.log("create new user");
  };

  const handleUpdateUser = (userId: string) => {
    navigate(`/admin/manage-user/update/${userId}`)
    console.log("create new user", userId);
  };

  return (
    <div className="manage-user">
      <div className="manage-user__container">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default HomeManageUser;
