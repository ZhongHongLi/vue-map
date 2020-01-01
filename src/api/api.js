import api from './http'

//获取列表
export const getlist =params=>api.get('getlist',{id:1})
//删除请求
export const deleteRole=id=>api.deletes('del',{id:2})
//更新请求
export const updateRole=params=>api.put('',{})
//post
export const updatapost=params=>api.post('/login',{})







// methods: {
//     async getUserPageData() {
//         try {
//            const res = await api.get('/usercenter/user/page?pageNo=1&pageSize=10') 
//            // 业务代码......
//            const { result } = res;
//         } catch(error) {
//             // 失败的情况写在catch中
//         }
//     }
// }

