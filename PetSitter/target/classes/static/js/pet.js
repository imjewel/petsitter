let index={
	init: function(){
		$("#btn-petsave").on("click",()=>{
			//화살표 함수사용 이유: this를 바인딩하기 위해 사용
			this.save();
		});
	},

  save: function() {
	    let data = {
	      id: $("#id").val(),
	      name: $("#name").val(),
	      category: $("input[name='category']:checked").val(),
	      gender: $("input[name='gender']:checked").val(),
	      pet_type: $("#pet_type").val(),
	      weight: $("#weight").val(),
	      age: $("#age").val(),
	      neutered: $("input[name='neutered']:checked").val(),
	      hospital: $("#hospital").val(),
	      vaccine: $("input[name='vaccine']:checked").val(),
	      etc: $("#etc").val(),
	      img: $("#files").prop("files")[0]
	    };
	    let formData = new FormData();
	    formData.append("data", JSON.stringify(data));
	    formData.append("img", data.img);
		$.ajax({ 
			type:"POST",
			url:"/api/pet",
			data:JSON.stringify(data), 
			contentType:"application/json; charset=utf-8",
			dataType:"json" 
		}).done(function(resp){
			alert("펫정보 등록이 완료되었습니다.");
			location.href="/petProfile";
		}).fail(function(error){
			alert(JSON.stringify(error));
		});
  }
};
index.init();