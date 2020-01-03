export default {
    // post userName passWord rePassWord
    Reg: '/Home/Apis/sampleReg',
    // post userName passWord
    Login: '/Home/Apis/sampleLogin',
    // post token info[id] 修改时必须非空，添加时必须空 info可传数组 info可传json
    Put: '/Home/Apis/samplePut',
    // post limit 可留空，默认值 ：20 page 可留空， 默认值: 1
    List: '/Home/Apis/sampleList',
    // post token id 列表页的ID
    Info: '/Home/Apis/sampleInfo',
    // post page 页码从1开始，不传默认是1 limit 分页长度最少1，不传默认20
    Demo: '/Home/Apis/listWithPage',
    // post file 上传文件 type 上传方式 file[]                      暂不确定 先别用
    DemoUpload: '/Home/Apis/upload',
}