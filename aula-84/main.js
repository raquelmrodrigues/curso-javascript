class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    eSequencia() {
        return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, - 2);
        const digito1 = this.geraDigito(cpfParcial);
        const digito2 = this.geraDigito(cpfParcial + digito1);
        this.novoCPF = cpfParcial + digito1 + digito2;
    }

    geraDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for(let stringNumerica of cpfParcial) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total  % 11);
        return digito <= 9 ? digito : '0';
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(this.cpfLimpo.length !== 11) return false;
        return'';
        this.geraNovoCpf();
        return this.novoCPF === this.cpfLimpo;  
    }
}

const ValidaCPF = new ValidaCPF('324.234.542.13');