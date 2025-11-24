import { Injectable } from '@angular/core';
import { Certificado } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root',
})
export class CertificadoService {
  getCertificadoById(arg0: string): import("../pages/certificado/certificado").Certificado | undefined {
    throw new Error('Method not implemented.');
  }
  certificados: Certificado[] = [];
  constructor() { }

  adicionarCertificado(certificado: Certificado) {
    this.certificados.push({ ...certificado });
    console.log('Certificado adicionado:', this.certificados);
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }
}
