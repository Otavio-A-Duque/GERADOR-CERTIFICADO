import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { PrimaryButton } from "./_components/primary-button/primary-button";
import { SecondaryButton } from "./_components/secondary-button/secondary-button";
import { ItemCertificado } from './_components/item-certificado/item-certificado';
import { BaseUi } from './_components/base-ui/base-ui';
import { Certificados } from "./pages/certificados/certificados";
import { CertificadoForm } from "./pages/certificado-form/certificado-form";
import { CertificadoService } from './_services/certificado-service';


@Component({
  selector: 'app-root',
  imports: [Navbar, BaseUi, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('GERADOR-CERTIFICADO');
  constructor (private certificadoService: CertificadoService){

  }

  ngOnInit(): void {
    const certificado = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificado ? JSON.parse(certificado) : [];
  }
}
