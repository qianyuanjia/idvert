import loader from '@/utils/loader'   // 路由懒加载
export const Layouts_user = loader(() => import('@/layouts/layouts_user/index')) //  layouts_info
export const Login = loader(() => import('@/pages/login')) // 登录页面
export const Register = loader(() => import('@/pages/register')) // 注册页面
export const Layouts_home = loader(() => import('@/layouts/layouts_home/index')) //  layouts_home
export const Home_ad = loader(() => import('@/pages/home_ad')) // 代标题的表单页面
export const Ad_samples = loader(() => import('@/pages/ad_samples')) // 代标题的表单页面
export const Info = loader(() => import('@/pages/info')) // 详情页面
export const Form_native = loader(() => import('@/pages/form_native')) // 代标题的表单页面
export const Form_list = loader(() => import('@/pages/form_list')) // 代标题的表单页面
export const Samples_list = loader(() => import('@/pages/samples_list')) // 代标题的表单页面
export const Home = loader(() => import('@/pages/home')) // 主页


