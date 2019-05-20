function capNome(){
	var campoNome = document.getElementById('nomeOrigem').value;
	document.getElementById('nomeDestino').innerHTML = campoNome;
}

function capDepartamento(){
	var campoDepartamento= document.getElementById('departamentoOrigem').value;
	document.getElementById('departamentoDestino').innerHTML = campoDepartamento;
}

function capTel(){
	var campoTel= document.getElementById('telefoneOrigem').value;
	document.getElementById('telefoneDestino').innerHTML = campoTel;
}

function capEmail(){
	var campoEmail= document.getElementById('emailOrigem').value;
	document.getElementById('emailDestino').innerHTML = campoEmail;
}

function capUrl(){
	var campoUrl= document.getElementById('urlOrigem').value;
	document.getElementById('urlDestino').innerHTML = campoUrl;
}

function dataSave(){
	var campoNome = document.getElementById('nomeOrigem').value;
	localStorage.setItem("nome", campoNome);
	var campoDepartamento = document.getElementById('departamentoOrigem').value;
	localStorage.setItem("departamento", campoDepartamento);
	var campoTel = document.getElementById('telefoneOrigem').value;
	localStorage.setItem("telefone", campoTel);
	var campoEmail = document.getElementById('emailOrigem').value;
	localStorage.setItem("email", campoEmail);
	var campoUrl = document.getElementById('urlOrigem').value;
	localStorage.setItem("url", campoUrl);
	window.open('assinatura.html');
	dataGet();
}

function dataGet(){
	var nome = localStorage.getItem("nome")||'nome';
	document.getElementById('nomeDestino').innerHTML = nome;

	var departamento = localStorage.getItem("departamento")||'nome';
	document.getElementById('departamentoDestino').innerHTML = departamento;

	var telefone = localStorage.getItem("telefone")||'nome';
	document.getElementById('telefoneDestino').innerHTML = telefone;
	document.getElementById('telefoneDestino').setAttribute('href', 'tel:+55'+telefone);

	var email = localStorage.getItem("email")||'nome';
	document.getElementById('emailDestino').innerHTML = email;
	document.getElementById('emailDestino').setAttribute('href', 'mailto:'+email+'?subject=AddAssunto');

	var url = localStorage.getItem("url")||'nome';
	//document.getElementById('urlDestino').innerHTML = url;
	document.getElementById('urlDestino').setAttribute('href', url);
}