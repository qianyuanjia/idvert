import React from 'react';
import './styles.less'
import {
    Form,
    Select,
    Button,
    Input,
    Upload,
    Icon,
    message,
    DatePicker,
} from 'antd';
import { connect } from 'react-redux';
import { home_form } from '@/actions/home'
import { HOME_AD } from '@/constants/actionTypes'
import { hump } from '@/utils/string'
import moment from 'moment';

const { Option } = Select;
const { TextArea } = Input;
const { WeekPicker } = DatePicker

export default @Form.create()
@connect(state => {
    // console.log(state)
    return {
        
    }
}, {
    home_sub: home_form[hump(HOME_AD)]
})
class extends React.PureComponent {
    state = {
        loading: false,
    };
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            const { getBase64 } = this
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    // 上传之前的验证
    beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    normFile = e => {
        // console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    // 提交表单
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { title, info, http, cod, content, typeImg, endTime: { _d }, upload } = values
                let imgUrl = upload[0].response.url
                let endTime = moment(_d.getTime()).format('YYYY-MM-DD HH:mm:ss')
                let createTime = moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
                let sub = {
                    title,
                    info,
                    http,
                    cod,
                    content,
                    typeImg,
                    endTime,
                    createTime,
                    imgUrl,
                }
                console.log(sub)
                this.props.home_sub(sub)
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            }
        });
    };
    render() {
        const {
            beforeUpload,
            handleChange,
            normFile,
            onChange,
            props: { form: { getFieldDecorator } },
            state: { imageUrl }
        } = this
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className='home_ad'>
                <div className="title_from">
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>

                        <Form.Item label="标题">
                            {getFieldDecorator('title', {
                                rules: [{ required: true, message: '请选择你的标题' }],
                            })(
                                <Select placeholder="请选择你的标题">
                                    <Option value="china">China</Option>
                                    <Option value="usa">U.S.A</Option>
                                </Select>,
                            )}
                        </Form.Item>

                        <Form.Item label="描述信息">
                            {getFieldDecorator('info', {
                                rules: [{ required: true, message: '请输入你的描述信息' }],
                            })(<Input />)}
                        </Form.Item>

                        <Form.Item label="图片">
                            {getFieldDecorator('upload', {
                                rules: [{ required: true, message: '请选择你的图片' }],
                                valuePropName: 'fileList',
                                getValueFromEvent: normFile,
                            })(
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    beforeUpload={beforeUpload}
                                    onChange={handleChange}
                                >
                                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                </Upload>
                            )}
                        </Form.Item>

                        <Form.Item label="内容">
                            {getFieldDecorator('content', {
                                rules: [{ required: true, message: '请输入你要描述的内容' }],
                            })(<TextArea rows={4} />)}
                        </Form.Item>

                        <Form.Item label="日期">
                            {getFieldDecorator('endTime', {
                                rules: [{ required: true, message: '请选择你到期时间' }],
                            })(<WeekPicker onChange={onChange} placeholder="请选择你到期时间" />)}
                        </Form.Item>

                        <Form.Item label="图片类型">
                            {getFieldDecorator('typeImg', {
                                rules: [{ required: true, message: '请选择你的图片类型' }],
                            })(
                                <Select placeholder="请选择你的图片类型">
                                    <Option value="static">静态图片</Option>
                                    <Option value="banner">静态滚动图片</Option>
                                    <Option value="audio">静态视频</Option>
                                </Select>,
                            )}
                        </Form.Item>

                        <Form.Item label="COD">
                            {getFieldDecorator('cod', {
                                rules: [{ required: true, message: '请选择你的COD' }],
                            })(
                                <Select placeholder="请选择你的COD">
                                    <Option value="Other">Other</Option>
                                    <Option value="Diet">Diet</Option>
                                    <Option value="Casino">Casino & Crypto</Option>
                                </Select>,
                            )}
                        </Form.Item>

                        <Form.Item label="域名">
                            {getFieldDecorator('http', {
                                rules: [{ required: true, message: '请输入你的域名' }],
                            })(<Input />)}
                        </Form.Item>

                        <Form.Item wrapperCol={{ span: 12, offset: 11 }}>
                            <Button type="primary" htmlType="submit">
                                提交
                            </Button>
                        </Form.Item>

                    </Form>
                </div>
            </div>
        )
    }
}
