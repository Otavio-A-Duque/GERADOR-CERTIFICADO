import { Component, ViewChild } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';
import { CertificadoService } from '../../_services/certificado-service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css',
})
export class CertificadoForm {

  constructor(private certificadoService: CertificadoService, private route : Router) { }
  @ViewChild('form') form!: NgForm;

  id: string = '';
  nome: string = '';
  atividade: string = '';
  atividades: string[] = [];
  dataEmissao: string = '';

  certificado: Certificado | undefined;

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched;
  }

  formValido() {
    return this.atividades.length > 0 && this.nome.length > 0;
  }

  adicionarAtividade() {
    if(this.atividade.length == 0 ){
      return;
    }
    this.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number) {
    this.atividades.splice(index, 1);
  }

  submit() {
    if (this.formValido()) {
      this.certificado = {
        id: uuidv4(),
        nome: this.nome,
        atividades: this.atividades,
        dataEmissao: this.dataAtual()
      }
    }
    this.certificadoService.adicionarCertificado(this.certificado!);
    this.route.navigate(['certificados', this.certificado?.id]);

    // this.id = '';
    // this.nome = '';
    // this.atividade = '';
    // this.atividades = [];
    // this.dataEmissao = '';

    // this.form.resetForm();
    // Faz com que o formulário volte ao estado inicial
  }

  dataAtual() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }
}

