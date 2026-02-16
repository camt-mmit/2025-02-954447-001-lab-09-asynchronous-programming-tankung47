import { ChangeDetectionStrategy, Component, computed, model, signal } from '@angular/core';
import { DynamicSection } from '../../types';
import { createMetadataKey, form, FormField } from '@angular/forms/signals';
import { DecimalPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dynamic-section-form',
  imports: [JsonPipe, FormField, DecimalPipe],
  templateUrl: './dynamic-section-form.html',
  styleUrl: './dynamic-section-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicSectionForm {
  sectionModel = model.required<DynamicSection>();
  protected readonly numberKey = createMetadataKey<number>();
  inputForm = form(this.sectionModel);

  /* inputForm = form(this.sectionModel, (path) => {
    applyEach(path, (sectionPath) => {
      applyEach(sectionPath, (numberPath) => {
        metadata(numberPath, this.numberKey, () => 0);
      });
    });
  }); */

  total = computed(() =>
    this.inputForm()
      .value()
      .map((section) => section.reduce((sum, n) => sum + n, 0)),
  );

  createSection(): void {
    this.inputForm().value.update((v) => [...v, [0]]);
  }

  addInput(index: number): void {
    this.inputForm().value.update((v) =>
      v.map((numbers, i) => (i === index ? [...numbers, 0] : numbers)),
    );
  }

  removeNumber(sectionIndex: number, numIndex: number) {
    this.inputForm().value.update((v) =>
      v.map((section, si) =>
        si === sectionIndex ? section.filter((_, i) => i !== numIndex) : section,
      ),
    );
  }

  removeSection(index: number) {
    this.inputForm().value.update((v) => v.filter((_, i) => i !== index));
  }
}
