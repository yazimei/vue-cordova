				formatDate() {
			
							var insertData = new Date(); // 生成当前日期
							var year = insertData.getFullYear();
							var month = (insertData.getMonth() + 1) > 9 ? (insertData.getMonth() + 1) : "0" + (insertData.getMonth() + 1);
							var data1 = insertData.getDate() > 9 ? insertData.getDate() : "0" + insertData.getDate();
							var time1 = insertData.getHours() > 9 ? insertData.getHours() : "0" + insertData.getHours();
							var minute1 = insertData.getMinutes() > 9 ? insertData.getMinutes() : "0" + insertData.getMinutes();
							return year + '.' + month + '.' + data1 + '\xa0' + time1 + ':' + minute1
						},
						returnFileSize(number) {
							if (number < 1024) {
								return number + 'bytes';
							} else if (number >= 1024 && number < 1048576) {
								return (number / 1024).toFixed(1) + 'KB';
							} else if (number >= 1048576) {
								return (number / 1048576).toFixed(1) + 'MB';
							}
						}
            
            
    for (let i = 0; i < nodeDetail.length; i++) {
							var ol = document.querySelector('.preview');
							var ul = document.createElement('ul');
							ul.style = "position: relative; margin-bottom: 30px";
							var li = document.createElement('li');
							var p = document.createElement('p');
							var span = document.createElement('span');
							var img = document.createElement('img');
							p.style = "padding-right: 10px; padding-left: 32px; color: #666666; font-size: 16px; font-weight: 600;"
							span.style = "padding-left: 32px; color: #666666; font-size: 12px; font-weight: normal;"
							p.textContent = nodeDetail[i].fileName;
							span.textContent = nodeDetail[i].fileSize + 'KB' + '\xa0' + nodeDetail[i].updateTime + '上传';
							li.appendChild(p);
							li.appendChild(span);
							if (nodeDetail[i].type == "docx") {
								img.src = '../../../static/img/DOCX.png'
								img.style = "position: absolute; width: 40px; height: auto; left: 16px; top: 0;"
								li.appendChild(img);
							} else if (nodeDetail[i].type == "pdf") {
								img.src = '../../../static/img/PDF.png'
								img.style = "position: absolute; width: 40px; height: auto; left: 16px; top: 0;"
								li.appendChild(img);
							} else if (nodeDetail[i].type == "doc") {
								img.src = '../../../static/img/DOC.png'
								img.style = "position: absolute; width: 40px; height: auto; left: 16px; top: 0;"
								li.appendChild(img);
							}
							ul.appendChild(li);
							ol.appendChild(ul);
							this.$nextTick(function() {
								this.uploadFile()
							})
						}        


// base64转blob
			dataBlob(dataurl) {
				var arr = dataurl.split(','),
					mime = arr[0].match(/:(.*?);/)[1],
					bstr = atob(arr[1]),
					n = bstr.length,
					u8arr = new Uint8Array(n);
				while (n--) {
					u8arr[n] = bstr.charCodeAt(n);
				}
				return new Blob([u8arr], {
					type: mime
				})
			},
			// blob转文件
			blobFile(theBlob) {
				theBlob.lastModifiedDate = new Date();
				return theBlob;
			},
