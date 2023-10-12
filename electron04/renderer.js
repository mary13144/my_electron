window.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('btn')
	btn.addEventListener('click', () => {
		const width = Number(document.getElementById('width').value)
		const height = Number(document.getElementById('height').value)
		if (width && height) {
			window.api.toMain(width, height)
		}else {
			alert('请输入宽高')
		}
	})
})