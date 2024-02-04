<template>
  <div class="login-wrapper">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login-form"
          ref="loginFormRef"
          :model="loginForm"
          :rules="rules"
        >
          <h1>hello</h1>
          <p>欢迎来到cc运营系统</p>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              show-password
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="login-btn"
              :loading="loading"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'
import { getTimePeriod } from '@/utils/time'
import type { FormInstance, FormRules } from 'element-plus'

import type { LoginForm } from '@/api/user/type'

const loginForm = reactive<LoginForm>({ username: 'admin', password: '111111' })

const user = useUserStore()
const router = useRouter()

const loading = ref(false)
const loginFormRef = ref()
console.log('loginFormRef', loginFormRef)
const login = async () => {
  await loginFormRef.value.validate()
  loading.value = true
  try {
    await user.getLogin(loginForm)
    ElNotification({
      type: 'success',
      message: '登录成功',
      title: `hello,${getTimePeriod()}好`,
    })
    router.push('/')
  } catch (err) {
    console.log('err', err)
    ElNotification({
      type: 'error',
      message: err as string,
    })
  } finally {
    loading.value = false
  }
}
const validatorUsername = (rule: any, value: string, callback: any) => {
  if (value.length >= 5 && value.length <= 10) {
    callback()
  } else {
    callback(new Error('用户名为5-10位'))
  }
}
const rules = reactive<FormRules<LoginForm>>({
  username: [
    {
      trigger: 'change',
      validator: validatorUsername,
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      min: 6,
      max: 10,
      trigger: 'change',
    },
  ],
})
</script>
<style scoped lang="scss">
.login-wrapper {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}
.login-form {
  width: 80%;
  position: relative;
  top: 30vh;
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover;
  padding: 40px;
  h1 {
    color: #fff;
    font-size: 40px;
  }
  p {
    color: #fff;
    font-size: 20px;
    margin: 20px 0;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
