import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from '../services/project.service';

declare var $: any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: any[] = [];
  selectedProject: any;
  user: any = null;

  projetForm = this.fb.group({
    name: ["", Validators.required],
    domain: ["", Validators.required],
    funding: [0, Validators.required],
    duration: [0, Validators.required],
    description: ["", Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private projetService: ProjectService
  ) { }

  ngOnInit(): void {
    if (window.localStorage.getItem('mini-projet-user')) {
      this.user = JSON.parse(window.localStorage.getItem('mini-projet-user') ?? '{}');
    }
    this.load();
  }

  load() {
    this.projetService.getAll().subscribe(
      (data: any) => {
        this.projects = data;
      }
    )
  }

  save() {
    this.projetForm.value.user = this.user;
    this.projetService.store(this.projetForm.value).subscribe(
      (data: any) => {
        alert(`Votre projet ${data?.name} a été créer`);
        this.projetForm.reset();
        $('#exampleModal').modal('hide');
        this.load();
      }
    )
  }

  cancel() {
    this.projetForm.reset();
  }

  edit(item: any) {
    this.selectedProject = item;
    this.projetForm.setValue({
      name: item?.name,
      domain: item?.domain,
      funding: item?.funding,
      duration: item?.duration,
      description: item?.description
    });
    $('#editModal').modal('show');
  }

  update() {
    this.projetService.update(this.selectedProject?.id, this.projetForm.value).subscribe(
      (data: any) => {
        alert(`Votre projet ${data?.name} a été modifier`);
        this.projetForm.reset();
        $('#editModal').modal('hide');
        this.load();
      }
    )
  }

  delete(id: any) {
    this.projetService.delete(id).subscribe(
      (data: any) => {
        alert(`Votre projet a été supprimer`);
        this.load();
      }
    )
  }
}
