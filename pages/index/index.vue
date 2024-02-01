<template>
	<view class="">
		<u-form :model="form" ref="uForm">
			<u-form-item label="姓名">
				<u-input v-model="form.name" />
			</u-form-item>
			<u-form-item label="简介">
				<u-input v-model="form.intro" />
			</u-form-item>
			<u-form-item label="性别">
				<u-input v-model="form.sex" type="select" />
			</u-form-item>
			<u-form-item label="水果">
				<u-checkbox-group width="50%">
					<u-checkbox>苹果</u-checkbox>
					<u-checkbox>雪梨</u-checkbox>
					<u-checkbox>柠檬</u-checkbox>
					<u-checkbox>橘子</u-checkbox>
				</u-checkbox-group>
			</u-form-item>
			<u-form-item label="味道">
				<u-radio-group>
					<u-radio>鲜甜</u-radio>
					<u-radio>麻辣</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="开关">
				<u-switch slot="right"></u-switch>
			</u-form-item>
		</u-form>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					intro: '',
					sex: ''
				}
			}
		},
	}
</script>