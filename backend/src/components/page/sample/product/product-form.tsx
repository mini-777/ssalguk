import { IProductFormValue, createProduct, updateProduct } from "@/client/sample/product";
import CodemirrorEditor from "@/components/shared/form/control/codemirror-editor";
import QuillEditor from "@/components/shared/form/control/quill-editor";
import DefaultForm from "@/components/shared/form/ui/default-form";
import FormGroup from "@/components/shared/form/ui/form-group";
import FormSection from "@/components/shared/form/ui/form-section";
import { Button, Divider, Form, Input, message } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useState } from "react";

interface IProductFormProps {
  id?: string;
  initialValues?: Partial<IProductFormValue>;
}

const ProductForm = ({ id, initialValues }: IProductFormProps) => {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleFinish = async (formValue: IProductFormValue) => {
    try {
      setIsLoading(true);

      if (id) {
        await updateProduct(id, formValue);
        messageApi.success("수정되었습니다");
      } else {
        await createProduct(formValue);
        messageApi.success("생성되었습니다");
      }
    } catch (e: unknown) {
      messageApi.error("에러가 발생했습니다");
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  return (
    <>
      {contextHolder}
      <DefaultForm<IProductFormValue> form={form} initialValues={initialValues} onFinish={handleFinish}>
        <FormSection title="기본정보" description="사용자 기본 정보를 입력해주세요">
            <FormGroup title="이름*">
            <Form.Item name="name" rules={[{ required: true, message: "필수값입니다" }]}>
              <Input placeholder="이름을 입력하세요" />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="닉네임*">
            <Form.Item name="status" rules={[{ required: true, message: "필수값입니다" }]}>
              <Input placeholder="닉네임을 입력하세요" />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="ID*">
            <Form.Item name="code" rules={[{ required: true, message: "필수값입니다" }]}>
              <Input placeholder="ID를 입력하세요" />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="휴대폰 번호*">
            <Form.Item name="phone_number" rules={[{ required: true, message: "필수값입니다" }]}>
              <Input placeholder="휴대폰 번호를 입력하세요" />
            </Form.Item>
          </FormGroup>
        </FormSection>

        <FormSection title="사용자 상세" description="사용자 상세 정보를 입력해주세요">
          <FormGroup title="사용자 상세">
            <Form.Item name="description">
              <QuillEditor />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="CSS/JS">
            <Form.Item name="css">
              <CodemirrorEditor />
            </Form.Item>
            <Form.Item name="js">
              <CodemirrorEditor />
            </Form.Item>
          </FormGroup>
        </FormSection>

        <div className="text-center">
          <Button htmlType="submit" type="primary" loading={isLoading}>
            저장
          </Button>
        </div>
      </DefaultForm>
    </>
  );
};

export default React.memo(ProductForm);
