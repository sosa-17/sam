var tipo;

if (document.getElementById('bancoArchivo')) {
    archivos();
}
function archivos(){
    var idar='bancoArchivo';
    $.ajax({
        url:"/archivos",
        dataType:"json",
		method:"GET",
		success:function(res){
            console.log(res.length);
            for (let i = 0; i < res.length; i++) {
                anexarArchivo(res[i],idar);
            }
            
			
		},
		error:function(error){
			console.log(error);
		}
	});
}



function subir(){
    var f = new Date();
    var ide='imagePreview';
	fecha= f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
    console.log(fecha);
    console.log("holaa subi");
    console.log(document.getElementById('arc').files[0].name);


    var fileInput = document.getElementById('arc');
    var filePath = fileInput.value;
    var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        tipo='generico';
    }else{
        tipo='imagen';
    }


    let nombre= document.getElementById('arc').files[0].name;
    let url='uploads/' + nombre;
    let parametros = `url=${url}&nombreArchivo=${nombre}&fechaSubida=${fecha}&tipo=${tipo}`;
    console.log('Información a enviar: ' + parametros);
    $.ajax({
        url:'archivos/',
        method:'POST',
        data:parametros,
        dataType:'json',
        success:(res)=>{
            console.log("inssrtooo...");
            console.log(res);
            anexarArchivo(res,ide);
        },
        error:(error)=>{
            console.log("eeeerrrrrtttttooo...");
            console.error(error);
        }
    });
}
function anexarArchivo(res, id){
    if (res.tipo=='generico') {
        document.getElementById(id).innerHTML += `<tr>
        <td><img src="img/genericos.png" style="width: 40px; height: 60px;"/></td>
        <td>sosa96</td>
        <td>${res.nombreArchivo}</td>
        <td>${res.fechaSubida}</td>
        <td><button type="button" class="btn btn-danger" onclick="eliminar('${res._id}')"><i class="far fa-trash-alt iconot"></i></button></td>
        </tr>`;
    } else {
        document.getElementById(id).innerHTML += `<tr>
        <td><img src="${res.url}" style="width: 50px; height: 40px;"/></td>
        <td>sosa96</td>
        <td>${res.nombreArchivo}</td>
        <td>${res.fechaSubida}</td>
		<td><button type="button" class="btn btn-danger" onclick="eliminar('${res._id}')"><i class="far fa-trash-alt iconot"></i></button></td>
        </tr>`; 
    }
}

function eliminar(id){
	console.log(id);
    $.ajax({
        url:`archivos/${id}`,
        method:'delete',
        dataType:'json',
        success:(res)=>{
            console.log(res);
            if (document.getElementById('bancoArchivo')) {
                document.getElementById('bancoArchivo').innerHTML=``;
                archivos();
            }
            if (res.ok == 1)
                $(`#${id}`).remove();
        },
        error:(error)=>{
            console.error(error);
        }
    });
}