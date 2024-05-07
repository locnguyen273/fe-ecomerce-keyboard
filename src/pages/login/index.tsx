import { Image, Form, Input, Button } from "antd";
import type { FormProps } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/keyboard-center-logo.jpg";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login">
      <Link to={"/"} className="login__top">
        <Image src={Logo} alt="logo" preview={false} />
      </Link>
      <h4 className="login__title">Đăng nhập tài khoản Center Keyboard Shop</h4>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="login__form-control">
          <p className="login__form-control--label">Tên tài khoản:</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Vui lòng nhập tên tài khoản!" }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="login__form-control">
          <p className="login__form-control--label">Mật khẩu:</p>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password />
          </Form.Item>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login__form-control--submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
      <p className="login__bottom">Bạn chưa có tài khoản? <Link className="login__bottom--link" to={"/dang-ky"}>Đăng ký</Link></p>
    </div>
  );
};

export default Login;
