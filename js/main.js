$(document).ready(function () {
    
    

   

    //mascara telefone
    $('#telefone').mask('(00) 00000-0000')

    //selecionar o for para aplicalo ao plugin
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu email',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
            if (camposIncorretos) {
                alert(` Existem ${camposIncorretos} campos incorretos`)
            }
        }

        //mascara data de nascimento
    // $('#telefone').mask('00/00/0000')

    //mascara para placa de carro
    // $('#telefone').mask('SSS-0000', {
    //     placeholder: 'ABC-1234'
    // })

        
    })  
    
    

    }
    
)