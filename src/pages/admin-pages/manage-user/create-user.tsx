import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Switch, Select, Button } from "antd";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      mobile: "",
      status: true,
      isBlocked: false,
      address: "",
      role: 0,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(10, "Mininum 10 characters")
        .max(50, "Maximum 50 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Required!"),
      mobile: Yup.string().required("Required!"),
    }),
    onSubmit: () => {},
  });

  const handleSubmitForm = (event:React.FormEvent) => {
    event.preventDefault();
    console.log(formik.values); 
  }

  const handleCancel = () => {
    navigate('/admin/manage-user');
  }

  return (
    <div className="create-user">
      <div className="create-user__container">
        <form>
          <div className="create-user__row">
            <div className="create-user__col">
              <label>Họ và tên:</label>
              <Input
                type="text"
                placeholder="Vui lòng nhập họ và tên"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
              />
            </div>
            <div className="create-user__col">
              <label>Email:</label>
              <Input
                type="email"
                placeholder="Vui lòng nhập email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="create-user__row">
            <div className="create-user__col">
              <label>Mật khẩu:</label>
              <Input
                placeholder="Vui lòng nhập mật khẩu"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>

            <div className="create-user__col">
              <label>Số điện thoại:</label>
              <Input
                placeholder="Vui lòng nhập số điện thoại"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="create-user__row">
            <div className="create-user__col">
              <label>Địa chỉ:</label>
              <Input
                placeholder="Vui lòng nhập địa chỉ"
                name="password"
                value={formik.values.address}
              />
            </div>

            <div className="create-user__col">
              <label>Vai trò:</label>
              <Select
                placeholder="Vui lòng chọn vai trò"
                allowClear
                options={[{ value: "lucy", label: "Lucy" }]}
              />
            </div>
          </div>
          <div className="create-user__row">
            <div className="create-user__col-switch">
              <label>Trạng thái:</label>
              <Switch defaultValue={formik.values.status} />
            </div>

            <div className="create-user__col-switch">
              <label>Khóa tài khoản:</label>
              <Switch defaultValue={formik.values.isBlocked} />
            </div>
          </div>

          <div className="create-user__group-btn">
            <Button 
              onClick={handleCancel}
              className="create-user__group-btn--cancel"
            >
              Hủy
            </Button>
            <Button 
              className="create-user__group-btn--add"
              onClick={(event: React.FormEvent) => handleSubmitForm(event)}>
                Thêm mới
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
