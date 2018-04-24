import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgxSmartModalModule} from 'ngx-smart-modal';

import {CaseReportRouting} from './case-report-routing.module';
import {CaseReportListComponent} from './case-report-list/case-report-list.component';
import {CaseReportExportComponent} from './case-report-list/export/case-report-export.component';
import {SortableColumnComponent} from './case-report-list/sort/sortable-column.component';
import {CaseReportExporter} from './case-report-list/exporter/case-report-exporter.service';
import {Filter} from './case-report-list/filtering/filter.pipe';
import {Sort} from './case-report-list/sort/sort.pipe';
import {CaseReportExporterComponent} from './case-report-list/exporter/case-report-exporter.component';
import {CaseReportExporterModalContent} from './case-report-list/exporter/case-report-exporter.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CaseReportRouting,
    NgxSmartModalModule.forChild()
  ],
  declarations: [
    CaseReportListComponent,
    CaseReportExportComponent,
    SortableColumnComponent,
    Filter,
    Sort,
    CaseReportExporterComponent,
    CaseReportExporterModalContent
  ],
  providers: [
    Filter,
    Sort,
    CaseReportExporter
  ],
  entryComponents: [CaseReportExporterModalContent]
})

export class CaseReportModule {
}
