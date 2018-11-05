<template>
  <section class="aside">
    <divider />
    <el-button type="text" plain @click="dialogFormVisible = true" icon="el-icon-plus" ></el-button>
    <divider />
    <el-button type="text" plain @click="toggleAsideMenuCollapse" :icon="this.isCollapse ? 'el-icon-caret-right' : 'el-icon-caret-left' " style="width: 95%"></el-button>
  	<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1" disabled>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4" disabled>
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    <divider />

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="标题" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="内容详情" :label-width="formLabelWidth">
          <el-input v-model="form.details" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="insertData">确 定</el-button>
      </div>
    </el-dialog>

  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      isCollapse: true,

      gridData: [{
        title: 'This is a title.',
        details: 'This is the details.'
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        title: '',
        details: '',
      },
      formLabelWidth: '120px'
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleAsideMenuCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    insertItem() {
      console.log('insertItem');
    },
    insertData () {
      this.$store.dispatch('insertData', this.form);
      this.dialogFormVisible = false;
      console.log(this.form);
    }

  }
}
</script>

<style scoped>
.aside {
  padding: 20px 0 20px 15px;
}

.aside .el-menu {
  border-right: none;
}

.aside .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
}

.aside .el-button--text {
  width: 95%;
}
</style>
