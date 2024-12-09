import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectTambahLaporanPage } from './direct-tambah-laporan.page';

describe('DirectTambahLaporanPage', () => {
  let component: DirectTambahLaporanPage;
  let fixture: ComponentFixture<DirectTambahLaporanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectTambahLaporanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
