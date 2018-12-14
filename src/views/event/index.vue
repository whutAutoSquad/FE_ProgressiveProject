<template>
  <section class="main" v-loading="loading">
    <el-button @click="getTableData">查询</el-button>
    <el-button @click="dialogVisibleAdd = true">添加</el-button>
    <el-row :gutter="20">
      <!-- 这里的 v-for 只能放在 el-col 标签上. 如果放在其子标签上,标识只有一列,一个数据,然后所有数据往这一列里边填充 -->
      <el-col :span="12" v-for="item in tableData" :key="item._id">
        <el-card shadow="always" class="i-card">
          <div slot="header">
            <span>_id: {{ item._id }}</span>
            <el-tooltip content="删除此条目" placement="top">
              <i class="el-icon-delete operateBtn" @click="deleteItem(item._id)"></i>
            </el-tooltip>
          </div>
          <div>
            <p>Date: {{ item.date }}</p>
            <p>Role: {{ item.role }}</p>
            <p>Locate: {{ item.locate }}</p>
            <p>Details: {{ item.details }}</p>
            <p>Keys: {{ item.keys.join(' ') }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog title="创建事件" :visible.sync="dialogVisibleAdd">
      <el-form ref="form" :rules="rules" :model="formData" label-width="80px">
        <el-form-item label="日期" prop="date">
          <el-date-picker type="date" v-model="formData.date" placeholder="选择日期" value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-input v-model="formData.role"></el-input>
        </el-form-item>
        <el-form-item label="地点" prop="locate">
          <el-input v-model="formData.locate"></el-input>
        </el-form-item>
        <el-form-item label="详情" prop="details">
          <el-input type='textarea' :rows="5" v-model="formData.details"></el-input>
        </el-form-item>
        <el-form-item label="关键字" prop="keys">
          <el-input v-model="formData.keys"></el-input>
          <span>多个关键字需用 空格(space) 分隔开</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm()">确定</el-button>
        <el-button type="warning" @click="resetForm()">重置</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import axios from 'axios';
import moment from 'moment';
export default {
  data() {
    return {
      // loading 模态层
      loading: false,

      // table 表格数据
      tableData: [],

      // dislog 对话框显示控制
      dialogVisibleAdd: false,

      // form 表单数据
      formData: {
        date: moment().format('YYYY-MM-DD')
      },
      // formValidate 表单验证
      rules: {
        date: [
          { required: true, message: '此项必填', trigger: 'change' }
        ],
        role: [
          { required: true, message: '此项必填', trigger: 'blur' }
        ],
        locate: [
          { required: true, message: '此项必填', trigger: 'blur' }
        ],
        details: [
          { required: true, message: '此项必填', trigger: 'blur' }
        ],
        keys: [
          { required: true, message: '此项必填', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    // tableList
    async getTableData() {
      this.loading = true
      let base = this.$url + "/event/list";
      let res = await axios.post(base);
      if (res.status == 200) {
        this.tableData = res.data;
        this.loading = false
      }
    },
    // tableDelete
    deleteItem(ids) {
      let _this = this;
      let base = this.$url + "/event/delete"
      this.loading = true;
      let res = axios.post(base, { ids });
      if (res.status = 200) {
        this.$notify({
          title: '成功',
          message: '已成功删除!',
          type: 'success'
        });
        setTimeout(function() {
          _this.getTableData();
          _this.loading = false;
        }, 500)
      }
    },
    // formData
    async getFormData(id) {

    },
    // formValidate
    submitForm(formName = 'form') {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submit()
        } else {
          return false;
        }
      });
    },
    // formReset
    resetForm(formName = 'form') {
      this.$refs[formName].resetFields();
    },
    // formSubmit
    async submit() {
      let _this = this;
      this.loading = true;
      let base = this.$url + "/event/add"
      let payload = JSON.stringify({
        ...this.formData,
        keys: typeof this.formData.keys == 'string' ? this.formData.keys.split(' ') : this.formData.keys
      });
      let res = axios.post(base, { payload });
      if (res.status = 200) {
        this.dialogVisibleAdd = false;
        this.$notify({
          title: '成功',
          message: '操作成功!',
          type: 'success'
        });
        setTimeout(function() {
          _this.getTableData();
          _this.resetForm('form')
          _this.loading = false;
        }, 500)
      }
    },
  },
  created() {
    this.getTableData();
  }
}

</script>
<style scoped>
.main {
  min-height: 200px;
}

.i-card {
  margin: 10px 0;
  height: 300px;
}

.i-card .text {
  font-size: 14px;
}

.i-card .item {
  padding: 10px 0;
}

.i-card .operateBtn {
  float: right;
  padding: 3px 0;
  cursor: pointer;
}

</style>
