import ReactDOM from "react-dom";
import Form from "./component-library/Form";
import Input from "./component-library/Input";

export default function() {
    ReactDOM.render(
        <Form method="POST" uploadFile={true}>
            用户名：<Input name="username"  />
            密码：<Input name="password" type="password"  />
            邮箱：<Input name="email" type="email"  />           
            性别：男<Input name="gender" type="radio"  /> 女<Input name="gender" type="radio"  />            
            头像：<Input name="file" type="file"  /> 
            <Input type="submit" value="提交" />
        </Form>, 
        document.querySelector("#react"));
}