<template>
    <div class="login">
        <div class="loginContent">
            <div class="loginDiv">
                <el-form
                    ref="ruleFormRef"
                    :model="ruleForm"
                    status-icon
                    :rules="rules"
                    label-width="120px"
                    class="demo-ruleForm"
                >
                    <el-form-item label="账号" prop="account">
                        <el-input v-model="ruleForm.account" type="text" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="验证码" prop="verificationCode">
                        <el-input v-model.verificationCode="ruleForm.verificationCode" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import axios from 'axios'

const ruleFormRef = ref<FormInstance>()

// 验证码校验
const checkVerificationCode = (rule: any, value: any, callback: any) => {
    if (!value) {
        return callback(new Error('请输入验证码'))
    }
    setTimeout(() => {
        if (value > 9999 && value < 1000) {
            callback(new Error('验证码输入错误'))
        } else {
            callback()
        }
    }, 1000)
}

// 密码校验
const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else {
        if (ruleForm.pass !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('pass', () => null)
        }
        callback()
    }
}

// 账号校验
const validateAccount = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入账号'))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    account: '',
    pass: '',
    verificationCode: '',
})

const rules = reactive({
    account: [{ validator: validateAccount, trigger: 'blur' }],
    pass: [{ validator: validatePass, trigger: 'blur' }],
    verificationCode: [{ validator: checkVerificationCode, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate(async (valid) => {
        if (valid) {
            const params:any = {
                phone: ruleForm.account,
                passward: ruleForm.pass,
            }
            // const res = await axios.post("/login/cellphone", params)
            // if (res.data.code === 0) {
            //     console.log("登录成功");
            // } else {
            //     console.log("登录失败");
            //     console.log(res);
            // }
            console.log(params);
            
            axios.get("/login/cellphone", {params}).then((resthen)=>{
                console.log(resthen);                
            })

        } else {
            console.log('error submit!')
            return false
        }
    })
}

// 重置表单
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>

<style scoped>
.login {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(97.5vh);
    text-align: center;
    background-image: url(../assets/Login.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.loginContent {
    margin-left: calc(80vh);
    padding-left: calc(50vh);
    margin-top: calc(10vh);
    width: calc(50vh);
    height: 150px;
    color: black;
}
.loginDiv {
    background-color: rgba(255, 255, 255, 0.5);
    height: 250px;
    width: calc(60vh);
    margin-right: calc(15vh);
}
.el-form {
    width: calc(50vh);
    height: calc(50vh);
    padding-top: calc(5vh);
}
</style>