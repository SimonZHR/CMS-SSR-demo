<template>
	<div>
		<vheader title="新建问题" :showBack="true"></vheader>
		<div class="form">
			<group>
				<popup-picker style="font-size: 14px; " title="分类" v-model="value1" :data="types" popup-title="选择分类" cancel-text="取消" confirm-text="确定" ></popup-picker>
			</group>
			<div class="line">
				标题
			</div>
			<div class="line">
				图片上传
			</div>
			<div class="pics">
				<!-- <div class="pic" v-for="(item,index) in pics" :data-idx="index">	bind the index to custom attribute data-idx-->
				<div class="pic" v-for="(item, index) in pics">
					<img :src="item.src" v-if="item.src != ''" class="mainPic">
					<label :for="index" v-else></label>
					<input :id="index" type="file" accept="image/*" @change="chooseImage(index)">
					<img v-if="item.src != ''" src="./../../static/imgs/deletePic.png" @click="deletePic(index)" class="delete">
					<img v-else src="./../../static/imgs/addPic.png" class="add">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
//import vheader from './../components/Header.vue'
import {PopupPicker, Group} from 'vux'

export default {
	components: {
		//vheader: vheader
		PopupPicker,
		Group
	},
	data() {
		return {
			types: [['漆面维护', '车身维修', '美容保养', '机械维修']],
			value1: ['选择'],
			pics: [{src: ''}, {src: ''}, {src: ''}]
		}
	},
	methods: {
		chooseImage(index) {
			//console.log(event.target.dataset.idx)
			var inputDom = document.getElementById(index)
			var file = inputDom.files[0]
			var reader = new FileReader()
			reader.addEventListener("load", () => {
			    this.pics[Number(index)].src = reader.result;
		  	}, false);
		  	if(file) {
				reader.readAsDataURL(file)
		  	}
		},
		deletePic(index) {
		    this.pics[Number(index)].src = "";
		}
	},
	created() {

	}
}

</script>

<style scoped>
.form {
	margin-top: 45px;
	padding: 20px;
}
.line {
	padding: 10px 15px;
	font-size: 14px;
	background-color: #fff;
	border-bottom: solid 1px #e6e6e6; 
}
.pics {
	display: flex;
	padding: 15px 0;
	justify-content: space-between;
}

.pics .pic {
	width: 100px;
	height: 100px;
	border: solid 1px #e6e6e6;
	background-color: #fff;
	position: relative;
}
.pics .pic .mainPic {
	width: 100%;
	height: 100%;
}

.pics .pic label {
	display: block;
	width: 50%;
	height: 50%;
	margin: 0 auto;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	z-index: 999;
}

.pics .pic input {
	display: none;
}

.pics .pic .delete {
	height: 17px;
	width: 17px;
	position: absolute;
	top: -7px;
	right: -7px;
}

.pics .pic .add {
	height: 25px;
	width: 25px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateY(-50%) translateX(-50%);
}
</style>