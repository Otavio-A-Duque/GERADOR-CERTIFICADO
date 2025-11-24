import { Component, OnInit } from '@angular/core';
import { BaseUi } from "../../_components/base-ui/base-ui";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { CertificadoService } from '../../_services/certificado-service';
import { Certificado as CertificadoInterface } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css',
})
export class Certificado implements OnInit{
  id: string | null = null;
  certificado: CertificadoInterface | undefined;
  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
    this.id = params.get('id');
    this.certificado = this.certificadoService.certificados.find(
      (item) => item.id == this.id
    );
  })
  console.log(this.certificado);
  }
}
